import styled from "styled-components";
import {
  Dispatch,
  MouseEvent,
  MutableRefObject,
  SetStateAction,
  useState,
} from "react";
import { postGuestbookPostFetcher } from "../../libs/utils/guestbookFetcher";
import Cookie from "js-cookie";
import { queryClient } from "../../pages/guestbook";

import {
  InfiniteData,
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
  useMutation,
} from "react-query";

const GuestbookUserCreatePost = ({
  setIsPost,
  refetch,
  setCursorZero,
}: {
  setIsPost: Dispatch<SetStateAction<boolean>>;
  refetch: (
    options?: RefetchOptions & RefetchQueryFilters
  ) => Promise<QueryObserverResult<InfiniteData<any>, unknown>>;
  cursor: MutableRefObject<number>;
  setCursorZero: () => void;
}) => {
  const [author, setAuthor] = useState("");
  const [post, setPost] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);
  const access_token = Cookie.get("guest_access_token") || "";

  const handleAuthor = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 30) return;
    setAuthor(e.target.value);
  };

  const handlePost = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length > 1000) return;
    setPost(e.target.value);
  };

  const handleIsPrivate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsPrivate(e.target.checked);
  };

  const postGuestbookPost = async (body: {
    author: string;
    post: string;
    isPrivate: boolean;
  }) => {
    try {
      const res = await postGuestbookPostFetcher(access_token, {
        author,
        post,
        isPrivate,
      });

      if (res.status === 403) {
        throw new Error(res.error);
      }
      return res.data;
    } catch (e) {
      alert(e.message);
      Cookie.remove("guest_access_token");
      window.location.reload();
      return e;
    }
  };

  const { mutate } = useMutation(postGuestbookPost, {
    onSuccess: () => {
      queryClient.clear();
    },
    onSettled: () => {
      setCursorZero();
      refetch();
    },
  });

  const handleSubmit = async (e: MouseEvent) => {
    e.preventDefault();
    if (!post) {
      alert("Post is empty");
      return;
    }
    if (!author) {
      alert("Author is empty");
      return;
    }
    mutate(
      { author, post, isPrivate },
      {
        onSuccess: () => {
          setCursorZero();
          refetch();
          setIsPost(false);
        },
        onError: (e) => {
          setIsPost(false);
        },
      }
    );
  };

  return (
    <__Wrapper>
      <__PostHeader>
        <div className="info">
          <span>name : </span>
          <__NameInputBox
            type="text"
            onChange={handleAuthor}
            value={author}
            maxLength={30}
          />
          <__LengthCheck>( {author.length} / 30 )</__LengthCheck>
        </div>
      </__PostHeader>
      <__PostContent>
        <span>post : </span>
        <__PostTextAreaBox
          onChange={handlePost}
          value={post}
          maxLength={1000}
        />
        <__FlexLeftBox>
          <__PrivateBox>
            <__IsPrivateCheckBox type="checkbox" onChange={handleIsPrivate} />
            <span>private 🔒</span>
          </__PrivateBox>
          <__LengthCheck>( {post.length} / 1000)</__LengthCheck>
        </__FlexLeftBox>
      </__PostContent>
      <__ButtonBox>
        <__SubmitButton onClick={() => setIsPost(false)}>Cancel</__SubmitButton>
        <__SubmitButton onClick={handleSubmit}>Submit</__SubmitButton>
      </__ButtonBox>
    </__Wrapper>
  );
};

export default GuestbookUserCreatePost;

const __Wrapper = styled.div`
  display: block;
  width: 100%;
  max-width: 50rem;
  margin: auto;
  padding: 1rem;
  font-family: "IBM Plex Sans KR", sans-serif;
  font-size: 1rem;

  border: 1px solid #eaeaea;
  border-radius: 0.5rem;
`;

const __PostHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 1rem 0 1rem;
  font-weight: bold;
  font-size: 0.8rem;
`;

const __NameInputBox = styled.input`
  margin-left: 1rem;
  padding: 0.5rem 0.5rem 0.5rem 0.3rem;
  border: 1px solid #eaeaea;
  border-radius: 0.3rem;
  &:focus {
    border: 1px solid #aadcf7;
  }
`;

const __PostContent = styled.div`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  font-weight: 300;
  span {
    font-weight: bold;
    font-size: 0.8rem;
  }
`;

const __PostTextAreaBox = styled.textarea`
  position: relative;
  width: 100%;
  height: 10rem;
  margin-top: 1rem;
  padding: 1rem;

  border: 1px solid #eaeaea;
  border-radius: 0.5rem;

  resize: none;

  &:focus {
    border: 1px solid #aadcf7;
  }
`;

const __ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const __SubmitButton = styled.button`
  padding: 0.6rem;
  border: 1px solid #eaeaea;
  border-radius: 0.3rem;
  font-size: 0.8rem;

  &:hover {
    background-color: #eaeaea;
  }
`;

const __FlexLeftBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  span {
    font-size: 0.7rem;
  }
`;

const __LengthCheck = styled.span`
  margin-left: 1rem;
  color: #000;
  font-size: 0.7rem;
`;

const __PrivateBox = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-left: 0.5rem;
  }
`;
const __IsPrivateCheckBox = styled.input``;
