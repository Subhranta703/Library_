import React from "react";
import banner from "../assets/Ba.png";

function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
            {/* Updated Heading */}
            <h1 className="text-2xl md:text-4xl font-bold">
              Discover the world of <span className="text-blue-600">knowledge</span>{" "}
              and <span className="text-pink-500">innovation!</span>
            </h1>
            {/* Updated Description */}
            <p className="text-sm md:text-xl text-gray-700">
              Dive into a realm of endless possibilities with our extensive collection 
              of resources. Expand your horizons and unlock your potential every single day.
            </p>
            {/* Email Input */}
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                className="grow border-2 border-blue-300 rounded-md px-3 py-2"
                placeholder="Enter your email"
              />
            </label>
          </div>
          {/* Updated Button */}
          <button className="btn mt-6 bg-gradient-to-r from-blue-500 to-pink-500 text-white font-bold px-6 py-2 rounded-lg shadow-lg hover:scale-105 transition-transform">
            Get Started
          </button>
        </div>
        <div className="order-1 w-full mt-20 md:w-1/2">
          {/* Image Section */}
          <img
            src={banner}
            className="md:w-[550px] md:h-[460px] md:ml-12 rounded-lg shadow-lg transition-transform hover:scale-105 duration-500"
            alt="Library Banner"
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
