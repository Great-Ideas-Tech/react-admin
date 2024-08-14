import React, { useState } from "react";

const NavLine = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="border shadow-lg bg-white rounded-lg">
      <h1 className="text-2xl font-bold m-4">Nav Line</h1>
      <hr />
      <div className="p-4 border-gray-300">
        {/* Flex container with responsive layout */}
        <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-4 mb-4">
          <button
            className={`py-2 px-4 ${
              activeTab === "home"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("home")}
          >
            Home
          </button>
          <button
            className={`py-2 px-4 ${
              activeTab === "profile"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("profile")}
          >
            Profile
          </button>
          <button
            className={`py-2 px-4 ${
              activeTab === "contact"
                ? "border-b-2 border-blue-500 text-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab("contact")}
          >
            Contact
          </button>
        </div>
        <div>
          {activeTab === "home" && (
            <div>
              <h1 className="text-xl font-semibold">Home Details</h1>
              <p className="text-sm md:text-base">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
                enim sequi veniam! Nihil debitis, repellat, atque illo earum vitae
                architecto, animi maxime nemo nulla minima.
              </p>
            </div>
          )}
          {activeTab === "profile" && (
            <div>
              <h1 className="text-xl font-semibold">Profile Details</h1>
              <p className="text-sm md:text-base">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
                enim sequi veniam! Nihil debitis, repellat, atque illo earum vitae
                architecto, animi maxime nemo nulla minima.
              </p>
            </div>
          )}
          {activeTab === "contact" && (
            <div>
              <h1 className="text-xl font-semibold">Contact Details</h1>
              <p className="text-sm md:text-base">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
                enim sequi veniam! Nihil debitis, repellat, atque illo earum vitae
                architecto, animi maxime nemo nulla minima.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavLine;
