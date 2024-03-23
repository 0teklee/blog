import React, { useRef, useState } from "react";
import styled from "styled-components";
import ImageUpload from "libs/utils/cloudinaryPost";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { formats, toolbarOptions } from "libs/utils/quillFormat";
import { getServerSession } from "next-auth";
import { authOptions } from "pages/api/auth/[...nextauth]";
import { GetServerSideProps } from "next";
import getBlogEditPost from "pages/api/getBlogEditPost";
import handlePutBlog from "libs/post/handlePutBlog";
import { IBlogGetEditItem } from "types/IBlogItem";
import { sizes, theme } from "styles/theme";
import handleDeleteBlogPost from "libs/post/handleDeleteBlogPost";
import { useRouter } from "next/navigation";

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

const index = ({ post }: { post: IBlogGetEditItem }) => {
  const {
    title: propTitle,
    content: propContent,
    categories: propCategory,
    tags: propTags,
    id,
  } = post;
  const [title, setTitle] = useState(propTitle);
  const [content, setContent] = useState(propContent);
  const [category, setCategory] = useState(propCategory.name);
  // const [tags, setTags] = useState<string[]>(propTags.map((item) => item.tag));
  const quillRef = useRef(null);
  const router = useRouter();

  const handleSubmit = () => {
    if (!title || !content) {
      alert("내용을 입력해주세요");
      return;
    }

    if (title.length > 191) {
      alert("제목이 너무 깁니다.");
      return;
    }

    handlePutBlog(`/api/putBlogPost`, title, content, category, id);
    router.push("/");
  };

  const handleForm = (e: React.BaseSyntheticEvent): void => {
    e.preventDefault();
  };

  const handleDelete = () => {
    if (confirm("정말 삭제하시겠습니까?")) {
      handleDeleteBlogPost(`/api/deleteBlogPost/${router.query.id}`);
      router.push("/blog");
    }
    return;
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
      <__Header>Editing..</__Header>
      <form onSubmit={handleForm}>
        <__Title
          placeholder="제목"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <__Category
          placeholder="카테고리"
          type="text"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />
        {/*<__TagInput*/}
        {/*  placeholder="tags"*/}
        {/*  type="text"*/}
        {/*  onKeyDown={(e) => {*/}
        {/*    if (e.key === "Enter") {*/}
        {/*      e.preventDefault();*/}
        {/*      setTags(tags.concat(e.target.value));*/}
        {/*      e.target.value = "";*/}
        {/*    }*/}
        {/*  }}*/}
        {/*/>*/}
        <__TagWrapper>
          {/*{tags.length !== 0 &&*/}
          {/*  tags.map((item, i) => (*/}
          {/*    <div key={`${item}_tag_wrapper_${i}`}>*/}
          {/*      <__TagItem key={`${item}_${i}`}>#{item}</__TagItem>*/}
          {/*      <__TagDelete*/}
          {/*        key={`${item}_${i}_delete`}*/}
          {/*        type="button"*/}
          {/*        onClick={() => {*/}
          {/*          setTags(tags.filter((tag) => tag !== item));*/}
          {/*        }}*/}
          {/*      >*/}
          {/*        x*/}
          {/*      </__TagDelete>*/}
          {/*    </div>*/}
          {/*  ))}*/}
        </__TagWrapper>
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
            value={content}
          />
        </__ContentWrapper>
        <__SubmitDeleteWrapper>
          <__Submit type="submit" onClick={handleSubmit}>
            Submit
          </__Submit>
          <__Delete type="button" onClick={handleDelete}>
            Delete
          </__Delete>
        </__SubmitDeleteWrapper>
      </form>
    </__Wrapper>
  );
};

export default index;

export const getServerSideProps: GetServerSideProps = async ({
  req,
  res,
  params,
}) => {
  const { id } = params;
  const getEditPost = await getBlogEditPost(id);

  const session = await getServerSession(req, res, authOptions);
  if (!session || !getEditPost) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
      post: getEditPost,
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
  margin-bottom: 3rem;
  border: none;
  font-size: 1.5rem;
  font-weight: 600;
`;

const __TagWrapper = styled.div`
  ${theme.displayFlex("center", "start")}
  flex-wrap: wrap;
  margin-bottom: 3rem;
`;

const __TagInput = styled(__Category)`
  font-size: 1.2rem;
`;

const __TagDelete = styled.button`
  display: inline;
  font-size: 1rem;
`;

const __TagItem = styled.p`
  display: inline;
  padding: 1rem;
  font-size: 1rem;
  &:hover {
    background: #8080803e;
    border-radius: 30px;
  }
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

const __SubmitDeleteWrapper = styled.div`
  ${theme.displayFlex("center", "center")}
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

const __Delete = styled(__Submit)`
  margin-left: 1rem;
  border: 3px solid #000;
  border-radius: 10px;
  color: #000;

  &:hover {
    filter: unset;
    background: #c50b0b;
    color: #fff;
    border-color: #fff;
    transition: 0.5s;
  }
`;
