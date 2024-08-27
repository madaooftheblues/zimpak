import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Head from "next/head";

export const metadata: Metadata = {
  title: "ZimPak",
  description: "Motorcycles for Zimbabwe",
  icons: {
    icon: [{ url: "/favicon.png", sizes: "any" }],
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body className="bg-secondary text-primary min-h-dvh tracking-wider">
        <Navbar></Navbar>
        <main>{children}</main>
        <Footer> </Footer>
      </body>
    </html>
  );
}
