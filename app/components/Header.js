"use client";

import Link from 'next/link';
import Link from 'next/image';
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
          <Image src="logo.jpg" width={900} height={500} />
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#hero" className="text-gray-800 hover:text-turquoise transition-colors">
              Home
            </Link>
            <Link href="#features" className="text-gray-800 hover:text-turquoise transition-colors">
              Features
            </Link>
            <Link href="#about" className="text-gray-800 hover:text-turquoise transition-colors">
              About
            </Link>
          </nav>

          <Link 
            href="/contact"
            className="bg-orange hover:bg-orange-light text-white px-6 py-2 rounded-full transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}