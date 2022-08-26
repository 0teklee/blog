import Router from "next/router";
import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import handlePostBlog from "libs/post/postBlog";
import ImageUpload from "libs/utils/cloudinaryPost";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { toolbarOptions, formats } from "libs/utils/quillFormat";

const QuillWrapper = dynamic(
  async () => {
    const { default: RQ } = await import("react-quill");
    // @ts-ignore
    return ({ forwardedRef, ...props }) => {
      return <RQ ref={forwardedRef} {...props} />;
    };
  },
  { ssr: false }
);

const Create = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const quillRef = useRef(null);

  const router = Router;

  const handleSubmit = () => {
    if (!title || !content) {
      alert("내용을 입력해주세요");
      return;
    }

    if (title.length > 191 || content.length > 16000) {
      alert("내용이 너무 깁니다.");
      return;
    }

    handlePostBlog(`/api/postBlog`, title, content, category);
    router.replace("/");
  };

  const handleForm = (e: React.BaseSyntheticEvent): void => {
    e.preventDefault();
  };

  // Custom Image Upload Handler
  const handleImage = () => {
    const editor = quillRef.current.getEditor();
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      const formData = new FormData();
      if (/^image\//.test(file.type)) {
        formData.append("file", file);
        formData.append("upload_preset", "teklog");

        // ImageUpload = cloudinary API Post 함수
        const res = await ImageUpload(formData);
        const url = res.url;
        editor.insertEmbed(editor?.getSelection(), "image", url);
      } else {
        alert("이미지만 업로드 할 수 있습니다.");
      }
    };
  };

  const modules = React.useMemo(
    () => ({
      toolbar: {
        container: toolbarOptions,
        handlers: {
          image: handleImage,
        },
      },
    }),
    []
  );

  return (
    <__Wrapper>
      <__Header>Writing..</__Header>
      <form onSubmit={handleForm}>
        <__Title
          placeholder="제목"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
        />
        <__Category
          placeholder="카테고리"
          type="text"
          onChange={(e) => setCategory(e.target.value)}
        />

        <QuillWrapper
          //@ts-ignore
          forwardedRef={quillRef}
          theme="snow"
          style={{
            minWidth: "40rem",
            minHeight: "30rem",
            blockSize: 400,
            marginBottom: 100,
            fontSize: "32%",
          }}
          formats={formats}
          modules={modules}
          onChange={(e) => setContent(e)}
        />
        <__Submit type="submit" onClick={handleSubmit}>
          Submit
        </__Submit>
      </form>
    </__Wrapper>
  );
};

export default Create;

const __Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 2rem;
`;
const __Header = styled.h1`
  margin: 4rem 0;
  text-align: center;
  font-size: 5rem;
  font-family: "proxima-nova-condensed-bold";
`;
const __Title = styled.input`
  width: 100%;
  margin-bottom: 1rem;
  border: none;
  font-size: 2.4rem;
  font-weight: 600;
`;

const __Category = styled.input`
  width: 100%;
  margin-bottom: 3rem;
  border: none;
  font-size: 1.5rem;
  font-weight: 600;
`;
const __Submit = styled.button`
  width: 100%;
  margin: 0 auto;
  margin-bottom: 5rem;
  padding: 3rem 0;

  border: 3px solid #2e14c5;
  border-radius: 10px;

  color: #2e14c5;
  font-size: x-large;
  font-weight: bolder;

  &:hover {
    filter: invert(1);
    background: linear-gradient(45deg, #2e14c5, tomato);
    transition: 1s;
  }
`;
