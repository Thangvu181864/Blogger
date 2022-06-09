import React from "react";
import { Viewer } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
function ViewerArticles({ content }) {
  return (
    <Viewer
      viewer={true}
      initialValue={content}
      linkAttributes={{ target: "_blank" }}
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

export default ViewerArticles;
