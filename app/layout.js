import { Fraunces, Caveat, Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppBar from "@/components/WhatsAppBar";
import PageTransition from "@/components/PageTransition";
import ScrollMascot from "@/components/ScrollMascot";

const display = Fraunces({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const hand = Caveat({ subsets: ["latin"], variable: "--font-hand", display: "swap" });
const sans = Nunito({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

export const metadata = {
  title: {
    default: "TeddyPups U.A.E. — Premium teacup puppies in Dubai",
    template: "%s | TeddyPups U.A.E.",
  },
  description:
    "Teddy bear and teacup puppies in Dubai. Meet local puppies in our Downtown Dubai showroom or bring home a rare breed imported from trusted breeders.",
  applicationName: "TeddyPups U.A.E.",
  openGraph: {
    title: "TeddyPups U.A.E. — Premium teacup puppies in Dubai",
    description:
      "Teddy bear and teacup puppies in Dubai. Meet local puppies in our Downtown Dubai showroom or bring home a rare breed imported from trusted breeders.",
    type: "website",
    locale: "en_AE",
    siteName: "TeddyPups U.A.E.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fffdf8",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${hand.variable} ${sans.variable}`}>
      <body className="font-sans antialiased">
        <PageTransition />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppBar />
        <ScrollMascot />
      </body>
    </html>
  );
}
