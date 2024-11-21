
import { AnimatePresence } from 'framer-motion';
import localFont from "next/font/local";
import "./globals.css";
import { Transition } from "./transition";

// Fuentes locales
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-hidden`}>
      <AnimatePresence>
        <Transition>{children}</Transition>
      </AnimatePresence>
      </body>
    </html>
  );
}