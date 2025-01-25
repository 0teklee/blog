// @ts-nocheck
"use client";

import React, { forwardRef, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import "react-quill/dist/quill.snow.css";
import { postImageUpload } from "@/libs/fetcher";
import { EDITOR_FORMATS, EDITOR_TOOLBAR_OPTIONS } from "./values";
import dynamic from "next/dynamic";

import type ReactQuill, { ReactQuillProps } from "react-quill";
import { LoaderIcon } from "lucide-react";

// Dynamically import ReactQuill with proper ref forwarding
const ReactQuillBase = dynamic(
  async () => {
    const { default: RQ } = await import("react-quill");
    // eslint-disable-next-line react/display-name
    return forwardRef<ReactQuill, ReactQuillProps>((props, ref) => (
      <RQ ref={ref} {...props} />
    ));
  },
  {
    ssr: false,
    loading: () => <LoaderIcon className={`animate-spin`} />,
  },
);

ReactQuillBase.displayName = "ReactQuillBase";
interface EditorProps {
  handler: (title: string, content: string, category: string) => void;
  initialTitle?: string;
  initialCategory?: string;
  initialContent?: string;
  isEditor?: boolean;
}

const Editor = ({
  handler,
  initialTitle = "",
  initialCategory = "",
  initialContent = "",
  isEditor = false,
}: EditorProps) => {
  const [category, setCategory] = useState(initialCategory || "");
  const [title, setTitle] = useState(initialTitle || "");
  const [content, setContent] = useState(initialContent || "");

  const quillRef = useRef<ReactQuill>(null);
  const inputImageRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) {
      alert("내용을 입력해주세요");
      return;
    }
    try {
      const params = isEditor ? [title, content] : [title, category, content];
      await handler(...params);

      router.push("/");
    } catch (err) {}
  };

  const handleImage = () => {
    if (!quillRef.current || !inputImageRef?.current) {
      return;
    }

    const editor = quillRef.current.getEditor();
    const input = inputImageRef.current;
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file || !editor) return;

      if (/^image\//.test(file.type)) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "teklog");

        try {
          const res = await postImageUpload(formData);
          const url = res.url;
          const range = editor.getSelection();
          if (range) {
            editor.insertEmbed(range.index, "image", url);
          }
        } catch (error) {
          console.error("Image upload failed:", error);
          alert("이미지 업로드에 실패했습니다.");
        }
      } else {
        alert("이미지만 업로드 할 수 있습니다.");
      }
    };
  };

  const modules = React.useMemo(
    () => ({
      toolbar: {
        container: EDITOR_TOOLBAR_OPTIONS,
        handlers: {
          image: handleImage,
        },
      },
    }),
    [],
  );

  return (
    <div className="flex flex-col items-center w-full p-0">
      {!initialTitle && (
        <h1 className="mb-4 text-center text-[5rem] font-[600] font-sans">
          Writing..
        </h1>
      )}
      <form onSubmit={handleSubmit}>
        <input
          className="w-full mb-[1rem] border-none text-[2.4rem] font-bold"
          placeholder="제목"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="w-full mb-[1rem] border-none text-[1.5rem] font-bold"
          placeholder="카테고리"
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <div className="w-full min-h-[50vh]">
          <input ref={inputImageRef} type="file" className="hidden" />
          <ReactQuillBase
            ref={quillRef}
            theme="snow"
            value={content}
            style={{
              minWidth: "40rem",
              minHeight: "30rem",
              blockSize: 400,
              marginBottom: 100,
              fontSize: "32%",
            }}
            formats={EDITOR_FORMATS}
            modules={modules}
            onChange={setContent}
          />
        </div>
        <button
          type="submit"
          className="w-full mx-auto mb-[5rem] py-[3rem] border-[3px] border-solid border-[#2e14c5] rounded-[10px] text-[#2e14c5] text-xl font-bold hover:filter-[invert(1)] hover:bg-gradient-to-r hover:from-[#2e14c5] hover:to-tomato transition duration-1000"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Editor;
