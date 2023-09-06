import type { Metadata } from "next";
import Header from "@/components/layout/header/Header";
import MainWrapper from "@/components/layout/wrapper/MainWrapper";
import { LayoutProps } from "../types/interface";
import './globals.css';

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <Header />
        <MainWrapper children={children} />
        <footer>[footer]</footer>
      </body>
    </html>
  );
}
