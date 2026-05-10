import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-800 mt-20">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>

            <h2 className="text-3xl font-bold text-green-700 mb-6">
              Plantify
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Bringing freshness, elegance, and clean air
              into modern homes through beautiful indoor plants.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-white text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li className="hover:text-green-700 cursor-pointer transition">
                Home
              </li>

              <li className="hover:text-green-700 cursor-pointer transition">
                Plants
              </li>

              <li className="hover:text-green-700 cursor-pointer transition">
                About
              </li>

              <li className="hover:text-green-700 cursor-pointer transition">
                Contact
              </li>

            </ul>

          </div>

          {/* Support */}
          <div>

            <h3 className="text-white text-xl font-semibold mb-6">
              Support
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li className="hover:text-green-700 cursor-pointer transition">
                Help Center
              </li>

              <li className="hover:text-green-700 cursor-pointer transition">
                Privacy Policy
              </li>

              <li className="hover:text-green-700 cursor-pointer transition">
                Terms & Conditions
              </li>

            </ul>

          </div>

          {/* Newsletter */}
          <div>

            <h3 className="text-white text-xl font-semibold mb-6">
              Newsletter
            </h3>

            <p className="text-gray-400 mb-6">
              Subscribe for latest updates and offers.
            </p>

            <div className="flex flex-col gap-4">

              <input
                type="email"
                placeholder="Enter your email"
                className="bg-[#111111] border border-gray-700 rounded-full px-5 py-3 text-white outline-none focus:border-green-700"
              />

              <button className="bg-green-700 text-white py-3 rounded-full hover:bg-green-800 transition">
                Subscribe
              </button>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">

          <p className="text-gray-500 text-sm">
            © 2026 Plantify. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4">

            <div className="w-10 h-10 rounded-full bg-[#111111] flex items-center justify-center text-white hover:bg-green-700 transition cursor-pointer">
              <FaFacebookF />
            </div>

            <div className="w-10 h-10 rounded-full bg-[#111111] flex items-center justify-center text-white hover:bg-green-700 transition cursor-pointer">
              <FaInstagram />
            </div>

            <div className="w-10 h-10 rounded-full bg-[#111111] flex items-center justify-center text-white hover:bg-green-700 transition cursor-pointer">
              <FaTwitter />
            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}