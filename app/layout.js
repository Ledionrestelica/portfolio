import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ledion Restelica's portfolio",
  description: "Created with love and passion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={`${inter.className} bg-background`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
