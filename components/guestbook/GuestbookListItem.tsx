"use client";

import dayjs from "dayjs";
import { ChangeEvent, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import DOMPurify from "isomorphic-dompurify";
import { clsx } from "clsx";
import { useSession } from "next-auth/react";
import { postGuestbookCommentFetcher } from "@/libs/fetcher";
import { htmlReplace } from "@/libs/utils";

interface IProps {
  id: number;
  createdAt: string | Date;
  author: string;
  post: string;
  isPrivate: boolean;
  comments: {
    id: number;
    author: string;
    comment: string;
    createdAt: string | Date;
  }[];
}

const GuestbookListItem = ({
  author,
  comments,
  id,
  createdAt,
  post,
}: IProps) => {
  const queryClient = useQueryClient();
  const { data } = useSession();

  const [isCommentOn, setIsCommentOn] = useState(false);
  const [commentValue, setCommentValue] = useState("");
  const [commentAuthor, setCommentAuthor] = useState("");
  const [isCommentPrivate, setIsCommentPrivate] = useState(false);

  const sanitizedPost = htmlReplace(post);

  const { mutate } = useMutation({
    mutationFn: (payload: {
      author: string;
      comment_id: number;
      comment: string;
      isPrivate: boolean;
    }) => postGuestbookCommentFetcher(payload),
    onSuccess: async () => {
      await queryClient.invalidateQueries(["getGuestbookList"]);
      setIsCommentOn(true);
      setCommentValue("");
    },
    onError: (e) => {
      alert("error occured");
      console.error(e);
      setCommentValue("");
      setCommentAuthor("");
    },
  });

  const isLogin = data?.user?.email;

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

  const handleSubmit = async () => {
    if (!commentAuthor) {
      alert("Name is empty");
      return;
    }

    if (!commentValue) {
      alert("Comment is empty");
      return;
    }

    if (!isLogin) {
      alert("Please login again");
      return;
    }

    mutate({
      author: commentAuthor,
      comment_id: id,
      comment: commentValue,
      isPrivate: isCommentPrivate,
    });
  };

  return (
    <div className="w-full pb-2 border border-gray-300 rounded-md text-base">
      <div className="flex items-center justify-between p-4 border-b border-gray-200 font-bold">
        <div className="flex items-center">
          <span className="text-sm font-light mr-2"></span>
          <span>{dayjs(createdAt).format("YY/MM/DD HH:mm")}</span>
        </div>
        <p>{author}</p>
      </div>
      <div className="px-6 py-4 min-h-32">{sanitizedPost}</div>
      <div className={`w-full p-4`}>
        <button
          className="float-right text-sm"
          onClick={() => setIsCommentOn((prev) => !prev)}
        >
          {isCommentOn ? "hide comments" : `${comments.length} comments`}
        </button>
      </div>
      {comments &&
        comments.length > 0 &&
        comments.map((comment, i) => (
          <div
            key={`post${id}_comment${i}`}
            className={clsx(
              "w-full px-4",
              "transition-all duration-300",
              isCommentOn ? "h-fit py-4 opacity-100" : "h-0 py-0 opacity-0",
            )}
          >
            <div className="flex flex-col items-start gap-1 w-full py-2 border-t border-dashed border-gray-200">
              <p className="font-bold text-sm">{comment.author}</p>
              <p className="font-light text-xs">
                {dayjs(comment.createdAt).format("YY/MM/DD HH:mm")}
              </p>
            </div>
            <textarea
              className="w-full max-h-40 h-full text-left text-sm font-light border-none resize-none bg-white disabled:bg-white disabled:opacity-100 disabled:text-black"
              disabled={true}
              defaultValue={DOMPurify.sanitize(comment.comment)}
            />
          </div>
        ))}
      {isCommentOn && !!isLogin && (
        <form
          onSubmit={handleSubmit}
          className="p-4 border-t border-dashed border-gray-200"
        >
          <div className="flex items-center justify-start mb-4 text-sm">
            <span>name : </span>
            <input
              type="text"
              className="ml-2 py-1 px-1 border border-gray-200 rounded focus:border-blue-300"
              value={commentAuthor}
              onChange={handleCommentAuthor}
              maxLength={30}
            />
            <span className="ml-2">({commentAuthor.length}/30)</span>
          </div>
          <textarea
            className="w-full py-2 resize-none border border-gray-200 rounded focus:border-blue-300"
            value={commentValue}
            onChange={handleCommentValue}
            maxLength={300}
          />
          <span>({commentValue.length}/300)</span>
          <div className="flex justify-between mt-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="mr-2"
                onChange={handleIsCommentPrivate}
              />
              <span>private 🔒</span>
            </div>
            <button
              type={"submit"}
              className="py-2 px-4 border border-gray-200 rounded transition-colors duration-300 hover:bg-gray-200 text-sm"
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default GuestbookListItem;
