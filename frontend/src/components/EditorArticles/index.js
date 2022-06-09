import { createRef, useState } from "react";
import { Editor } from "@toast-ui/react-editor";
import formData from "form-data";
import axios from "axios";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";

import "@toast-ui/editor/dist/toastui-editor.css";
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";

function EditorArticles() {
  const editorRef = createRef(null);
  const [content, setContent] = useState(`Hello **world**`);

  const addImageBlobHook = async (blob, callback) => {
    const data = new formData();
    data.append("image", blob);
    const config = {
      method: "post",
      url: "https://api.imgur.com/3/image",
      headers: {
        Authorization: "Client-ID 58f2ebf29687a0b",
      },
      data: data,
    };
    try {
      const res = await axios(config);
      const result = res.data;
      callback(result.data.link, blob.name);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = () => {
    const markdown = editorRef.current.getInstance().getMarkdown();
    setContent(markdown);
  };

  return (
    <Editor
      height="100%"
      ref={editorRef}
      previewStyle="vertical"
      initialValue={content}
      placeholder="Hello world"
      initialEditType="markdown"
      useCommandShortcut={true}
      hooks={{ addImageBlobHook }}
      linkAttributes={{ target: "_blank" }}
      onChange={handleChange}
      toolbarItems={[
        ["heading", "bold", "italic", "strike"],
        ["hr", "quote"],
        ["ul", "ol", "task", "indent", "outdent"],
        ["table", "image", "link"],
        ["code", "codeblock"],
      ]}
      plugins={[
        [
          colorSyntax,
          {
            preset: [
              "#000000",
              "#ffffff",
              "#c7004c",
              "#4C3F91",
              "#F9D923",
              "#36AE7C",
              "#187498",
              "#E8F9FD",
              "#79DAE8",
              "#0AA1DD",
              "#2155CD",
              "#4C3F91",
              "#FF5677",
              "#F8ECD1",
              "#85586F",
              "#F8CB2E",
            ],
          },
        ],
      ]}
      customHTMLRenderer={{
        htmlBlock: {
          iframe(node) {
            return [
              {
                type: "openTag",
                tagName: "iframe",
                outerNewLine: true,
                attributes: node.attrs,
              },
              { type: "html", content: node.childrenHTML },
              { type: "closeTag", tagName: "iframe", outerNewLine: true },
            ];
          },
        },
      }}
    />
  );
}

export default EditorArticles;
