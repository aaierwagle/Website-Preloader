// app/layout.tsx
"use client"

import { ReactNode, useState } from "react";
import Preloader from "@/components/Preloader";
import "./globals.css";




export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  const handlePreloaderComplete = () => {
    setLoading(false); // Set loading to false when Preloader completes
  };

  return (
    <html lang="en">
      <body className="bg-gray-100">
        {loading ? (
          <Preloader onComplete={handlePreloaderComplete} />
        ) : (
          children
        )}
      </body>
    </html>
  );
}
