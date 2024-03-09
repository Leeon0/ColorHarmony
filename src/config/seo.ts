import type { Metadata } from "next";

const metadata: Metadata = {
  metadataBase: new URL("https://coolcontrast.vercel.app"),
  title: "Color Harmony - Optimize the accessibility of your colors",
  authors: [{ name: "Leo Roquett", url: "https://alextexis.vercel.app" }],
  robots: {
    index: true,
    follow: true,
  },
  description: "Check color pairings for contrast, ensuring alignment with WCAG guidelines",
  openGraph: {
    images: "/og-image.webp",
    url: "https://coolcontrast.vercel.app",
    type: "website",
  },
  icons: [
    {
      rel: "icon",
      url: "/favicon.ico",
    },
    { rel: "apple-touch-icon", url: "/apple-touch-icon.png" },
  ],
  appleWebApp: {
    title: "Color Harmony",
  },
};

export default metadata;
