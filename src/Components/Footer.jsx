import React from "react";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { IoGlobeOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-gray-100 p-6 my-5">
      <div className="container mx-auto pl-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Support Section */}
          <div>
            <h3 className="text-lg mb-4 text-gray-900">Support</h3>
            <ul className="space-y-2 text-gray-900">
              <li className="hover:underline cursor-pointer">Help Centre</li>
              <li className="hover:underline cursor-pointer">AirCover</li>
              <li className="hover:underline cursor-pointer">Anti-discrimination</li>
              <li className="hover:underline cursor-pointer">Disability support</li>
              <li className="hover:underline cursor-pointer">Cancellation options</li>
              <li className="hover:underline cursor-pointer">Report neighbourhood concern</li>
            </ul>
          </div>
          {/* Hosting Section */}
          <div>
            <h3 className="text-lg mb-4 text-gray-900">Hosting</h3>
            <ul className="space-y-2 text-gray-900">
              <li className="hover:underline cursor-pointer">Airbnb your home</li>
              <li className="hover:underline cursor-pointer">AirCover for Hosts</li>
              <li className="hover:underline cursor-pointer">Hosting resources</li>
              <li className="hover:underline cursor-pointer">Community forum</li>
              <li className="hover:underline cursor-pointer">Hosting responsibly</li>
              <li className="hover:underline cursor-pointer">Join a free Hosting class</li>
              <li className="hover:underline cursor-pointer">Find a co-host</li>
            </ul>
          </div>
          {/* Airbnb Section */}
          <div>
            <h3 className="text-lg mb-4 text-gray-900">Airbnb</h3>
            <ul className="space-y-2 text-gray-900">
              <li className="hover:underline cursor-pointer">Newsroom</li>
              <li className="hover:underline cursor-pointer">New features</li>
              <li className="hover:underline cursor-pointer">Careers</li>
              <li className="hover:underline cursor-pointer">Investors</li>
              <li className="hover:underline cursor-pointer">Airbnb.org emergency stays</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-300 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-900">
          <div className="mb-4 md:mb-0">
            © 2025 Airbnb, Inc. · <a href="#" className="underline">Privacy</a> ·{" "}
            <a href="#" className="underline">Terms</a> ·{" "}
            <a href="#" className="underline">Sitemap</a> ·{" "}
            <a href="#" className="underline">Company details</a>
          </div>
          <div className="flex items-center space-x-3 pr-12">
            <IoGlobeOutline size={20} />
            <span className="text-gray-900 text-md">English (IN)</span>
            <span className="text-gray-900 text-md">₹ INR</span>
            <div className="flex space-x-2">
            <FaFacebookSquare size={20} />
            <FaSquareTwitter size={20} />
            <FaInstagramSquare size={20} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
