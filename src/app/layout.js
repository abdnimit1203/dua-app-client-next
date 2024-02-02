import {  Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/shared/Navbar";
import Settings from "./components/shared/Settings";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata = {
  title: "DUA APP",
  description: "Dua for islamic muslim people",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="flex bg-slate-100 min-h-screen p-4 md:p-10">

        <Navbar/>
        {children}
        <Settings/>
        </div>
        </body>
    </html>
  );
}
