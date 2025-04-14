import Link from "next/link";
import { currentUser } from "@clerk/nextjs";
import { getTranslations } from "next-intl/server";

export default async function Home({
  params: { locale }
}: {
  params: { locale: string };
}) {
  const user = await currentUser();
  const t = await getTranslations();

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
        {t("home.title")}
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
        {t("home.description")}
      </p>

      {!user ? (
        <div className="space-x-4">
          <Link
            href={`/${locale}/sign-up`}
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors inline-block"
          >
            {t("auth.signUp")}
          </Link>
          <Link
            href={`/${locale}/sign-in`}
            className="text-blue-600 hover:text-blue-700 px-6 py-3 rounded-md border border-blue-600 hover:border-blue-700 transition-colors inline-block"
          >
            {t("auth.signIn")}
          </Link>
        </div>
      ) : (
        <Link
          href={`/${locale}/matches`}
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors inline-block"
        >
          {t("home.viewMatches")}
        </Link>
      )}

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            {t("home.features.smartMatching.title")}
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            {t("home.features.smartMatching.description")}
          </p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            {t("home.features.privacy.title")}
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            {t("home.features.privacy.description")}
          </p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            {t("home.features.guidedProcess.title")}
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            {t("home.features.guidedProcess.description")}
          </p>
        </div>
      </div>
    </div>
  );
}
