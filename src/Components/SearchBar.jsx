import React from "react";

const SearchBar = () => {
  return (
    <div className="min-v-screen flex items-center justify-center">
      {/* Search Bar */}
      <div className="flex items-center border-2 border-gray-200 bg-white rounded-full shadow-md pl-8 pr-2 py-1">
        {/* Where Section - Increased width */}
        <div className="flex-[2] pr-4">
          <div className="flex flex-col items-start justify-center space-y-1 p-2 rounded-full hover:bg-gray-100 transition">
            <h4 className="text-sm font-medium text-gray-900">Where</h4>
            <input
              type="text"
              placeholder="Search destinations"
              className="w-full text-sm text-gray-950 focus:outline-none bg-transparent"
            />
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="h-8 w-px bg-gray-200"></div>

        {/* Check-in Section - Decreased width */}
        <div className="flex-1 px-4">
          <div className="flex flex-col items-start justify-center space-y-1 p-2 rounded-full hover:bg-gray-100 transition">
            <h4 className="text-sm font-medium text-gray-900">Check in</h4>
            <input
              type="text"
              placeholder="Add dates"
              className="w-full text-sm text-gray-950 focus:outline-none bg-transparent"
            />
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="h-8 w-px bg-gray-200"></div>

        {/* Check-out Section - Decreased width */}
        <div className="flex-1 px-4">
          <div className="flex flex-col items-start justify-center space-y-1 p-2 rounded-full hover:bg-gray-100 transition">
            <h4 className="text-sm font-medium text-gray-900">Check out</h4>
            <input
              type="text"
              placeholder="Add dates"
              className="w-full text-sm text-gray-950 focus:outline-none bg-transparent"
            />
          </div>
        </div>

        {/* Vertical Divider */}
        <div className="h-8 w-px bg-gray-200"></div>

        {/* Who Section */}
        <div className="flex-1 pl-4 pr-2">
          <div className="flex flex-col items-start justify-center space-y-1 p-2 rounded-full hover:bg-gray-100 transition">
            <h4 className="text-sm font-medium text-gray-900">Who</h4>
            <input
              type="text"
              placeholder="Add guests"
              className="w-full text-sm text-gray-950 focus:outline-none bg-transparent"
            />
          </div>
        </div>

        {/* Search Button */}
        <button className="bg-airbnb text-white rounded-full p-4 hover:bg-airbnb-dark transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar;