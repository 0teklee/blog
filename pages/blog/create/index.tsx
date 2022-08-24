import Router from "next/router";
import { useState } from "react";
import styled from "styled-components";
import handlePostBlog from "../../../libs/post/postBlog";
import dynamic from "next/dynamic";

import "react-quill/dist/quill.snow.css";

const QuillWrapper = dynamic(() => import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading....</p>,
});

const Create = () => {
  const a = 132;
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

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

    handlePostBlog(`/api/postBlog`, title, content);
    router.replace("/");
  };

  const handleForm = (e: React.BaseSyntheticEvent): void => {
    e.preventDefault();
  };

  return (
    <__Wrapper>
      <__Header>Writing..</__Header>
      <form onSubmit={handleForm}>
        <__Title
          placeholder="제목"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
        />
        <QuillWrapper
          theme="snow"
          style={{
            minWidth: "40rem",
            minHeight: "30rem",
            blockSize: 400,
            marginBottom: 100,
            fontSize: "32%",
          }}
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
  margin-bottom: 3rem;
  border: none;
  font-size: 2.4rem;
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
