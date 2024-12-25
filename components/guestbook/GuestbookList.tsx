"use client";

import React, { useEffect } from "react";
import { clsx } from "clsx";
import GuestbookListItem from "./GuestbookListItem";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";
import Loading from "components/common/Loading";
import { getGuestbookListFetcher } from "@/libs/fetcher";
import { useSession } from "next-auth/react";

const GuestbookList = () => {
  const { ref, inView } = useInView();
  const session = useSession();

  const {
    data,
    fetchNextPage,
    isFetchingNextPage,
    isLoading,
    error: isError,
  } = useInfiniteQuery({
    queryKey: ["guestbookList", session?.data?.user?.email],
    queryFn: ({ pageParam = 0 }) =>
      getGuestbookListFetcher(pageParam, session?.data?.user?.email),
    cacheTime: 0,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage?.length < 5) {
        return undefined;
      }
      const nextCursor = allPages.flat().length;
      return nextCursor;
    },
  });

  useEffect(() => {
    if (isLoading || isFetchingNextPage || isError) {
      return;
    }
    fetchNextPage();
  }, [inView]);

  return (
    <section className={clsx("md:p-4 lg:max-w-xl")}>
      <div
        className={clsx(
          "flex flex-col gap-6 items-center w-full mt-8",
          "[&>div:last-of-type]:border-none",
        )}
      >
        {data?.pages.map((post) => {
          return post.map((item) => (
            <GuestbookListItem key={item.id} {...item} />
          ));
        })}
      </div>
      {isLoading && <Loading />}
      <div ref={ref} />
    </section>
  );
};

export default GuestbookList;
