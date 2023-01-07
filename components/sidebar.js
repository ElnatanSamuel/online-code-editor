import { useContext } from "react";
import { ClickContext } from "../contexts/clickContext";
import Index from "./index";

function Sidebar() {
  const { html, setIsHtml, setIsCss, setIsJs } = useContext(ClickContext);
  const htmlFile = JSON.stringify(html);
  console.log(htmlFile);
  const handleHtmlClick = () => {
    setIsHtml(true);
    setIsCss(false);
    setIsJs(false);
  };

  const handleCssClick = () => {
    setIsHtml(false);
    setIsCss(true);
    setIsJs(false);
  };

  const handleJsClick = () => {
    setIsHtml(false);
    setIsCss(false);
    setIsJs(true);
  };
  return (
    <div className="sidebar flex flex-col">
      <p
        className="text-white text-xs py-4 px-2 cursor-pointer hover:bg-slate-700 "
        onClick={handleHtmlClick}
      >
        Html
      </p>
      <p
        className="text-white text-xs py-4 px-2 cursor-pointer hover:bg-slate-700 "
        onClick={handleCssClick}
      >
        Css
      </p>
      <p
        className="text-white text-xs py-4 px-2 cursor-pointer hover:bg-slate-700 "
        onClick={handleJsClick}
      >
        Js
      </p>
      <a href={Index} download="index.html">
        Download
      </a>
    </div>
  );
}

export default Sidebar;
