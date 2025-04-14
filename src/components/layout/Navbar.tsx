import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import LanguageSelector from '../language/LanguageSelector';
import { Button } from '../ui/Button';
import { UserButton, SignedIn, SignedOut } from "@clerk/nextjs";

const Navbar: React.FC = () => {
  const router = useRouter();

  return (
    <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="text-xl font-semibold text-gray-800 dark:text-white">
            Sovchilar
          </Link>

          <div className="flex items-center gap-4">
            <SignedIn>
              <Link
                href="/matches"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                Matches
              </Link>
              <Link
                href="/profile"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                Profile
              </Link>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>

            <SignedOut>
              <Link
                href="/sign-in"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                Sign In
              </Link>
              <Link
                href="/sign-up"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Sign Up
              </Link>
            </SignedOut>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
