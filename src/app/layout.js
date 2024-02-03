import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/shared/Navbar";
import Settings from "./components/shared/Settings";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "DUA APP",
  description: "Dua for islamic muslim people",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex bg-slate-100  p-4 md:p-10 m">
          <Navbar />
          <div className="flex-1">{children}</div>
          <Settings />
        </div>
      </body>
    </html>
  );
}
