"use client";

import { useState } from "react";
import { IBlogGetCategorySideBar } from "types/IBlogItem";
import { useRouter, useSearchParams } from "next/navigation";
import { clsx } from "clsx";
import { initialCategoryState } from "./utils";

const BlogSideBar = ({
  categories,
}: {
  categories: IBlogGetCategorySideBar[];
}) => {
  const router = useRouter();
  const params = useSearchParams();
  const categoryParam = params?.get("category");

  const [mainToggle, setMainToggle] = useState<boolean>(false);
  const [mainCategory, setMainCategory] = useState<boolean>(false);
  const [subCategory, setSubCategory] = useState(
    initialCategoryState(categories),
  );

  const handleMainToggle = () => {
    setMainToggle((prev) => !prev);
    setTimeout(() => setMainCategory((prev) => !prev), 300);
  };

  const handleSubToggle = (name: string) => {
    setSubCategory((prev) => {
      return { ...prev, [name]: !prev[name] };
    });
  };

  return (
    <aside
      className={clsx(
        "flex flex-col items-stretch gap-5",
        "w-full mb-12",
        "flex-shrink-0",
        "bg-white overflow-scroll",
        "lg:w-56 lg:sticky lg:top-20 lg:h-[calc(100vh-4rem)]",
      )}
    >
      <div className="flex justify-between">
        <h4 className="text-lg font-normal font-sans">categories</h4>
        <button
          className={clsx(
            "hover:text-blue-500 transition-all duration-300",
            "transition-all duration-300",
            mainToggle && "transform rotate-180",
          )}
          onClick={handleMainToggle}
        >
          ⇣
        </button>
      </div>
      <div
        className={clsx(
          "flex flex-col items-start justify-center gap-5",
          "bg-white overflow-scroll",
          "break-all",
          "transition-all duration-300",
          mainCategory && "translate-x-0",
          !mainToggle && "-translate-x-[100%] h-0",
        )}
      >
        {categories &&
          categories.length > 0 &&
          categories.map((item) => (
            <div
              key={`${item.name}_wrapper`}
              className="flex items-start justify-between w-full pl-2"
            >
              <div
                onClick={() => router.push(`/blog?category=${item.name}`)}
                className={clsx(
                  "flex-1",
                  "flex flex-col items-start justify-start",
                  "bg-white cursor-pointer transition-colors duration-300",
                  "hover:underline hover:text-blue-500",
                  categoryParam === item.name
                    ? "text-blue-500 font-semibold"
                    : "text-black",
                )}
              >
                {item.name}
                {item?.posts?.map((blog, i) => (
                  <div
                    key={`${item.name}_subwrapper_${i}`}
                    className={clsx(
                      "w-full pl-2",
                      "text-sm",
                      "lg:pl-2 lg:text-md",
                      "overflow-y-hidden",
                      "hover:bg-blue-500 hover:text-white transition-all duration-300",
                      subCategory[item.name] && "opacity-100 h-auto",
                      !subCategory[item.name] &&
                        "opacity-0 translate-y-[100%] h-0",
                      categoryParam === item.name
                        ? "text-blue-500 font-semibold"
                        : "text-black",
                    )}
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push(`/blog/${blog.id}`);
                      }}
                      className={"w-full mt-2 text-left"}
                    >
                      - {blog.title}
                    </button>
                  </div>
                ))}
                {item?.posts && item?.posts.length >= 10 && (
                  <div
                    className={clsx(
                      "flex flex-col items-start justify-start w-full pl-2 text-0.8rem",
                      subCategory[item.name] && "flex",
                      !subCategory[item.name] && "hidden",
                    )}
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push(`/blog?category=${item.name}`);
                      }}
                      className="w-full mt-2 text-left hover:text-blue-500 transition-colors duration-300"
                    >
                      .....more
                    </button>
                  </div>
                )}
              </div>
              <button
                onClick={() => handleSubToggle(item.name)}
                className={clsx(
                  "relative",
                  "text-grey overflow-scroll",
                  "hover:text-blue-500 transition-all duration-300",
                  subCategory[item.name] &&
                    "transform rotate-180 transition-transform duration-1000",
                )}
              >
                <span>▾</span>
              </button>
            </div>
          ))}
      </div>
    </aside>
  );
};

export default BlogSideBar;
