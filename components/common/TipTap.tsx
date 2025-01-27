"use client";

import "prosemirror-view/style/prosemirror.css";
import { BubbleMenu, EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { BubbleMenu as BubbleMenuExtension } from "@tiptap/extension-bubble-menu";
import { cn } from "@/libs/utils";
import { Markdown } from "tiptap-markdown";
import "highlight.js/styles/github-dark-dimmed.css";
import { CodeBlockLowlight } from "@tiptap/extension-code-block-lowlight";
import { all, createLowlight } from "lowlight";
import { CodeBlock } from "@tiptap/extension-code-block";

const lowlight = createLowlight(all);

const TipTap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      BubbleMenuExtension,
      Markdown.configure({
        transformPastedText: true,
        breaks: true,
      }),
      CodeBlockLowlight.configure({
        lowlight,
      }),
      CodeBlock.configure({
        HTMLAttributes: {
          class: "hljs ql-syntax",
        },
      }),
    ],
    autofocus: true,
    content: `<p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p><p></p>`,
    editorProps: {
      attributes: {
        class: "blog-post-content focus:outline-none",
      },
    },
  });

  return (
    <>
      <div className="control-group"></div>
      {editor && (
        <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
          <div
            className={cn("flex justify-between items-center gap-3", "pb-3")}
          >
            <button
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={cn(
                editor.isActive("bold") ? "text-theme" : "",
                "px-3 py-2",
                "rounded bg-muted-foreground bg-opacity-50",
                "",
              )}
            >
              Bold
            </button>
            <button
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={cn(
                editor.isActive("italic") ? "text-theme" : "",
                "px-3 py-2",
                "rounded bg-muted-foreground bg-opacity-50",
                "",
              )}
            >
              Italic
            </button>
            <button
              onClick={() => editor.chain().focus().toggleStrike().run()}
              className={cn(
                editor.isActive("strike") ? "text-theme" : "",
                "px-3 py-2",
                "rounded bg-muted-foreground bg-opacity-50",
                "",
              )}
            >
              Strike
            </button>
          </div>
        </BubbleMenu>
      )}
      <EditorContent
        className={cn(`w-full min-h-52`, "p-4", `focus:ring-0`)}
        editor={editor}
      />
    </>
  );
};

export default TipTap;
