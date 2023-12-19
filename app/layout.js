import { Inter } from "next/font/google";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/options.js";
import { Header } from "./components/header.jsx";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Command App",
  description: "App to store commands",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang='en'>
      <body className={inter.className}>
        {session && <Header />}
        {children}
      </body>
    </html>
  );
}
