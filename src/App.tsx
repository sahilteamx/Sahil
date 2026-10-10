import Header from "./components/Header";
import Hero from "./components/Hero";
import ScopeBand from "./components/ScopeBand";
import Skills from "./components/Skills";
import Highlights from "./components/Highlights";
import Approach from "./components/Approach";
import Training from "./components/Training";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <a
        href="#skills"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-hazard focus:px-4 focus:py-2 focus:font-semibold"
      >
        Skip to skills
      </a>
      <Header />
      <main>
        <Hero />
        <ScopeBand />
        <Skills />
        <Highlights />
        <Approach />
        <Training />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
