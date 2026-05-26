import type { Metadata } from "next";
import "../_styles/globals.css";
import Header from "../_components/header";
import Footer from "../_components/footer";
import FixedRunner from "../_components/fixed-runner";
import MagneticCursor from "../_components/magnetic-cursor";

export const metadata: Metadata = {
  title: "Ayush Ratna | Software Engineer",
  description: "Portfolio of Ayush Ratna — building premium digital experiences.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Ayush Ratna | Software Engineer",
    description: "Portfolio of Ayush Ratna — building premium digital experiences.",
    url: "https://yoursite.com",
    siteName: "Ayush Ratna Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MagneticCursor />
        <Header />
        <main>{children}</main>
        <Footer />
        <FixedRunner />
      </body>
    </html>
  );
}
