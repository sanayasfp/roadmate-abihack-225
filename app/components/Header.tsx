import { title } from "process";
import { Container } from "./Container";
import { Logo } from "./Logo";
import Link from "next/link";

const menus = [
  {
    name: "Parcours",
    href: "/tracks",
  },
  {
    name: "Projets",
    href: "/projects",
  },
  {
    name: "Trouver un Co-apprenant",
    href: "/co-learner-matching",
  },
];

export function Header() {
  return (
    <header className="bg-slate-900 text-white py-5">
      <Container className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Logo className="h-8 w-8 mr-2" />
              {/* <span className="text-xl font-bold">Roadmate</span> */}
            </Link>
          </div>
          <nav className="space-x-4">
            {menus.map((menu) => (
              <Link
                key={menu.name}
                href={menu.href}
                className="hover:text-orange-500"
              >
                {menu.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/login" className="text-sm hover:text-orange-500">
            Connexion
          </Link>
          <Link
            href="/register"
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full hover:from-orange-600 hover:to-orange-700 transition"
          >
            {"S'inscrire"}
          </Link>
        </div>
      </Container>
    </header>
  );
}
