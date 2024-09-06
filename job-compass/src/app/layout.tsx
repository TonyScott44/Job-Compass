import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

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
      <body className={inter.className}>
        <header className="flex justify-between">
          <Link href="/">Job Compass</Link>
          <nav>
            <Link href={'/login'}>Login</Link>
            <Link href={'/new-listing'}>Post New Job</Link>
          </nav>
        </header> 
        {children}
      </body>
    </html>
  );
}
