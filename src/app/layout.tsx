import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


const inter = localFont({
  src: '../../public/fonts/Inter_24pt-Regular.ttf',
  variable: '--font-inter',
});

const greatVibes = localFont({
  src: '../../public/fonts/GreatVibes-Regular.ttf',
  weight: "400",
  variable: '--font-great-vibes',
});

export const metadata: Metadata = {
  title: "Creative Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${greatVibes.variable} font-inter`}>
        
        {children}
      </body>
    </html>
  );
}