import type { Metadata } from "next";
import {Inter , IBM_Plex_Serif} from "next/font/google";
import "./globals.css";



//This section is made for the sections that are not having the sidebar such as log in and sign up page.


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const ibmPlexSerif = IBM_Plex_Serif({
  variable: "--font-ibm-plex-serif",
  weight:["400", '700'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bankify",
  description: "Bankify is a modern banking platform for seamless financial management.",
  icons : {
    icon: '/icons/logo.svg',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // className={`${inter.variable} ${ibmPlexSerif.variable} h-full antialiased`}
    >
      <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>{children}</body>
    </html>
  );
}
