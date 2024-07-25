import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "ZimPak",
  description: "Motorbikes for Zimbabwe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-secondary text-primary">
        <Navbar></Navbar>
        <main>{children}</main>
        <Footer> </Footer>
      </body>
    </html>
  );
}
