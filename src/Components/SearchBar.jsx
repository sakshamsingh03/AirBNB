import React from "react";

const SearchBar = () => {
  return (
    <div className="min-v-screen flex items-center justify-center">
    {/* Search Bar */}
    <div className="flex items-center border-2 border-gray-200 bg-white rounded-full shadow-md pl-8 pr-2 py-1 ">
      {/* Where Section */}
      <div className="flex-1 pr-4 w-6 ">
        <div className=" flex flex-col items-start justify-center space-y-1 p-2  rounded-full hover:bg-gray-100 transition ">
          <h4 className="text-sm text-gray-900  -hover:text-gray-700  ">
            Where
          </h4>
          <input
            type="text"
            placeholder="Search destinations"
            className="w-full text-sm text-gray-950 focus:outline-none bg-transparent"
          />
        </div>
      </div>

      {/* Check-in Section */}
      <div className="flex-1 pr-4">
        <div className=" flex flex-col items-start justify-center space-y-1 p-2 rounded-full hover:bg-gray-100 transition">
          <h4 className="text-sm text-gray-900 -hover:text-gray-700">
            Check in
          </h4>
          <input
            type="text"
            placeholder="Add dates"
            className="w-full text-sm text-gray-950 focus:outline-none bg-transparent"
          />
        </div>
      </div>

      {/* Check-out Section */}
      <div className="flex-1 pr-4">
        <div className=" flex flex-col items-start justify-center space-y-1 p-2 rounded-full hover:bg-gray-100 transition">
          <h4 className="text-sm text-gray-900 -hover:text-gray-700">
            Check out
          </h4>
          <input
            type="text"
            placeholder="Add dates"
            className="w-full text-sm text-gray-950 focus:outline-none bg-transparent"
          />
        </div>
      </div>

      {/* Who Section */}
      <div className="flex-1 pr-4">
        <div className=" flex flex-col items-start justify-center space-y-1 p-2 rounded-full hover:bg-gray-100 transition">
          <h4 className="text-sm text-gray-900 -hover:text-gray-700">
            Who
          </h4>
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
            d="M11 19a8 8 0 100-16 8 8 0 000 16zm0 0l4 4"
          />
        </svg>
      </button>
    </div>
  </div>
  );
};

export default SearchBar;
