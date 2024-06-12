import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { createClient } from "@/prismicio";
import Header from "./components/Header";

const helvetica = localFont({
  src: [
    {
      path: "./fonts/Helvetica-Neue/HelveticaNeue.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Helvetica-Neue/HelveticaNeue-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Helvetica-Neue/HelveticaNeue-Thin.ttf",
      weight: "100",
      style: "normal",
    },
  ],
});

export async function generateMetadata() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return {
    title: settings.data.site_title,
    description: settings.data.meta_description,
    openGraph: { images: [settings.data.og_image.url || ""] },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={helvetica.className}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
