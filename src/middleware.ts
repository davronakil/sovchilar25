import { authMiddleware } from "@clerk/nextjs/server";

/**
 * List of routes that don't require authentication
 * These routes are accessible to everyone
 */
const publicRoutes = [
  "/",
  "/sign-up",
  "/sign-in",
];

/**
 * List of routes that should be ignored by the middleware
 * These routes can be accessed while signed out
 */
const ignoredRoutes = [
  "/api/webhook",
];

/**
 * Middleware configuration for authentication
 * @see https://clerk.com/docs/references/nextjs/auth-middleware
 */
export default authMiddleware({
  publicRoutes,
  ignoredRoutes,
});

/**
 * Matcher configuration for the middleware
 * This determines which routes the middleware should run on
 */
export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)", // Match all routes except static files
    "/",                            // Match the root route
    "/(api|trpc)(.*)",             // Match API routes
  ],
};
