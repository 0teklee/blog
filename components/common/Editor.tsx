"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import "react-quill/dist/quill.snow.css";
import { postImageUpload } from "libs/utils/fetcher";
import { EDITOR_FORMATS, EDITOR_TOOLBAR_OPTIONS } from "./values";
import dynamic from "next/dynamic";
import { ReactQuillProps } from "react-quill";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const Editor = ({
  handler,
}: {
  handler: (_title: string, _category: string, _content: string) => void;
}) => {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const quillRef = useRef<React.ComponentType<ReactQuillProps>>(null);
  const inputImageRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  const handleSubmit = async () => {
    if (!title || !content) {
      alert("내용을 입력해주세요");
      return;
    }
    handler(title, category, content);
    router.push("/");
  };

  const handleImage = () => {
    if (
      !quillRef.current ||
      // @ts-ignore
      !quillRef?.current?.getEditor ||
      !inputImageRef?.current
    )
      return;
    // @ts-ignore
    const editor = quillRef.current.getEditor();
    const input = inputImageRef.current;
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    if (!input || !editor) return;

    input.onchange = async () => {
      const file = input.files && input.files[0];
      const formData = new FormData();
      if (!!file && /^image\//.test(file.type)) {
        formData.append("file", file);
        formData.append("upload_preset", "teklog");

        const res = await postImageUpload(formData);
        const url = res.url;
        const selection = editor.getSelection();
        if (selection) {
          // @ts-ignore
          editor.insertEmbed(selection, "image", url);
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

  useEffect(() => {}, []);

  return (
    <div className="flex flex-col items-center w-full p-0 md:p-[8rem] lg:p-[17rem]">
      <h1 className="my-[4rem] text-center text-[5rem] font-[600] font-sans">
        Writing..
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          className="w-full mb-[1rem] border-none text-[2.4rem] font-bold"
          placeholder="제목"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="w-full mb-[1rem] border-none text-[1.5rem] font-bold"
          placeholder="카테고리"
          type="text"
          onChange={(e) => setCategory(e.target.value)}
        />
        <div className="w-full min-h-[50vh]">
          <input ref={inputImageRef} type="file" className={`hidden`} />
          <ReactQuill
            // @ts-ignore
            ref={quillRef}
            theme="snow"
            style={{
              minWidth: "40rem",
              minHeight: "30rem",
              blockSize: 400,
              marginBottom: 100,
              fontSize: "32%",
            }}
            formats={EDITOR_FORMATS}
            modules={modules}
            onChange={(e) => setContent(e)}
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
