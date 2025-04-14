import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/layout/Navbar";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sovchilar - Modern Matchmaking",
  description: "Find your perfect match with Sovchilar's modern matchmaking platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className={inter.className} suppressHydrationWarning>
        <body className="min-h-screen bg-background font-sans antialiased">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="relative flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">
                <div className="container-custom">
                  {children}
                </div>
              </main>
              <footer className="border-t">
                <div className="container-custom">
                  <div className="flex flex-col items-center gap-4 py-10 md:h-24 md:flex-row md:py-0">
                    <div className="flex flex-1 items-center justify-center gap-4 md:justify-start">
                      <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                        Built with ❤️ by Sovchilar Team
                      </p>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
