'use client'


import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AnimationManager({ children, animationTargets }) {
  const containerRef = useRef();

  useEffect(() => {
    
    // Appliquer les animations pour chaque cible
    animationTargets.forEach(({ target, animation }) => {
      const element = containerRef.current.querySelector(target);
      if (element) {
        gsap.fromTo(element, animation.from, animation.to);
      }
    });
  }, [animationTargets]);

  return (
    <div ref={containerRef}>
      {children}
    </div>
  );
}




// 'use client'

// import { useEffect, useRef, useState } from "react";
// import gsap from "gsap";
// import { useInView } from 'react-intersection-observer';

// export default function AnimationManager({ children, animationTargets }) {
//   const containerRef = useRef();
//   const { ref, inView } = useInView({
//     threshold: 0.5, // Déclenchement de l'animation lorsque 50% du composant est visible
//     triggerOnce: true // Ne déclencher l'animation qu'une seule fois
//   });

//   useEffect(() => {
//     if (inView) {
//       // Appliquer les animations pour chaque cible
//       animationTargets.forEach(({ target, animation }) => {
//         const element = containerRef.current.querySelector(target);
//         if (element) {
//           gsap.fromTo(element, animation.from, animation.to);
//         }
//       });
//     }
//   }, [inView, animationTargets]);

//   return (
//     <div ref={ref}>
//       <div ref={containerRef}>
//         {children}
//       </div>
//     </div>
//   );
// }