import { useContext } from "react";
import { ClickContext } from "../contexts/clickContext";

function Fullscreen() {
  const { html, css, js } = useContext(ClickContext);
  const srcDoc = `
    <html>
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script>
    </html>
  `;
  return (
    <div className="fullscreen">
      <iframe
        srcDoc={srcDoc}
        title="output"
        sandbox="allow-scripts"
        width="100%"
        height="100%"
      />
    </div>
  );
}

export default Fullscreen;
