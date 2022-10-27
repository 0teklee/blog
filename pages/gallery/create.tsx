import Router from "next/router";
import React, { useState, useRef } from "react";
import styled from "styled-components";
import ImageUpload from "libs/utils/cloudinaryPost";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { toolbarOptions, formats } from "libs/utils/quillFormat";
import { unstable_getServerSession } from "next-auth";
import { authOptions } from "pages/api/auth/[...nextauth]";
import { GetServerSideProps } from "next";
import { sizes, theme } from "styles/theme";
import handlePostGallery from "libs/post/handlePostGallery";
import postTwitter from "pages/api/twitter/postTwitter";
import getGalleryDetailId from "pages/api/getGalleryDetailId";

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

const index = ({ nextId }) => {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const quillRef = useRef(null);

  const router = Router;

  const handleSubmit = async () => {
    if (!title || !content) {
      alert("내용을 입력해주세요");
      return;
    }
    handlePostGallery(`/api/postGallery`, title, content, category);
    if (category === "Convo w copilot" || category === "From Labs") {
      await postTwitter(
        `https://teklog.site/gallery/${nextId + 1}`,
        title,
        "#dalle2"
      );
    } else {
      await postTwitter(`https://teklog.site/gallery/${nextId + 1}`, title);
    }
    router.push("/");
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
        <__ContentWrapper>
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
        </__ContentWrapper>
        <__Submit type="submit" onClick={handleSubmit}>
          Submit
        </__Submit>
      </form>
    </__Wrapper>
  );
};

export default index;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  const latestId = await getGalleryDetailId();

  console.log("latestId", latestId[latestId.length - 1]);
  return {
    props: {
      session,
      nextId: latestId[latestId.length - 1].id,
    },
  };
};

const __Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 17rem;

  @media only screen and (max-width: ${sizes.laptop}) {
    padding: 0 8rem;
  }
`;
const __Header = styled.h1`
  margin: 4rem 0;
  text-align: center;
  font-size: 5rem;
  font-family: "proxima-nova-extra-condensed", "Roboto", sans-serif;
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
  margin-bottom: 1rem;
  border: none;
  font-size: 1.5rem;
  font-weight: 600;
`;

const __ContentWrapper = styled.div`
  width: 100%;
  min-height: 50vh;

  .ql-editor {
    font-size: 1.1rem;
    line-height: 1.8;
    padding: 1rem;
    p {
      font-family: "IBM Plex Sans KR", sans-serif;
      font-weight: 400;
    }

    img {
      width: 100%;
    }

    video {
      width: 100%;
    }
    a:hover {
      color: ${theme.colors.sign};
    }
    pre {
      margin: 1rem;
      padding: 1.5rem;
    }

    @media only screen and (${theme.devices.laptop}) {
      img {
        padding: 0 8rem;
      }
    }
  }
  @media only screen and (max-width: 500px) {
    .ql-editor {
      font-size: 1rem;
      h1 {
        font-size: 1.2rem;
      }
    }
  }
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
