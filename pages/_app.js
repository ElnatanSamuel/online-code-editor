import { useState } from "react";
import { ClickContext } from "../contexts/clickContext";
import "../styles/globals.css";
import useLocalStorage from "../hooks/useLocalStorage";

export default function App({ Component, pageProps }) {
  const [isHtml, setIsHtml] = useState(true);
  const [isCss, setIsCss] = useState(false);
  const [isJs, setIsJs] = useState(false);

  const [html, setHtml] = useLocalStorage("html", "<h1>Hello world!!!</h1>");
  const [css, setCss] = useLocalStorage("css", "body{}");
  const [js, setJs] = useLocalStorage("js", "const var = 10;");

  return (
    <ClickContext.Provider
      value={{
        isCss,
        isHtml,
        isJs,
        setIsCss,
        setIsHtml,
        setIsJs,
        html,
        setHtml,
        css,
        setCss,
        js,
        setJs,
      }}
    >
      <Component {...pageProps} />
    </ClickContext.Provider>
  );
}
