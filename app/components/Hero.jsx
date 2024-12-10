
// export default function Hero() {
//   return (
    // <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 -dark">
    //   <div className="container mx-auto px-4 py-16">
    //     <div className="max-w-3xl  text-left text-black">
    //       <h1 className="text-4xl md:text-6xl font-bold mb-6">
    //         Welcome to Our Modern Platform
    //       </h1>
    //       <p className="text-xl md:text-2xl mb-8 ">
    //         Discover amazing features and possibilities
    //       </p>
    //       <div className='flex border-2 rounded-2xl max-w-sm bg-white '>
    //         <input type="text" placeholder='Send a message' className='px-4 rounded-2xl outline-none'/>
    //         <button className="bg-[#3b7ab7] m-1 hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-2xl inline-flex items-center transition-all">
    //           Get Started
    //           <FaArrowRight className="ml-2" />
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </section>
//   )
// }



// components/Hero.jsx
import { FaArrowRight } from 'react-icons/fa'
import AnimationManager from "./Animations";

export default function Hero() {
  const animations = [
    {
      target: ".hero-text", // Sélecteur pour le texte
      animation: {
        from: { y: "100%", opacity: 0 },
        to: { y: "0%", opacity: 1, duration: 1, delay: 0, ease: "power2.out" },
      },
    },
    {
      target: ".hero-subtext", // Sélecteur pour un sous-texte
      animation: {
        from: { y: "100%", opacity: 0 },
        to: { y: "0%", opacity: 1, duration: 1, delay: 0.5, ease: "power2.out" },
      },
    },
    {
      target: ".hero-button", // Sélecteur pour un bouton
      animation: {
        from: { y: "100%", opacity: 0 },
        to: { y: "0%", opacity: 1, duration: 1, delay: 0.5, ease: "power2.out" },
      },
    },
  ];

  return (
    <AnimationManager animationTargets={animations}>
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 -dark">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl  text-left text-black">
          <h1 className="hero-text text-4xl md:text-6xl font-bold mb-6">
            Welcome to Our Modern Platform
          </h1>
          <p className="hero-subtext text-xl md:text-2xl mb-8 ">
            Discover amazing features and possibilities
          </p>
          <div className='hero-button flex border-2 rounded-2xl max-w-sm bg-white '>
            <input type="text" placeholder='Send a message' className='px-4 rounded-2xl outline-none'/>
            <button className=" bg-[#3b7ab7] m-1 hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-2xl inline-flex items-center transition-all">
              Get Started
              <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
    </AnimationManager>
  );
}
