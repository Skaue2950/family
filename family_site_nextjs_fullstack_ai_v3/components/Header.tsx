
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { Logo } from "./Logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-black/40 border-b border-black/5 dark:border-white/10">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <Link href="/" className="no-underline">
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#features">Funktioner</Link>
          <Link href="#pricing">Priser</Link>
          <Link href="#faq">FAQ</Link>
          <Link href="#contact" className="btn btn-primary no-underline">Få tidlig adgang</Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
