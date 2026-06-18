import Image from "next/image";
import Link from "next/link";
import { BookOpen, FileText, Home, LifeBuoy, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[#fbf8f2]/25 bg-[#fbf8f2]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8 md:py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/repere-maman-logo-navbar.png"
            alt="Repère Maman"
            width={220}
            height={60}
            priority
            className="h-auto w-[150px] md:w-[210px]"
          />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-[#5E5A52] transition hover:text-[#AE6965]"
          >
            <Home className="h-4 w-4" />
            Accueil
          </Link>

          <Link
            href="/sos"
            className="flex items-center gap-2 text-sm font-medium text-[#5E5A52] transition hover:text-[#AE6965]"
          >
            <LifeBuoy className="h-4 w-4" />
            SOS
          </Link>

          <Link
            href="/mes-suivis"
            className="flex items-center gap-2 text-sm font-medium text-[#5E5A52] transition hover:text-[#AE6965]"
          >
            <FileText className="h-4 w-4" />
            Mes suivis
          </Link>

          <Link
            href="/ressources"
            className="flex items-center gap-2 text-sm font-medium text-[#5E5A52] transition hover:text-[#AE6965]"
          >
            <BookOpen className="h-4 w-4" />
            Ressources
          </Link>
        </div>

        <button
          type="button"
          aria-label="Ouvrir le menu"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D1A9A5]/45 bg-[#E5DFD6]/60 text-[#7A816C] md:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </nav>
  );
}