import { useContext } from "react";
import { ClickContext } from "../contexts/clickContext";

function Sidebar() {
  const { setIsHtml, setIsCss, setIsJs } = useContext(ClickContext);

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
    </div>
  );
}

export default Sidebar;
