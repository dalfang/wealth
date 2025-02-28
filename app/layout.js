import { Inter } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Welcome to Wealth",
  description: "Your one stop for your financial health",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {/* header*/}
        {/*footer*/}

        <footer className=" bg-blue-500"></footer>
        {/*sidebar*/}
        {/*main*/}
        {children}
      </body>
    </html>
  );
}
