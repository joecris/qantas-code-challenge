import { Geist, Geist_Mono } from "next/font/google";
import MainHeader from "@/components/MainHeader/MainHeader";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Qantas Hotels",
  description: "Discvoer Qantas Hotels offers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <MainHeader />
        <main className="main">
          {children}
        </main>
      </body>
    </html>
  );
}
