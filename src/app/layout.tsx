import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "ZimPak",
  description: "Motorcycles for Zimbabwe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-secondary text-primary min-h-dvh grid">
        <Navbar></Navbar>
        <main>{children}</main>
        <Footer> </Footer>
      </body>
    </html>
  );
}
