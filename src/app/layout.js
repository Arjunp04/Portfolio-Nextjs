import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Arjun Prajapati - Full Stack Developer Portfolio",
  description:
    "Explore the portfolio of Arjun Prajapati, a full stack developer skilled in MERN stack, Next.js, and Tailwind CSS. View projects, skills, and experience in web development.",
  author: "Arjun Prajapati",
  keywords:
    "Arjun Prajapati, Full Stack Developer, MERN Stack, Next.js, Tailwind CSS, Web Developer Portfolio, JavaScript, React, Node.js",
  robots: "index, follow", // Allowing search engines to index the page
  icons: {
    icon: "/logo.jpeg", // Add favicon here
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="bg-black min-h-screen ">{children}</div>
      </body>
    </html>
  );
}
