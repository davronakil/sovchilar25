'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth, UserButton } from "@clerk/nextjs";

export default function NavItems() {
  const pathname = usePathname();
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return null;
  }

  return (
    <div className="flex items-center gap-4">
      {isSignedIn ? (
        <>
          <Link
            href="/matches"
            className={`text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white ${
              pathname === '/matches' ? 'text-blue-600 dark:text-blue-400' : ''
            }`}
          >
            Matches
          </Link>
          <Link
            href="/profile"
            className={`text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white ${
              pathname === '/profile' ? 'text-blue-600 dark:text-blue-400' : ''
            }`}
          >
            Profile
          </Link>
          <UserButton afterSignOutUrl="/" />
        </>
      ) : (
        <>
          <Link
            href="/sign-in"
            className={`text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white ${
              pathname === '/sign-in' ? 'text-blue-600 dark:text-blue-400' : ''
            }`}
          >
            Sign In
          </Link>
          <Link
            href="/sign-up"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Sign Up
          </Link>
        </>
      )}
    </div>
  );
}
