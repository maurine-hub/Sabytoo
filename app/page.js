import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features";
import About from "./components/About";
import Step from "./components/Step";
import Mission from "./components/Mission";
import Footer from "./components/Footer";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <>
      <Header/>
      <main className="min-h-screen">
          <section id="hero">
            <Hero/>
          </section>
          <section id="features" >
            <Features/>
          </section>
          <section id="about" >
            <About/>
          </section>
          <section id="step" >
            <Step/>
          </section>
          <section id="mission" >
            <Mission/>
          </section>
          <Footer/>
  
          
          
      </main>
    </>
  );
}
