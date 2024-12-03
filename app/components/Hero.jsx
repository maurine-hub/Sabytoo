import { FaArrowRight } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 -dark">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl  text-left text-black">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to Our Modern Platform
          </h1>
          <p className="text-xl md:text-2xl mb-8 ">
            Discover amazing features and possibilities
          </p>
          <div className='flex'>
            <input type="text" placeholder='Send a message' className='px-4 rounded-md'/>
            <button className="bg-[#3b7ab7] hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-md inline-flex items-center transition-all">
              Get Started
              <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}