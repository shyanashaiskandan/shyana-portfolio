import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './components/Navbar'


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shyana Shaiskandan",
  description: "Shyana Shaiskandan's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-grey">
        <div className="w-screen h-screen"> 
        <Navbar/> 
        {children}
        </div>
      </body>
    </html>
  );
}
