import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { dracula } from "@uiw/codemirror-theme-dracula";

import { css } from "@codemirror/lang-css";

function Cssedit(props) {
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
        extensions={[css()]}
        onChange={handleChange}
      />
    </div>
  );
}

export default Cssedit;
