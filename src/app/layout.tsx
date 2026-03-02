import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SideNavigation from "@/components/SideNavigation";
import Title from "@/components/Title";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marcela Obeso",
  description: "I'm Marcela Obeso, a Fullstack developer with proficient experience in JavaScript, ReactJS, NextJS, and certified in TypeScript, Github Actions, and as a GCP associate..",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <header className="flex text-left text-6xl md:text-5xl font-bold p-7">
            <Title/>
      </header>
      <div className="font-[family-name:var(--font-geist-sans)]">
      <main>
        <div className="flex">
          <div>
            <SideNavigation  />
          </div>
          <div className="p-7">
            {children} 
          </div>
        </div>
      </main>
      <footer className="row-start-2">
       
      </footer>
    </div>
      </body>
    </html>
  );
}
