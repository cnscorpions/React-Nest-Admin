import * as React from "react";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";

import "react-markdown-editor-lite/lib/index.css";

const mdParser = new MarkdownIt();

function handleEditorChange({ html, text }) {
  console.log("handleEditorChange", html, text);
}

export default props => {
  return (
    <MdEditor
      value=""
      renderHTML={text => mdParser.render(text)}
      onChange={handleEditorChange}
    />
  );
};
