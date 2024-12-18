
import { FaRocket, FaLightbulb, FaCog } from 'react-icons/fa'
import AnimationManager from './Animations'

export default function Features() {
  const features = [
    {
      icon: <FaRocket className="text-4xl mb-4 text-[#3b7ab7]" />,
      title: "Fast Performance",
      description: "Lightning quick loading times and smooth interactions",
      target: ".yardstick", // Sélecteur pour un sous-texte
      animation: {
        from: { y: "100%", opacity: 0 },
        to: { y: "0%", opacity: 1, duration: 1, delay: 0.5, ease: "power2.out" },
      },
    },
    {
      icon: <FaLightbulb className="text-4xl mb-4 text-[#3b7ab7]" />,
      title: "Smart Solutions",
      description: "Intelligent features that adapt to your needs",
      target: ".yardstick1", // Sélecteur pour un sous-texte
      animation: {
        from: { y: "100%", opacity: 0 },
        to: { y: "0%", opacity: 1, duration: 1, delay: 0.5, ease: "power2.out" },
      },
    },
    {
      icon: <FaCog className="text-4xl mb-4 text-[#3b7ab7]" />,
      title: "Easy Integration",
      description: "Simple setup process and seamless integration",
      target: ".yardstick", // Sélecteur pour un sous-texte
      animation: {
        from: { y: "100%", opacity: 0 },
        to: { y: "0%", opacity: 1, duration: 1, delay: 1, ease: "power2.out" },
      },
    }
  ]

  return (
    
      <section className="relative h-[32rem]">
        <div className="max-w-5xl mx-auto p-16 bg-white shadow-2xl md:absolute rounded-3xl left-48 -translate-y-20 ">
          <p className='text-[#3b7ab7] uppercase text-sm font-semibold'>Knowledge</p>
          <div className='flex items-start'>
            <h2 className="text-3xl md:text-4xl font-bold text-left mb-16  flex-1">
              Our Features
            </h2>
            <p className='max-w-lg '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis fuga dignissimos neque laborum magni eaque ut corrupti culpa iusto, sint ea sed distinctio incidunt quod! Neque, cum. Animi, nihil hic?</p>
          </div>

          <AnimationManager animationTargets={features}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="yardstick text-center p-6 rounded-lg hover:shadow-xl transition-shadow">
                  {feature.icon}
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>

          </AnimationManager>
        </div>
      </section>
  

  )
}