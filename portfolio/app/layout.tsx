import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Toren Long's Website",
  description: "Personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col h-screen bg-gray-50 text-gray-900">
        <div className="h-16">
          <Navbar />
        </div>
        <main className="flex-1 py-8 px-6 bg-gradient-to-br from-blue-300 via-cyan-200 to-blue-40">
          {children}
        </main>
      </body>
    </html>
  );
}
