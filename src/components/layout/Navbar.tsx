import Link from 'next/link';
import NavItems from './NavItems';
import { ThemeToggle } from '@/components/theme/ThemeToggle';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container-custom">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">Sovchilar</span>
          </Link>

          <div className="flex items-center gap-4">
            <NavItems />
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}
