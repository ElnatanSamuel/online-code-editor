import React, { useContext } from "react";
import { saveAs } from "file-saver";
import JSZip from "jszip";
import Link from "next/link";

import { ClickContext } from "../contexts/clickContext";

function Navbar() {
  const { js, css, html } = useContext(ClickContext);

  const saveFile = () => {
    var zip = new JSZip();
    zip.file("index.html", html);
    zip.file("style.css", css);
    zip.file("script.js", js);
    zip.generateAsync({ type: "blob" }).then(function (content) {
      // see FileSaver.js
      saveAs(content, "example.zip");
    });

    // let blob = new Blob([html], { type: "text/plain:charset = utf-8" });
    // saveAs(blob, "index.html");
  };
  return (
    <div className="navbar flex justify-between  items-center">
      <p className="font-bold text-white text-xl pl-4">Online Code Editor</p>
      <Link href="/fullscreen">
        <button className="px-4 bg-green-500 py-2 text-xs font-light">
          Full-screen preview
        </button>
      </Link>
      <div className="goto">
        <p className="text-xs cursor-pointer text-gray-400 pr-4">
          Go to compiler
        </p>
        <button className="save-file" onClick={saveFile}>
          Save file
        </button>
      </div>
    </div>
  );
}

export default Navbar;
