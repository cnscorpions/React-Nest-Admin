import React, { useState, useEffect, useRef, RichUtils } from "react";
import { Editor, EditorState } from "draft-js";

const RichTextEditor = () => {
  // 获取state, setState
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  // render之后，聚焦
  useEffect(() => {
    focus();
  }, []);

  // 获取dom ref
  const editorRef = useRef(null);

  // 打印状态
  const logState = () => console.log(editorState.toJS());

  // 聚焦
  const focus = () => editorRef.current.focus();

  // 处理键盘时间
  const handleKeyCommand = () => {};

  return (
    <div style={styles.root}>
      <div style={styles.editor} onClick={focus}>
        <Editor
          placeholder="请输入内容..."
          editorState={editorState}
          onChange={setEditorState}
          ref={editorRef}
        />
      </div>
      <input
        onClick={logState}
        style={styles.button}
        type="button"
        value="Log State"
      />
    </div>
  );
};

const styles = {
  root: {
    fontFamily: "'Helvetica', sans-serif",
    padding: 20,
    maxWidth: 600
  },
  editor: {
    border: "1px solid #ccc",
    cursor: "text",
    minHeight: 80,
    padding: 10
  },
  button: {
    marginTop: 10,
    textAlign: "center"
  }
};

export default RichTextEditor;
