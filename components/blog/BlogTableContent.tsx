"use client";

import { useEffect, useState } from "react";
import { formatTableContentStyle } from "@/components/blog/utils";

const BlogTableContent = ({ content }: { content: string }) => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const headings = !content
    ? []
    : Array.from(content.matchAll(/<h([1-3]).*?>(.*?)<\/h[1-3]>/g)).map(
        (match, index) => ({
          level: parseInt(match[1]),
          text: match[2].replace(/<[^>]*>/g, ""),
          index: index + 1, // title h1 = index 0
        }),
      );

  useEffect(() => {
    const elements = document.querySelectorAll("h1, h2, h3");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(elements).indexOf(
              entry.target as HTMLElement,
            );
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      { rootMargin: "-20% 0px -35% 0px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [content]);

  const scrollToHeading = (index: number) => {
    const elements = document.querySelectorAll("h1, h2, h3");
    const element = elements[index];

    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <aside className="hidden lg:block lg:w-64 shrink-0 sticky top-20 h-[calc(100vh-5rem)] overflow-hidden pb-5">
      <nav className="h-full overflow-y-auto scrollbar-hide">
        <ul className="space-y-2">
          {headings.map((heading) =>
            heading.text ? (
              <li
                key={heading.index}
                className={formatTableContentStyle(heading.level)}
              >
                <button
                  className={`
                  text-left w-full
                  hover:text-blue-500 
                  transition-colors duration-200
                  ${activeIndex === heading.index ? "text-blue-500 font-medium" : ""}
                `}
                  onClick={() => scrollToHeading(heading.index)}
                >
                  {heading.text}
                </button>
              </li>
            ) : null,
          )}
        </ul>
      </nav>
    </aside>
  );
};

export default BlogTableContent;
