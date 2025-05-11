import { Audiowide } from "next/font/google";
import "./globals.css";
import ServiceWorkerRegister from "../components/ServiceWorkerRegister";

const audiowide = Audiowide({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-audiowide",
});

export const metadata = {
  title: "QR Code Generator",
  description: "Generate QR codes easily",
  icons: {
    icon: "/logo.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${audiowide.variable} antialiased`}>
        <ServiceWorkerRegister />
        {children}
      </body>
    </html>
  );
}
