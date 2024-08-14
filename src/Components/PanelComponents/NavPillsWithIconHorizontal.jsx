import React, { useState } from "react";
import { FaHome, FaUser, FaEnvelope } from "react-icons/fa";

const NavPillsWithIconHorizontal = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="border shadow-lg bg-white rounded-lg ">
        <h1 className="text-2xl font-bold m-4   "> Nav Pills With Icon (Horizontal Tabs)</h1>
        <hr />
    <div className="p-4">
      
      
      <div className="flex space-x-4 mb-4">
      <button
            className={`flex items-center justify-center p-4 rounded-xl w-20 h-20 ${
              activeTab === "home"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setActiveTab("home")}
          >
            <FaHome className="text-4xl" />
          </button>
          <button
            className={`flex items-center justify-center p-4 rounded-xl w-20 h-20 ${
              activeTab === "profile"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setActiveTab("profile")}
          >
            <FaUser className="text-4xl" />
          </button>
          <button
            className={`flex items-center justify-center p-3 rounded-xl  w-20 h-20 ${
              activeTab === "contact"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setActiveTab("contact")}
          >
            <FaEnvelope className="text-4xl" />
          </button>
      </div>
      <div>
        {activeTab === "home" && (
          <div>
            <h1 className="text-xl font-semibold">Home Details</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
              enim sequi veniam! Nihil debitis, repellat, atque illo earum vitae
              architecto, animi maxime nemo nulla minima.
            </p>
          </div>
        )}
        {activeTab === "profile" && (
          <div>
            <h1 className="text-xl font-semibold">Profile Details</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam
              enim sequi veniam! Nihil debitis, repellat, atque illo earum vitae
              architecto, animi maxime nemo nulla minima.
            </p>
          </div>
        )}
        {activeTab === "contact" && (
          <div>
            <h1 className="text-xl font-semibold">Contact Details</h1>
            <p>
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

export default NavPillsWithIconHorizontal;
