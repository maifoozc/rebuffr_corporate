import type { Metadata } from "next";
import "./globals.css";
import { Suspense } from "react";
import Header from "./components/header";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "Rebuffr",
  description: "www.rebuffr.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Suspense fallback={<div>Loading...</div>}>
          <main>
            <Header />
            <div
            // className="ml-10 mr-2"
            >
              {children}
            </div>
            <Footer />
          </main>
        </Suspense>
      </body>
    </html>
  );
}
