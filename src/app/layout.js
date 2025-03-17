import { Audiowide } from "next/font/google";
import "./globals.css";

// Initialize font
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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${audiowide.variable} antialiased`}>{children}</body>
    </html>
  );
}
