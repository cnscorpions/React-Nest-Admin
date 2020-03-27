import React, { useState, useEffect, useRef } from "react";

import { Editor, createEditorState } from "medium-draft";

import "medium-draft/lib/index.css";

const RichTextEditor = () => {
  const [editorState, setEditorState] = useState(createEditorState());

  // render后调用一次focus
  useEffect(() => {
    focus();
  }, []);

  const editorRef = useRef(null);

  const focus = () => editorRef.current.focus();

  return (
    <Editor
      editorState={editorState}
      onChange={setEditorState}
      placeholder="写点啥..."
      ref={editorRef}
    />
  );
};

export default RichTextEditor;
