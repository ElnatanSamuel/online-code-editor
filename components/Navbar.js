import React from "react";

function Navbar() {
  return (
    <div className="navbar flex justify-between  items-center">
      <p className="font-bold text-white text-xl pl-4">Online Code Editor</p>
      <button className="px-4 bg-green-500 py-2 text-xs font-light">
        Full-screen preview
      </button>
      <p className="text-xs cursor-pointer text-gray-400 pr-4">
        Go to compiler
      </p>
    </div>
  );
}

export default Navbar;
