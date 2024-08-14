import React, { useState } from "react";
import { FaHome, FaUser, FaEnvelope } from "react-icons/fa";

const NavPillsWithIconVertical = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="border bg-white shadow-lg rounded-lg mr-6">
      <h1 className="text-2xl font-bold m-4">Nav Pills With Icon (Vertical Tabs)</h1>
      <hr />
      <div className="flex flex-col md:flex-row p-4 rounded-lg">
        <div className="flex md:flex-col items-center gap-3 mb-4 md:mb-0 md:mr-4">
          <button
            className={`flex items-center justify-center p-4 rounded-xl w-20 h-20 ${
              activeTab === "home"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setActiveTab("home")}
          >
            <FaHome className="text-3xl md:text-4xl" />
          </button>
          <button
            className={`flex items-center justify-center p-4 rounded-xl w-20 h-20 ${
              activeTab === "profile"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setActiveTab("profile")}
          >
            <FaUser className="text-3xl md:text-4xl" />
          </button>
          <button
            className={`flex items-center justify-center p-4 rounded-xl w-20 h-20 ${
              activeTab === "contact"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setActiveTab("contact")}
          >
            <FaEnvelope className="text-3xl md:text-4xl" />
          </button>
        </div>
        <div className="w-full">
          {activeTab === "home" && (
            <div>
              <h1 className="text-xl font-semibold">Home Details</h1>
              <p className="text-sm md:text-base">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Numquam enim sequi veniam! Nihil debitis, repellat, atque illo
                earum vitae architecto, animi maxime nemo nulla minima.
              </p>
            </div>
          )}
          {activeTab === "profile" && (
            <div>
              <h1 className="text-xl font-semibold">Profile Details</h1>
              <p className="text-sm md:text-base">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Numquam enim sequi veniam! Nihil debitis, repellat, atque illo
                earum vitae architecto, animi maxime nemo nulla minima Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde quos animi voluptatum, sit officiis, earum, quo corporis beatae ipsum aliquam facilis quam. Consequuntur reiciendis vitae molestiae nam necessitatibus quidem id earum odit explicabo, soluta error quasi est eligendi obcaecati hic minima velit eveniet, sequi quibusdam nulla fugit placeat ipsa. Tempora..
              </p>
            </div>
          )}
          {activeTab === "contact" && (
            <div>
              <h1 className="text-xl font-semibold">Contact Details</h1>
              <p className="text-sm md:text-base">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Numquam enim sequi veniam! Nihil debitis, repellat, atque illo
                earum vitae architecto, animi maxime nemo nulla minima.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavPillsWithIconVertical;
