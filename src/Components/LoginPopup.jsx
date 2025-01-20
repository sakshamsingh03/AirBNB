import React from "react";

function LoginPopup({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-108 shadow-lg relative">
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <button
            onClick={onClose}
            className="text-gray-500 text-2xl font-bold hover:text-gray-700"
          >
            &times;
          </button>
          <h2 className="text-md font-bold text-black text-center flex-grow">
            Log in or sign up
          </h2>
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4 text-start">Welcome to Airbnb</h2>

          {/* Country/Region Section */}
          <div className="relative mb-0 ">
            <label
              htmlFor="country"
              className="absolute left-3 top-1 text-xs text-gray-500"
            >
              Country/Region
            </label>
            <select
              id="country"
              className="block w-full p-3 pt-5 pb-1 border rounded-t-md focus:ring-pink-500 focus:border-pink-500 mt-2"
            >
              <option>India (+91)</option>
              <option>United States (+1)</option>
              <option>United Kingdom (+44)</option>
            </select>
          </div>

          {/* Phone Number Section */}
          <div className="relative">
            <label
              htmlFor="phone"
              className="static left-3 top-2 text-xs text-gray-500"
            >
              Phone Number
            </label>
            <div className="flex">
              <span className="p-2 bg-gray-100 border border-r-0 rounded-bl-md text-gray-500">
                +91
              </span>
              <input
                id="phone"
                type="text"
                placeholder=""
                className="block w-full p-3 border rounded-br-md focus:border-pink-500"
              />
            </div>
          </div>

          <p className="text-xs text-gray-500 my-4">
            We’ll call or text you to confirm your number. Standard message and
            data rates apply. <span className="underline">Privacy Policy</span>
          </p>

          <button className="w-full bg-pink-500 text-white py-3 rounded-md hover:bg-pink-600 font-medium text-lg">
            Continue
          </button>

          <div className="flex items-center my-6">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-3 text-gray-500 text-sm">or</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          <div className="space-y-3">
            <button className="w-full border py-3 rounded-md flex items-center justify-center hover:bg-gray-100">
              <img
                src="https://img.icons8.com/color/24/google-logo.png"
                alt="Google"
                className="mr-3"
              />
              Continue with Google
            </button>
            <button className="w-full border py-3 rounded-md flex items-center justify-center hover:bg-gray-100">
              <img
                src="https://img.icons8.com/ios-filled/24/apple-logo.png"
                alt="Apple"
                className="mr-3"
              />
              Continue with Apple
            </button>
            <button className="w-full border py-3 rounded-md flex items-center justify-center hover:bg-gray-100">
              <img
                src="https://img.icons8.com/ios/24/email.png"
                alt="Email"
                className="mr-3"
              />
              Continue with email
            </button>
            <button className="w-full border py-3 rounded-md flex items-center justify-center hover:bg-gray-100">
              <img
                src="https://img.icons8.com/ios-filled/24/facebook-new.png"
                alt="Facebook"
                className="mr-3"
              />
              Continue with Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPopup;
