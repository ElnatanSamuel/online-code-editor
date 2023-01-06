import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";

function Htmledit(props) {
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
        extensions={[
          html({
            matchClosingTags: true,
            selfClosingTags: true,
            autoCloseTags: true,
          }),
        ]}
        onChange={handleChange}
      />
    </div>
  );
}

export default Htmledit;
