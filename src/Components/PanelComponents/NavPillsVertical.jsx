import React, { useState } from "react";

const NavPillsVertical = () => {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="border bg-white shadow-lg  rounded-lg mr-6">
      <h1 className="text-2xl font-bold m-4">Nav Pills (Vertical Tabs)</h1>
      <hr />
      <div className="flex  p-4  rounded-lg ">
        <div className="flex flex-col mr-4">
          <button
            className={`p-3 border rounded-t-lg w-24 ${
              activeTab === "home"
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab("home")}
          >
            Home
          </button>
          <button
            className={`p-3 border w-24 ${
              activeTab === "profile"
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab("profile")}
          >
            Profile
          </button>
          <button
            className={`p-3 border rounded-b-lg  w-24 ${
              activeTab === "contact"
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab("contact")}
          >
            Contact
          </button>
        </div>
        <div className="ml-4">
          {activeTab === "home" && (
            <div>
              <h1 className="text-xl font-semibold">Home Details</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Numquam enim sequi veniam! Nihil debitis, repellat, atque illo
                earum vitae architecto, animi maxime nemo nulla minima.
              </p>
            </div>
          )}
          {activeTab === "profile" && (
            <div>
              <h1 className="text-xl font-semibold">Profile Details</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Numquam enim sequi veniam! Nihil debitis, repellat, atque illo
                earum vitae architecto, animi maxime nemo nulla minima.
              </p>
            </div>
          )}
          {activeTab === "contact" && (
            <div>
              <h1 className="text-xl font-semibold">Contact Details</h1>
              <p>
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

export default NavPillsVertical;
