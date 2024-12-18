"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';


export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-md' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Image src="/images/logo1.png" alt="" width={200} height={80} />
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#hero" className="text-black font-medium hover:text-[#3b7ab7] transition-colors">
              Home
            </Link>
            <Link href="#features" className="text-black font-medium  hover:text-[#3b7ab7] transition-colors">
              Features
            </Link>
            <Link href="#about" className="text-black font-medium  hover:text-[#3b7ab7] transition-colors">
              About
            </Link>
            <Link href="#step" className="text-black font-medium  hover:text-[#3b7ab7] transition-colors">
              Step
            </Link>
            <Link href="#mission" className="text-black font-medium  hover:text-[#3b7ab7] transition-colors">
              Mission
            </Link>
          </nav>

          <Link 
            href="/contact"
            className="bg-[#3b7ab7] hover:bg-orange-600 text-white px-6 py-2 rounded-md transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}