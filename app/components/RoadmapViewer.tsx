"use client";
import React, {useCallback, useEffect, useMemo, useState} from "react";

/**
 * RoadmapViewer
 * -----------------
 * Render an interactive, hierarchical learning roadmap built from a *flat* array of
 * roadmap sections (each with an `id`, optional `parentId`, and an array of `steps`).
 *
 * Features:
 *  - Builds a parent/child tree from flat data (parentId reference, or "null" for root).
 *  - Collapsible sections (all levels).
 *  - Collapsible step details per section.
 *  - Progress checkboxes per step, persisted in `localStorage`.
 *  - Minimal styling with TailwindCSS.
 *
 * Usage:
 * ```tsx
 * import { RoadmapViewer } from "@/components/RoadmapViewer";
 * import roadmapData from "@/data/devops-roadmap.json"; // the JSON you provided
 *
 * export default function Page() {
 *   return (
 *     <div className="p-8 max-w-5xl mx-auto">
 *       <RoadmapViewer data={roadmapData} />
 *     </div>
 *   );
 * }
 * ```
 */

/* -------------------- Types -------------------- */
export interface RoadmapStep {
  title: string;
  details: string;
  resources: string[]; // simple labels; turn into links upstream if you have URLs
}

export interface RawRoadmapItem {
  id: string;
  name: string;
  parentId: string | null; // string "null" is tolerated
  steps: RoadmapStep[];
}

interface RoadmapNode extends Omit<RawRoadmapItem, "parentId"> {
  children: RoadmapNode[];
}

export interface RoadmapViewerProps {
  /** Flat array of roadmap items (the JSON you passed). */
  data: RawRoadmapItem[];
  /** start with all nodes expanded? default true */
  defaultExpanded?: boolean;
  /** localStorage key namespace for progress persistence */
  storageKey?: string;
}

/* -------------------- Helpers -------------------- */
function normalizeParentId(v: string | null): string | null {
  if (v == null) return null;
  const s = String(v).trim();
  if (!s || s.toLowerCase() === "null" || s === "undefined") return null;
  return s;
}

function buildTree(items: RawRoadmapItem[]): RoadmapNode[] {
  const map = new Map<string, RoadmapNode>();
  // first pass: clone & init children
  items.forEach((it) => {
    map.set(it.id, { ...it, children: [] });
  });
  const roots: RoadmapNode[] = [];
  // second pass: attach children
  items.forEach((it) => {
    const pid = normalizeParentId(it.parentId);
    const node = map.get(it.id)!;
    if (pid && map.has(pid)) {
      map.get(pid)!.children.push(node);
    } else {
      roots.push(node);
    }
  });
  return roots;
}

/* -------------------- LocalStorage Progress -------------------- */
// We'll persist step completion by a derived id: `${sectionId}::${stepIndex}`.
function makeStepKey(sectionId: string, stepIdx: number) {
  return `${sectionId}::${stepIdx}`;
}

function loadProgress(ns: string): Record<string, boolean> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(ns);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === "object") return parsed as Record<string, boolean>;
  } catch {
    /* ignore */
  }
  return {};
}

function saveProgress(ns: string, data: Record<string, boolean>) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(ns, JSON.stringify(data));
  } catch {
    /* ignore */
  }
}

/* -------------------- RoadmapViewer -------------------- */
export function RoadmapViewer({
  data,
  defaultExpanded = true,
  storageKey = "roadmap-progress",
}: RoadmapViewerProps) {
  // build tree once
  const tree = useMemo(() => buildTree(data), [data]);

  // load persisted step completion
  const [progress, setProgress] = useState<Record<string, boolean>>(() => loadProgress(storageKey));

  // persist on change
  useEffect(() => {
    saveProgress(storageKey, progress);
  }, [progress, storageKey]);

  // compute summary stats (steps done vs total)
  const { totalSteps, doneSteps } = useMemo(() => {
    let t = 0,
      d = 0;
    const walk = (nodes: RoadmapNode[]) => {
      nodes.forEach((n) => {
        n.steps.forEach((_, i) => {
          const k = makeStepKey(n.id, i);
          t += 1;
          if (progress[k]) d += 1;
        });
        if (n.children.length) walk(n.children);
      });
    };
    walk(tree);
    return { totalSteps: t, doneSteps: d };
  }, [tree, progress]);

  return (
    <div className="w-full">
      {/* Progress summary */}
      <div className="mb-6 flex items-center gap-4">
        <ProgressBar value={totalSteps ? (doneSteps / totalSteps) * 100 : 0} />
        <span className="text-sm text-gray-600">
          {doneSteps}/{totalSteps} étapes complétées
        </span>
      </div>

      <div className="space-y-6">
        {tree.map((node) => (
          <RoadmapSection
            key={node.id}
            node={node}
            level={0}
            defaultExpanded={defaultExpanded}
            progress={progress}
            setProgress={setProgress}
          />
        ))}
      </div>
    </div>
  );
}

/* -------------------- ProgressBar -------------------- */
function ProgressBar({ value }: { value: number }) {
  return (
    <div className="relative h-3 w-48 overflow-hidden rounded-full bg-gray-200">
      <div
        className="h-full bg-orange-500 transition-all duration-300"
        style={{ width: `${Math.min(Math.max(value, 0), 100)}%` }}
      />
    </div>
  );
}

/* -------------------- Section Node -------------------- */
interface RoadmapSectionProps {
  node: RoadmapNode;
  level: number;
  defaultExpanded: boolean;
  progress: Record<string, boolean>;
  setProgress: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
}

function RoadmapSection({ node, level, defaultExpanded, progress, setProgress }: RoadmapSectionProps) {
  const [open, setOpen] = useState(defaultExpanded);
  const toggle = () => setOpen((o) => !o);

  // derived counts for section progress
  const { sectionTotal, sectionDone } = useMemo(() => {
    let t = node.steps.length;
    let d = 0;
    node.steps.forEach((_, i) => {
      if (progress[makeStepKey(node.id, i)]) d += 1;
    });
    return { sectionTotal: t, sectionDone: d };
  }, [node, progress]);

  // indent multiplier; use inline style to avoid needing dynamic Tailwind classes
  const indent = level * 16; // px

  return (
    <div>
      {/* Section Header */}
      <div
        className="relative flex w-full cursor-pointer items-start gap-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md"
        style={{ marginLeft: indent }}
        onClick={toggle}
      >
        {/* Caret */}
        <span className="mt-1 select-none text-sm text-gray-500">
          {open ? "▾" : "▸"}
        </span>
        <div className="flex-1">
          <h3 className="font-semibold text-lg text-slate-800">{node.name}</h3>
          {sectionTotal > 0 && (
            <p className="mt-1 text-xs text-gray-500">
              {sectionDone}/{sectionTotal} étapes · cliquer pour {open ? "réduire" : "développer"}
            </p>
          )}
        </div>
      </div>

      {/* Section Body */}
      {open && (
        <div className="mt-3 space-y-4" style={{ marginLeft: indent + 24 }}>
          {/* Steps */}
          {node.steps.map((step, i) => (
            <RoadmapStepRow
              key={i}
              sectionId={node.id}
              stepIdx={i}
              step={step}
              progress={progress}
              setProgress={setProgress}
            />
          ))}

          {/* Children */}
          {node.children.length > 0 && (
            <div className="space-y-6 border-l-2 border-dashed border-gray-200 pl-4">
              {node.children.map((ch) => (
                <RoadmapSection
                  key={ch.id}
                  node={ch}
                  level={level + 1}
                  defaultExpanded={defaultExpanded}
                  progress={progress}
                  setProgress={setProgress}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* -------------------- Step Row -------------------- */
interface RoadmapStepRowProps {
  sectionId: string;
  stepIdx: number;
  step: RoadmapStep;
  progress: Record<string, boolean>;
  setProgress: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
}

function RoadmapStepRow({ sectionId, stepIdx, step, progress, setProgress }: RoadmapStepRowProps) {
  const [open, setOpen] = useState(false);
  const k = makeStepKey(sectionId, stepIdx);
  const done = !!progress[k];

  const toggleDone = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setProgress((prev) => ({ ...prev, [k]: checked }));
  }, [k, setProgress]);

  return (
    <div className="rounded-md border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          checked={done}
          onChange={toggleDone}
          className="mt-1 h-4 w-4 cursor-pointer rounded border-gray-300 text-orange-600 focus:ring-orange-500"
        />
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="flex-1 text-left"
        >
          <div className="flex items-center justify-between">
            <span className="font-medium text-slate-800">
              {step.title}
            </span>
            <span className="ml-4 text-xs text-blue-600 underline">
              {open ? "Masquer" : "Détails"}
            </span>
          </div>
        </button>
      </div>
      {open && (
        <div className="mt-3 pl-7 text-sm text-gray-700">
          <p>{step.details}</p>
          {step.resources?.length > 0 && (
            <div className="mt-2">
              <p className="font-semibold text-slate-700">Ressources :</p>
              <ul className="ml-4 list-disc space-y-1">
                {step.resources.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* -------------------- Example Storybook-ish Preview -------------------- */
// You can delete this. It lets you quickly preview the component in isolation
// if you import this file directly in a Next.js page.
export function RoadmapViewerPreview({ sample }: { sample: RawRoadmapItem[] }) {
  return (
    <div className="p-6">
      <RoadmapViewer data={sample} />
    </div>
  );
}
