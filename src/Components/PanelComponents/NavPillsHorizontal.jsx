import React, { useState } from "react";

const NavPillsHorizontal = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="border shadow-lg bg-white rounded-lg ">
    <h1 className="text-2xl font-bold m-4   ">  Nav Pills (Horizontal Tabs)</h1>
    <hr />
    <div className="p-4">
     
      <div className="flex  mb-4 ">
        <button
          className={`py-2 px-4 border  rounded-l-lg ${
            activeTab === "home"
              ? "bg-blue-500 text-white "
              : "hover:bg-gray-200 "
          }`}
          onClick={() => setActiveTab("home")}
        >
          Home
        </button>
        <button
          className={`py-2 px-4  border ${
            activeTab === "profile"
              ? "bg-blue-500 text-white "
              : "hover:bg-gray-200 "
          }`}
          onClick={() => setActiveTab("profile")}
        >
          Profile
        </button>
        <button
          className={`p-3 border rounded-r-lg ${
            activeTab === "contact"
              ? "bg-blue-500  text-white"
              : "hover:bg-gray-200 "
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

export default NavPillsHorizontal;
