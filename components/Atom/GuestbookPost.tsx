import styled from "styled-components";
import dayjs from "dayjs";
import { useState } from "react";

interface IProps {
  id: number;
  createdAt: string;
  author: string;
  post: string;
  isPrivate: boolean;
  comments: any[];
}
const GuestbookPost = (guestbookPost: IProps) => {
  const { author, isPrivate, comments, id, createdAt, post } = guestbookPost;
  const [isCommentOn, setIsCommentOn] = useState(false);
  return (
    <__Wrapper>
      <__PostHeader>
        <div className="info">
          <span className="id">no.{id}</span>
          <span>{dayjs(createdAt).format("YYYY/MM/DD HH:mm")}</span>
        </div>
        <p>{author}</p>
      </__PostHeader>
      <__PostContent>{post}</__PostContent>
      {
        <__CommentsButton
          onClick={() => {
            setIsCommentOn((prev) => !prev);
          }}
        >
          {isCommentOn ? `comments` : "hide comments"}
        </__CommentsButton>
      }
      {isCommentOn && comments && comments.length > 0 && (
        <__PostComments></__PostComments>
      )}
    </__Wrapper>
  );
};

export default GuestbookPost;

const __Wrapper = styled.div`
  width: 100%;
  padding: 1rem;
  font-family: "IBM Plex Sans KR", sans-serif;
  font-size: 1rem;

  border-bottom: 2px dotted #eaeaea;
`;

const __PostHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #cbcbcb;
  font-weight: bold;
  font-size: 0.8rem;
  .info {
    .id {
      margin-right: 0.5rem;
    }
  }
`;

const __PostContent = styled.div`
  width: 100%;
  padding: 2rem;
  font-weight: 300;
`;

const __CommentsButton = styled.button`
  float: right;
  font-size: 0.8rem;
`;

const __PostComments = styled.div``;
