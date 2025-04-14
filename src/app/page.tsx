import Link from "next/link";
import { auth } from "@clerk/nextjs";

export default async function Home() {
  const { userId } = auth();

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
        Find Your Perfect Match
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
        Welcome to Sovchilar, where traditional matchmaking meets modern technology.
        We help you find meaningful connections based on your values, interests, and life goals.
      </p>

      {!userId ? (
        <div className="space-x-4">
          <Link
            href="/sign-up"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors inline-block"
          >
            Get Started
          </Link>
          <Link
            href="/sign-in"
            className="text-blue-600 hover:text-blue-700 px-6 py-3 rounded-md border border-blue-600 hover:border-blue-700 transition-colors inline-block"
          >
            Sign In
          </Link>
        </div>
      ) : (
        <Link
          href="/matches"
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors inline-block"
        >
          View Matches
        </Link>
      )}

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Smart Matching
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Our advanced algorithm considers your preferences, values, and lifestyle to suggest compatible matches.
          </p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Privacy First
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Your privacy and security are our top priority. Control what you share and who can see your profile.
          </p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Guided Process
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Get personalized support throughout your journey to finding the right match.
          </p>
        </div>
      </div>
    </div>
  );
}
