import React, { useState } from "react";
import { IoClose, IoArrowBack } from "react-icons/io5";

const COUNTRY_CODES = [
  { code: "+91", country: "India", length: 10 },
  { code: "+1", country: "United States", length: 10 },
  { code: "+44", country: "United Kingdom", length: 10 }
];

function LoginPopup({ onClose }) {
  const [isPhoneFocused, setIsPhoneFocused] = useState(false);
  const [phoneValue, setPhoneValue] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(COUNTRY_CODES[0]);
  const [phoneError, setPhoneError] = useState("");
  const [showOtpPopup, setShowOtpPopup] = useState(false);

  const handlePhoneChange = (e) => {
    const input = e.target.value.replace(/\D/g, ""); // Only numbers
    setPhoneValue(input);
    setPhoneError("");
  };

  const handleCountryChange = (e) => {
    const country = COUNTRY_CODES.find((c) => c.code === e.target.value);
    setSelectedCountry(country);
  };

  const handleContinue = () => {
    if (phoneValue.length !== selectedCountry.length) {
      setPhoneError("Phone number is required");
    } else {
      setPhoneError("");
      setShowOtpPopup(true); // Show OTP popup after validation
    }
  };

  return (
    <>
      {!showOtpPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg w-108 shadow-lg relative border border-black">
            <div className="flex items-center justify-between px-6 py-4 border-b border-black">
              <button onClick={onClose} className="text-gray-500 text-2xl font-bold hover:text-gray-700">
                &times;
              </button>
              <h2 className="text-md font-bold text-black text-center flex-grow">
                Log in or sign up
              </h2>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-start">Welcome to Airbnb</h2>

              <select id="country" className="block w-full p-3 border border-black rounded-t-md focus:outline-none" value={selectedCountry.code} onChange={handleCountryChange}>
                {COUNTRY_CODES.map((country) => (
                  <option key={country.code} value={country.code}>
                    {country.country} ({country.code})
                  </option>
                ))}
              </select>

              <div className="relative">
                <label htmlFor="phone" className={`absolute left-3 text-sm text-gray-500 transition-all duration-200 ${isPhoneFocused || phoneValue ? "text-xs opacity-100 " : "top-3 opacity-0"}`}>
                  Phone Number
                </label>
                <div className="flex">
                  <div className="w-16 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    {selectedCountry.code}
                  </div>
                  <input
                    id="phone"
                    type="tel"
                    placeholder={!isPhoneFocused ? "Phone Number" : ""}
                    value={phoneValue}
                    onChange={handlePhoneChange}
                    className="w-full p-3 pl-12 border border-black rounded-b-md bg-white focus:outline-none"
                    onFocus={() => setIsPhoneFocused(true)}
                    onBlur={() => setIsPhoneFocused(false)}
                  />
                </div>
                {phoneError && <p className="text-red-500 text-xs mt-1">{phoneError}</p>}
              </div>

              <p className="text-xs text-gray-500 my-4">
                We'll call or text you to confirm your number. Standard message and data rates apply. <span className="underline">Privacy Policy</span>
              </p>

              <button onClick={handleContinue} className="w-full bg-pink-500 text-white py-3 rounded-md hover:bg-pink-600 font-medium text-lg">
                Continue
              </button>

              {/* Or Section */}
              <div className="flex items-center my-6">
                <hr className="flex-grow border-gray-300" />
                <span className="mx-3 text-gray-500 text-sm">or</span>
                <hr className="flex-grow border-gray-300" />
              </div>

              <div className="space-y-3">
                <button className="w-full border border-black py-3 rounded-md flex items-center justify-center hover:bg-gray-100">
                  <img
                    src="https://img.icons8.com/color/24/google-logo.png"
                    alt="Google"
                    className="mr-3"
                  />
                  Continue with Google
                </button>
                <button className="w-full border border-black py-3 rounded-md flex items-center justify-center hover:bg-gray-100">
                  <img
                    src="https://img.icons8.com/ios-filled/24/apple-logo.png"
                    alt="Apple"
                    className="mr-3"
                  />
                  Continue with Apple
                </button>
                <button className="w-full border border-black py-3 rounded-md flex items-center justify-center hover:bg-gray-100">
                  <img
                    src="https://img.icons8.com/ios/24/email.png"
                    alt="Email"
                    className="mr-3"
                  />
                  Continue with Email
                </button>
                <button className="w-full border border-black py-3 rounded-md flex items-center justify-center hover:bg-gray-100">
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
      )}

      {showOtpPopup && (
        <OTPPopup phoneNumber={`${selectedCountry.code} ${phoneValue}`} onClose={() => setShowOtpPopup(false)} />
      )}
    </>
  );
}

function OTPPopup({ phoneNumber, onClose }) {
  const [otp, setOtp] = useState("");
  const isOtpComplete = otp.length === 6;

  const handleChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 6) { // Only allow numbers and limit to 6 digits
      setOtp(value);
    }
  };

  const handleBackspace = (e) => {
    if (e.key === "Backspace" && otp.length > 0) {
      setOtp(otp.slice());
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-[600px] relative">
        <div className="flex items-center justify-between">
          <button className="text-gray-500" onClick={onClose}>
            <IoArrowBack size={24} />
          </button>
          <h2 className="text-lg font-semibold flex-1 text-center">
            Confirm your number
          </h2>
        </div>

        <p className="text-gray-600 text-start mt-10">
          Enter the code we’ve sent via SMS to{" "}
          <span className="font-medium">{phoneNumber}</span>:
        </p>

        <div className="flex justify-start gap-3 mt-5">
          <input
            type="text"
            maxLength="6"
            value={otp}
            onChange={handleChange}
            onKeyDown={handleBackspace}
            className="w-28 h-12 text-xl font-semibold text-center border border-black rounded-md focus:outline-none focus:ring-2  "
            placeholder="____"
          />
        </div>

        <div className="flex justify-between mt-16 items-center">
          <p className="text-sm text-black-800 cursor-pointer underline hover:bg-gray-100 p-3 rounded-lg">
            More options
          </p>
          <button
            className={`w-[120px] py-3 rounded-lg text-lg font-semibold ${isOtpComplete ? "bg-red-500 text-white" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}
            disabled={!isOtpComplete}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPopup;
