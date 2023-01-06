import React from "react";

function Sidebar() {
  return (
    <div className="sidebar flex flex-col">
      <p className="text-white text-xs py-4 px-2 cursor-pointer hover:bg-slate-700 ">
        Html
      </p>
      <p className="text-white text-xs py-4 px-2 cursor-pointer hover:bg-slate-700 ">
        Css
      </p>
      <p className="text-white text-xs py-4 px-2 cursor-pointer hover:bg-slate-700 ">
        Js
      </p>
      <p className="text-xs px-2 text-gray-500 pt-8">
        More languages to come soon...
      </p>
    </div>
  );
}

export default Sidebar;
