import type { Metadata } from "next";
import {Roboto} from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Footer from "@/components/Footer";




const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Consxtrack",
  description: "Modern construction project management platform for streamlined workflow tracking, resource management, and team collaboration.",
  icons: {
    icon: '/constracknobg.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="m-0 p-0">
      <body
        className={`${roboto.variable} antialiased` + "m-0 p-0"}
      >
        <main className="min-h-screen">
          {children}
        </main>
        <Toaster richColors />
        
      </body>
    </html>
  );
}
