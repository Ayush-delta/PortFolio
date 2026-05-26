import type { Metadata } from "next";
import "../_styles/globals.css";
import Header from "../_components/header";
import Footer from "../_components/footer";
import FixedRunner from "../_components/fixed-runner";
import MagneticCursor from "../_components/magnetic-cursor";

export const metadata: Metadata = {
  title: "Your Name | Software Engineer",
  description: "Portfolio of Your Name — building premium digital experiences.",
  openGraph: {
    title: "Your Name | Software Engineer",
    description: "Portfolio of Your Name — building premium digital experiences.",
    url: "https://yoursite.com",
    siteName: "Your Name Portfolio",
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
