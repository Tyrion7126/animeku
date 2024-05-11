import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '@radix-ui/themes/styles.css';
import { Theme as RadixTheme, Section } from "@radix-ui/themes";
import { ThemeProvider as NextThemeProvider } from "next-themes"
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-gray-900`}>
        <NextThemeProvider attribute="class">
          <RadixTheme hasBackground={false} accentColor="indigo" radius="large">
            <Section pt="0">
              <Navbar />
              {children}
            </Section>
          </RadixTheme>
        </NextThemeProvider>
      </body>
    </html>
  );
}
