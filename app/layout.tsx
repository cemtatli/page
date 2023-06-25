

import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Layout from "@/components/layout/layout";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
