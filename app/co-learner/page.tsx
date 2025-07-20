"use client";

import { useState } from "react";
import { Header } from "../components/Header";
import UsersInvitation from "../components/UsersInvitation";
import { db, User } from "@/seeds";

export default function GenerateRoadmap() {
  const [users, setUsers] = useState<User[]>(db.users.getRows());
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <div className="bg-gray-50 p-8 rounded-lg max-w-7xl mx-auto">
          <UsersInvitation Users={users} />
        </div>
      </main>
    </div>
  );
}
