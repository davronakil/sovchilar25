import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // Routes that can be accessed while signed out
  publicRoutes: [
    "/",
    "/api/webhook",
    "/sign-in",
    "/sign-up",
    "/api/webhooks/clerk",
    "/api/webhooks/stripe",
    "/:locale",
    "/:locale/sign-in",
    "/:locale/sign-up",
    "/:locale/about",
    "/:locale/contact",
    "/:locale/privacy",
    "/:locale/terms"
  ],
  ignoredRoutes: [
    "/api/webhooks/clerk",
    "/api/webhooks/stripe"
  ]
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
