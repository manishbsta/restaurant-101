import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { MenuTab } from "@/components/sections/MenuTab";
import { EstateGallery } from "@/components/sections/EstateGallery";
import { Reviews } from "@/components/sections/Reviews";
import { LocationMap } from "@/components/sections/LocationMap";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { MobileActionBar } from "@/components/mobile-action-bar";

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <MenuTab />
        <EstateGallery />
        <Reviews />
        <LocationMap />
        <Contact />
      </main>
      <Footer />
      <MobileActionBar />
    </>
  );
}