import Link from 'next/link';
import CTA from './CTA';

export default function Footer() {
  return (
    <footer className="relative bg-gray-50 pt-16 pb-8">
      <CTA/>
      <div className="container mx-auto px-4 mt-36">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <img src="/images/logo.png" alt="" width={50} height={50}/>
            <p className="text-gray-600">
              Creating amazing solutions for your business needs.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#hero" className="text-gray-600 hover:text-[#3b7ab7]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-gray-600 hover:text-[#3b7ab7]">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-600 hover:text-[#3b7ab7]">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-[#3b7ab7]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Features</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">Fast Performance</li>
              <li className="text-gray-600">Smart Solutions</li>
              <li className="text-gray-600">Easy Integration</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">contact@example.com</li>
              <li className="text-gray-600">+1 234 567 890</li>
              <li className="text-gray-600">123 Business Street</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} YourCompany. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}