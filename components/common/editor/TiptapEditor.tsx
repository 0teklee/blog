"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Markdown } from "tiptap-markdown";
import { CodeBlockLowlight } from "@tiptap/extension-code-block-lowlight";
import { all, createLowlight } from "lowlight";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import { FloatingMenu } from "./FloatingMenu";
import { useMount } from "@/libs/hooks/useMount";
import { MenuBar } from "@/components/common/editor/MenuBar";
import { CodeBlock } from "@tiptap/extension-code-block";

import "highlight.js/styles/github-dark-dimmed.css";
import { BubbleMenu as BubbleMenuExtension } from "@tiptap/extension-bubble-menu";
import { cn } from "@/libs/utils";
import { Highlight } from "@tiptap/extension-highlight";
import { TableCell } from "@tiptap/extension-table-cell";
import { TableHeader } from "@tiptap/extension-table-header";
import { TableRow } from "@tiptap/extension-table-row";
import Table from "@tiptap/extension-table";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";

import { CustomBubbleMenu } from "@/components/common/editor/BubbleMenu";

const lowlight = createLowlight(all);

interface EditorProps {
  handler: (payload: {
    title: string;
    content: string;
    category: string;
  }) => Promise<void>;
  initialTitle?: string;
  initialCategory?: string;
  initialContent?: string;
  isEditor?: boolean;
}

const TiptapEditor = ({
  handler,
  initialTitle = "",
  initialCategory = "",
  initialContent = "",
  isEditor = false,
}: EditorProps) => {
  const [title, setTitle] = useState(initialTitle);
  const [category, setCategory] = useState(initialCategory);
  const router = useRouter();
  const { isMounted, isWindowLoaded } = useMount();

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3, 4],
          HTMLAttributes: {
            class: "mt-5 mb-3",
          },
        },
        horizontalRule: {
          HTMLAttributes: {
            class: "my-5",
          },
        },
        code: {
          HTMLAttributes: {
            class: cn(
              "mx-1 px-1",
              "bg-muted dark:bg-muted-foreground rounded",
              "text-orange-700 dark:text-theme italic font-mono",
              "transition-colors duration-300",
            ),
          },
        },
        orderedList: {
          HTMLAttributes: {
            class: cn(
              "my-3 px-1 py-3",
              "text-sm leading-6 bg-muted/30",
              "border border-secondary rounded",
              "list-decimal",
            ),
          },
        },
      }),
      BubbleMenuExtension,
      CodeBlockLowlight.configure({
        lowlight,
      }),
      CodeBlock.configure({
        HTMLAttributes: {
          class: "ql-syntax hljs rounded-md p-4 my-2 text-sm",
        },
      }),
      Highlight.configure({
        multicolor: true,
        HTMLAttributes: {
          class: cn(
            "px-0.5 py-0.5/2 rounded text-white font-medium hover:animate-pulse",
          ),
        },
      }),
      Link,
      Image,
      Markdown.configure({
        transformPastedText: true,
        breaks: true,
      }),
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
    ],
    content: initialContent || "<p>Writing</p>",
    editorProps: {
      attributes: {
        class: cn(
          "blog-post-content prose",
          "dark:prose-invert",
          "max-w-none",
          "min-w-full p-4 min-h-[50vh]",
          "outline-none",
          "transition-all duration-400 ease-in-out",
          "[&>div]:w-full",
        ),
      },
    },
  });

  const handleSubmit = async () => {
    if (!editor || !title) {
      alert("제목과 내용을 입력해주세요");
      return;
    }

    try {
      const content = editor.getHTML();
      await handler({ title, content, category });

      alert("업로드 완료");
    } catch (err) {
      console.error("Submit failed:", err);
    }
  };

  const portalElement = isWindowLoaded
    ? document.getElementById("left-nav-portal")
    : null;

  return (
    <div className="flex flex-col items-center w-full p-0">
      <div className="w-full">
        <input
          className="w-full mb-4 border-none text-2xl font-bold bg-background focus:outline-none"
          placeholder="제목"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="w-full mb-4 border-none text-xl bg-background focus:outline-none"
          placeholder="카테고리"
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <div
          className={`relative flex flex-col items-start gap-2 w-full h-full`}
        >
          <CustomBubbleMenu editor={editor} />
          <MenuBar editor={editor} />
          <EditorContent editor={editor} />
        </div>
      </div>
      {isMounted &&
        portalElement &&
        createPortal(
          <FloatingMenu editor={editor} onSubmit={handleSubmit} />,
          portalElement,
        )}
    </div>
  );
};

export default TiptapEditor;
