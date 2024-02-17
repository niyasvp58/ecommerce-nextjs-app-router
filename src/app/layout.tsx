import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../node_modules/bootstrap/dist/css/bootstrap.css"
import Header from "./component/header/page";
import { ShopContextProvider } from "./component/contextcart/contextcart";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

type RootLayoutProps= {
  children: React.ReactNode; // Define children prop as ReactNode
}

export default function RootLayout({children}:RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Header />
        <ShopContextProvider >
          {children}
          </ShopContextProvider>
        
        
        </body>
    </html>
  );
}
