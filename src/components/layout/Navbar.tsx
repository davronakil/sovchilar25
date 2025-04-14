import Link from 'next/link';
import NavItems from './NavItems';

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="text-xl font-semibold text-gray-800 dark:text-white">
            Sovchilar
          </Link>
          <NavItems />
        </div>
      </div>
    </nav>
  );
}
