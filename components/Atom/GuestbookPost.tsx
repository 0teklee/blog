import styled from "styled-components";
import dayjs from "dayjs";
import { ChangeEvent, useState } from "react";
import Cookie from "js-cookie";
import { postGuestbookCommentFetcher } from "../../libs/utils/guestbookFetcher";

interface IProps {
  id: number;
  createdAt: string;
  author: string;
  post: string;
  isPrivate: boolean;
  comments: {
    id: number;
    author: string;
    comment: string;
    createdAt: string;
  }[];
  refetch: () => void;
}

const GuestbookPost = ({
  author,
  comments,
  id,
  createdAt,
  post,
  refetch,
}: IProps) => {
  const access_token = Cookie.get("guest_access_token") || "";
  const [isCommentOn, setIsCommentOn] = useState(false);
  const [commentValue, setCommentValue] = useState("");
  const [commentAuthor, setCommentAuthor] = useState("");
  const [isCommentPrivate, setIsCommentPrivate] = useState(false);

  const handleCommentValue = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length > 300) return;
    setCommentValue(e.target.value);
  };

  const handleIsCommentPrivate = () => {
    setIsCommentPrivate((prev) => !prev);
  };

  const handleCommentAuthor = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 30) return;
    setCommentAuthor(e.target.value);
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (!commentAuthor) {
      alert("Name is empty");
      return;
    }

    if (!commentValue) {
      alert("Comment is empty");
      return;
    }

    if (!access_token) {
      alert("Please login again");
    }

    try {
      const res = await postGuestbookCommentFetcher(access_token, {
        author: commentAuthor,
        comment_id: id,
        comment: commentValue,
        isPrivate: isCommentPrivate,
      });

      const resJson = await res.json();

      if (resJson.status === 403) {
        throw new Error(resJson.error);
      }
      setIsCommentOn(false);
      refetch();
      setCommentValue("");
      return resJson;
    } catch (e) {
      alert(e.message);
      Cookie.remove("guest_access_token");
      window.location.reload();
      return;
    }
  };

  return (
    <__Wrapper className="postBox">
      <__PostHeader>
        <div className="info">
          <span className="id"></span>
          <span>{dayjs(createdAt).format("YY/MM/DD HH:mm")}</span>
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
          {isCommentOn ? "hide comments" : `${comments.length} comments`}
        </__CommentsButton>
      }
      {isCommentOn &&
        comments &&
        comments.length > 0 &&
        comments.map((comment, i) => (
          <__PostComments key={`post${id}_comment${i}`}>
            <__CommentHeader>
              <p>{dayjs(comment.createdAt).format("YY/MM/DD HH:mm")}</p>
              <p className="comment_author">{comment.author}</p>
            </__CommentHeader>
            <p className="comment">{comment.comment}</p>
          </__PostComments>
        ))}
      {access_token && isCommentOn && (
        <__CreatePostBox>
          <__NameBox>
            <span>name : </span>
            <__CommentNameInputBox
              type="text"
              value={commentAuthor}
              onChange={handleCommentAuthor}
            />
            <__LengthCheck> ({commentAuthor.length}/ 30)</__LengthCheck>
          </__NameBox>
          <__CreatePost value={commentValue} onChange={handleCommentValue} />
          <__PostLengthCheck> ({commentValue.length}/ 300)</__PostLengthCheck>
          <__FlexLeftBox>
            <__PrivateBox>
              <__IsPrivateCheckBox
                type="checkbox"
                onChange={handleIsCommentPrivate}
              />
              <span>private 🔒</span>
            </__PrivateBox>
            <__SubmitButton onClick={handleSubmit}>Submit</__SubmitButton>
          </__FlexLeftBox>
        </__CreatePostBox>
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

  // border-bottom: {(props)= > (props.isLast ? "none": "2px dotted #cbcbcb")};
  border-bottom: 2px dotted #cbcbcb;
`;

const __PostHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #eaeaea;
  font-weight: bold;
  font-size: 1rem;
  .info {
    span:first-child {
      font-weight: 200;
      font-size: 0.8rem;
    }

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

const __PostComments = styled.div`
  padding: 1rem;
  border-top: 1px dot-dash #cbcbcb;
  text-align: right;

  p {
    margin-bottom: 0.5rem;
    font-weight: 300;
  }
  .comment {
    margin-top: 2rem;
    text-align: left;

    font-size: 0.9rem;
  }
`;

const __CommentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.5rem;
  margin-bottom: 0.7rem;
  padding-top: 0.8rem;

  border-top: 1px dashed #eaeaea;

  p {
    font-weight: bold;
    font-size: 0.8rem;
  }

  p:first-child {
    font-weight: 200;
  }
`;

const __NameBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 1rem 0;

  font-size: 0.8rem;
`;

const __CommentNameInputBox = styled.input`
  margin-left: 1rem;
  padding: 0.2rem 0.2rem 0.2rem 0.3rem;
  border: 1px solid #eaeaea;
  border-radius: 0.3rem;
  &:focus {
    border: 1px solid #aadcf7;
  }
`;
const __CreatePostBox = styled.div`
  margin-top: 4rem;
  padding-bottom: 4rem;

  border-top: 1px dashed #eaeaea;
  border-bottom: 1px solid #eaeaea;
  border-radius: 0.3rem;
`;

const __CreatePost = styled.textarea`
  width: 100%;
  padding: 1rem;
  resize: none;
  border: 1px solid #eaeaea;
  border-radius: 0.3rem;
  &:focus {
    border: 1px solid #aadcf7;
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

const __PostLengthCheck = styled(__LengthCheck)`
  margin-left: 0;
`;

const __PrivateBox = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-left: 0.5rem;
  }
`;

const __IsPrivateCheckBox = styled.input``;

const __SubmitButton = styled.button`
  padding: 0.6rem;
  border: 1px solid #eaeaea;
  border-radius: 0.3rem;
  font-size: 0.8rem;

  &:hover {
    background-color: #eaeaea;
  }
`;
