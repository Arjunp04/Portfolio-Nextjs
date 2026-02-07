import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Arjun Prajapati - Frontend Developer Portfolio",
  description:
    "Explore the portfolio of Arjun Prajapati, a Frontend Developer specializing in React, Next.js, Tailwind CSS, and modern responsive web interfaces. Discover projects showcasing UI/UX design, dynamic web components, and frontend development expertise.",
  authors: [{ name: "Arjun Prajapati" }],
  keywords: [
    "Arjun Prajapati",
    "Arjun Prajapati Portfolio",
    "Arjun Prajapati IITN",
    "Frontend Developer",
    "React",
    "Next.js",
    "Tailwind CSS",
    "UI/UX",
    "Web Design",
    "JavaScript",
    "Responsive Web Development",
    "Portfolio",
    "Web Interfaces",
    "Frontend Projects",
  ],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo.jpeg",
    openGraph: {
      title: "Arjun Prajapati - Frontend Developer Portfolio",
      description:
        "Explore the portfolio of Arjun Prajapati, a Frontend Developer.",
      images: ["/logo.jpeg"],
      type: "website",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="bg-black min-h-screen">{children}</div>
      </body>
    </html>
  );
}
