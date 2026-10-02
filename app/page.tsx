import { ActionBar } from "@/components/ActionBar";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Gallery } from "@/components/Gallery";
import { Menu } from "@/components/Menu";
import { Story } from "@/components/Story";
import { Signature } from "@/components/Signature";
import { Visit } from "@/components/Visit";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Story />
        <Signature />
        <Menu />
        <Gallery />
        <Visit />
      </main>
      <Footer />
      <ActionBar />
    </>
  );
}
