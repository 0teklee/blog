"use client";

import React, { MouseEvent, useState } from "react";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postGuestbookPostFetcher } from "libs/utils/fetcher";

const GuestbookUserCreatePost = () => {
  const queryClient = useQueryClient();

  const [author, setAuthor] = useState("");
  const [postGext, setPostGext] = useState("");
  const [isPrivate, setIsPrivate] = useState(false);
  const [isCreatePost, setIsCreatePost] = useState(false);

  const handleAuthor = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 30) return;
    setAuthor(e.target.value);
  };

  const handlePost = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.length > 1000) return;
    setPostGext(e.target.value);
  };

  const handleIsPrivate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsPrivate(e.target.checked);
  };

  const { mutate } = useMutation({
    mutationFn: () =>
      postGuestbookPostFetcher("", { author, post: postGext, isPrivate }),
    onSuccess: () => {
      queryClient.invalidateQueries(["getGuestbookList"]);
    },
    onSettled: () => {
      queryClient.invalidateQueries(["getGuestbookList"]);
    },
  });

  const handleSubmit = async (e: MouseEvent) => {
    e.preventDefault();
    if (!postGext) {
      alert("Post is empty");
      return;
    }
    if (!author) {
      alert("Author is empty");
      return;
    }
    mutate();
  };

  return (
    <>
      {!isCreatePost && (
        <div className="flex justify-center w-full mt-6 text-base">
          <button
            className="py-2 border border-gray-200 rounded text-sm hover:bg-gray-200"
            onClick={() => setIsCreatePost(true)}
          >
            Create Post
          </button>
        </div>
      )}
      {isCreatePost && (
        <div className="block w-full max-w-4xl m-auto p-4 border border-gray-200 rounded-lg font-sans text-base">
          <div className="flex items-center p-4 font-bold text-sm">
            <span>name : </span>
            <input
              type="text"
              onChange={handleAuthor}
              value={author}
              maxLength={30}
              className="ml-4 py-2 px-2 border border-gray-200 rounded focus:border-blue-300"
            />
            <span className="ml-4 text-sm"> ( {author.length} / 30 ) </span>
          </div>
          <div className="w-full p-4 mb-4 font-light">
            <span>post : </span>
            <textarea
              onChange={handlePost}
              value={postGext}
              maxLength={1000}
              className="mt-4 w-full h-40 p-4 border border-gray-200 rounded focus:border-blue-300 resize-none"
            />
            <div className="flex justify-between mt-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  onChange={handleIsPrivate}
                  className=""
                />
                <span className="ml-2">private 🔒</span>
              </div>
              <span className="text-sm">( {postGext.length} / 1000 )</span>
            </div>
          </div>
          <div className="flex justify-between">
            <button
              className="py-2 border border-gray-200 rounded text-sm hover:bg-gray-200"
              onClick={() => {
                setIsCreatePost(false);
              }}
            >
              Cancel
            </button>
            <button
              className="py-2 border border-gray-200 rounded text-sm hover:bg-gray-200"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default GuestbookUserCreatePost;
