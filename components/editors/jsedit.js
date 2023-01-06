import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { javascript } from "@codemirror/lang-javascript";

function Jsedit(props) {
  const { value, onChange } = props;
  const handleChange = React.useCallback(
    (value, viewUpdate) => {
      onChange(value);
    },
    [onChange]
  );
  return (
    <div>
      <CodeMirror
        value={value}
        height="calc(100vh - 60px)"
        theme={dracula}
        extensions={[javascript({ jsx: true })]}
        onChange={handleChange}
      />
    </div>
  );
}

export default Jsedit;
