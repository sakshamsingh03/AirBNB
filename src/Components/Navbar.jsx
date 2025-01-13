import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { IoGlobeOutline } from 'react-icons/io5';
import { RxHamburgerMenu } from 'react-icons/rx';

export default function Navbar() {
  return (
    <>
      <div className="w-full items-center flex flex-row justify-between text-xl py-2 pt-6">
        <img
          className="h-8 w-44 self-start pl-16"
          src='Airbnb_logo_PNG3.png'
          alt="Airbnb"
        />
        <div className="flex flex-row text-gray-500 gap-x-3 text-sd">
          <p className="hover:bg-gray-200 px-3 py-2 rounded-full hover:text-black cursor-pointer">
            Stays
          </p>
          <p className="hover:bg-gray-200 px-2 py-2 rounded-full hover:text-black cursor-pointer">
            Experiences
          </p>
        </div>
        <div className="pr-16 flex flex-row items-center gap-x-4">
          <p className="text-sm font-bold">Airbnb your home</p>
          <IoGlobeOutline size={20} />
          <div className="flex gap-x-2 border-2 border-gray-300 bg-white px-4 py-2 rounded-full hover:shadow-md hover:shadow-gray-500/50 cursor-pointer items-center">
            <RxHamburgerMenu size={20} />
            <CgProfile size={32} /> 
          </div>
        </div>
      </div>
    </>
  );
}
