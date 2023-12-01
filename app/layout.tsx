import type { Metadata } from "next";
import "./globals.css";
import Navbar from "components/Navbar";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Arzinaja Test",
  description: "Generated by Arzinaja Test",
};

const iranSans = localFont({ src: "../public/fonts/IRANSans_Medium.ttf" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa">
      <body className={`${iranSans.className} iranSans`}>
        <Navbar /> {children}
      </body>
    </html>
  );
}
