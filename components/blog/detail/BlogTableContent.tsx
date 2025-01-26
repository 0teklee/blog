"use client";

import { useEffect, useState } from "react";
import { formatTableContentStyle } from "@/components/blog/utils";
import { motion } from "framer-motion";
import { parseHTMLToString } from "@/libs/utils";

const BlogTableContent = ({ content }: { content: string }) => {
  const [activeHeading, setActiveHeading] = useState<string>("");

  const headings = !content
    ? []
    : Array.from(content.matchAll(/<h([1-3]).*?>(.*?)<\/h[1-3]>/g)).map(
        (match, index) => ({
          level: parseInt(match[1]),
          text: parseHTMLToString(match[2]).trim(),
          index,
        }),
      );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeading(entry.target.textContent || "");
          }
        });
      },
      { rootMargin: "-20% 0px -35% 0px", threshold: 0.5 },
    );

    const elements = document.querySelectorAll("h1, h2, h3");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToHeading = (text: string) => {
    const elements = document.querySelectorAll("h1, h2, h3");
    const element = Array.from(elements).find(
      (el) => el.textContent?.trim() === text,
    );

    if (element) {
      const headerOffset = 80;
      window.scrollTo({
        top:
          element.getBoundingClientRect().top +
          window.pageYOffset -
          headerOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="hidden lg:block lg:w-64 shrink-0 sticky top-40 h-[50vh] overflow-hidden"
    >
      <div className="h-full overflow-y-auto scrollbar-hide blog-table-content pb-5">
        {headings.length > 0 && (
          <h1 className={`mb-2 font-bold`}>Table of Content</h1>
        )}
        <ul className="space-y-2">
          {headings.map((heading) => (
            <li
              key={heading.index}
              className={formatTableContentStyle(heading.level)}
            >
              <button
                className={`
                  text-left w-full
                  hover:text-theme 
                  transition-colors duration-200
                  ${activeHeading === heading.text ? "text-theme font-medium" : ""}
                `}
                onClick={() => scrollToHeading(heading.text)}
              >
                {heading.text}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default BlogTableContent;
