import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero.jsx";

export default function Home() {
  return (
    <>
      <Header/>
      <main className="min-h-screen">
          <section id="hero">
            <Hero/>
          </section>
      </main>
    </>
  );
}
