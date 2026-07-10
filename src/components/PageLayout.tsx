import type { ReactNode } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useScrollFade } from "../hooks/useScrollFade";

type PageLayoutProps = {
  children: ReactNode;
};

export default function PageLayout({ children }: PageLayoutProps) {
  useScrollFade();

  return (
    <div className="flex min-h-screen flex-col bg-cream">
      <NavBar />
      <div className="h-20" /> {/* spacer for hamburger */}
      <main className="mx-auto w-full max-w-360 flex-1">{children}</main>
      <Footer />
    </div>
  );
}
