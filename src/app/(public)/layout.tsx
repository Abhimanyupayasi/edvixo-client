import { Header } from "@/components/public/layout/Header";
import { Footer } from "@/components/public/layout/Footer";
import { WhatsAppFAB } from "@/components/public/layout/WhatsAppFAB";
import { LenisProvider } from "@/components/public/layout/LenisProvider";
import { PublicCursor } from "@/components/public/layout/PublicCursor";
// import BottomNavLazy from "@/components/public/BottomNavLazy";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LenisProvider>
      <PublicCursor />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100 focus:bg-primary focus:text-on-primary focus:px-4 focus:py-2 focus:rounded-shape-full focus:font-semibold focus:text-sm"
      >
        Skip to main content
      </a>
      <div className="public-cursor-scope">
        <Header />
        <main className="pb-28 lg:pb-0" id="main-content" role="main">{children}</main>
        <Footer />
        {/* <BottomNavLazy /> */}
        <WhatsAppFAB />
      </div>
    </LenisProvider>
  );
}
