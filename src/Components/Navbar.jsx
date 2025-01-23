import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { IoGlobeOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import LoginPopup from "./LoginPopup";

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false); 
  const [showSignupPopup, setShowSignupPopup] = useState(false); 

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <div className="w-full items-center flex flex-row justify-between text-xl py-2 pt-6">
        {/* Airbnb Logo */}
        <img
          className="h-8 w-44 self-start pl-16"
          src="Airbnb_logo_PNG3.png"
          alt="Airbnb"
        />

        {/* Navigation Links */}
        <div className="flex flex-row text-gray-400 gap-x-3 text-sd pb-3">
          <p className="hover:bg-gray-200 px-3 py-2 rounded-full hover:text-black cursor-pointer">
            Stays
          </p>
          <p className="hover:bg-gray-200 px-3 py-2  rounded-full hover:text-black cursor-pointer">
            Experiences
          </p>
        </div>

        {/* Profile and Menu */}
        <div className="pr-16 flex flex-row items-center gap-x-4 relative">
          <p className="text-sm font-bold hover:underline cursor-pointer">
            Airbnb your home
          </p>
          <IoGlobeOutline size={20} />
          <div
            className="flex gap-x-2 border-2 border-gray-300 bg-white px-4 py-2 rounded-full hover:shadow-md hover:shadow-gray-500/50 cursor-pointer items-center"
            onClick={toggleDropdown}
          >
            <RxHamburgerMenu size={20} />
            <CgProfile size={32} />
          </div>

          {/* Dropdown Menu */}
          {showDropdown && (
            <div className="absolute top-16 right-0 w-56 bg-white shadow-lg rounded-lg text-sm mr-16">
              <div
                className="px-4 py-2 font-medium hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setShowLoginPopup(false);
                  setShowSignupPopup(true); // Show signup popup
                  setShowDropdown(false); // Close dropdown
                }}
              >
                Sign up
              </div>
              <div
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setShowSignupPopup(false);
                  setShowLoginPopup(true); // Show login popup
                  setShowDropdown(false); // Close dropdown
                }}
              >
                Log in
              </div>
              <hr className="border-gray-200" />
              <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Airbnb your home
              </div>
              <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Host an experience
              </div>
              <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Help Centre
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Login Popup */}
      {showLoginPopup && (
        <LoginPopup onClose={() => setShowLoginPopup(false)} />
      )}

      {/* Signup Popup */}
      {showSignupPopup && (
        <LoginPopup onClose={() => setShowSignupPopup(false)} />
      )}
    </>
  );
}
