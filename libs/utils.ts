import { IGuestbookPost } from "@/components/guestbook/types";
import {
  DEFAULT_ERROR_IMAGE,
  DEFAULT_ETC_IMAGE,
  DEFAULT_IMAGE,
  DEFAULT_JS_IMAGE,
  DEFAULT_NEXT_IMAGE,
  DEFAULT_REACT_IMAGE,
  DEFAULT_RECAP_IMAGE,
  DEFAULT_TS_IMAGE,
} from "@/libs/constants";
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import { visit } from "unist-util-visit";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import rehypeHighlight from "rehype-highlight";
import rehypeStringify from "rehype-stringify";

import DOMPurify from "isomorphic-dompurify";
import { all, createLowlight } from "lowlight";

const parseHTMLToString = (html: string): string => {
  const processor = unified().use(rehypeParse, { fragment: true });

  const ast = processor.parse(html);
  let extractedText = "";

  visit(ast, "text", (node: any) => {
    extractedText += node.value;
  });

  return extractedText.trim();
};

export const maskPrivateContent = (
  post: IGuestbookPost,
  userEmail?: string | null,
) => {
  if (
    post.isPrivate &&
    post.email !== userEmail &&
    userEmail !== process.env.ADMIN_EMAIL
  ) {
    post = {
      ...post,
      post: "This is a private post 🔒",
      author: "anonymous",
    };
  }
  post.comments = post.comments.map((comment) => {
    if (
      comment.isPrivate &&
      comment.email !== userEmail &&
      userEmail !== process.env.ADMIN_EMAIL
    ) {
      return {
        ...comment,
        author: "anonymous",
        comment: "This is a private comment 🔒",
      };
    }
    return { ...comment, email: undefined };
  });

  return { ...post, email: undefined };
};

export const htmlReplace = (content: string | null | undefined) => {
  return content === "" || content === null || content === undefined
    ? ""
    : content
        .toString()
        .replace(/&quot;/gi, "")
        .replace(/(<([^>]+)>)/gi, "")
        .replace(/&nbsp;/gi, "")
        .replace(/&gt;/gi, "")
        .replace(/&lt;/gi, "")
        .replace(/&amp;/gi, "")
        .replace(/\n/g, "")
        .trim();
};

const getContentImg = (content: string): string => {
  const contentReg = content.match(/<img [^>]*src="[^"]*"[^>]*>/gm);
  const contentImg =
    contentReg &&
    contentReg
      .map((x: string) => x.replace(/.*src="([^"]*)".*/, "$1"))[0]
      .replace("http", "https")
      .replace("httpss", "https");
  return contentImg ?? DEFAULT_IMAGE;
};

const setCategoryPresetImg = (category: string): string => {
  switch (category) {
    case "React":
      return DEFAULT_REACT_IMAGE;
    case "Next.js":
      return DEFAULT_NEXT_IMAGE;
    case "TypeScript":
      return DEFAULT_TS_IMAGE;
    case "JavaScript":
      return DEFAULT_JS_IMAGE;
    case ".etc":
      return DEFAULT_ETC_IMAGE;
    case "Recap":
      return DEFAULT_RECAP_IMAGE;
    case "Error":
      return DEFAULT_ERROR_IMAGE;
    default:
      return DEFAULT_IMAGE;
  }
};

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const editPreTagCode = () => {
  return (tree: any) => {
    const headingIds = new Set<string>();
    visit(tree, "element", (node) => {
      const isQuillCodeBlock =
        node.tagName === "pre" &&
        node.properties?.className?.includes("ql-syntax") &&
        node.children?.length > 0 &&
        !node.children[0]?.children;

      if (node.tagName.match(/^h[1-3]$/)) {
        // Get text content from the heading
        const text = node.children
          ?.map((child: any) => child.value || "")
          .join("")
          .trim();

        // Create URL-safe ID
        let id = text
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "");

        // Ensure unique ID
        let uniqueId = id;
        let counter = 1;
        while (headingIds.has(uniqueId)) {
          uniqueId = `${id}-${counter}`;
          counter++;
        }
        headingIds.add(uniqueId);

        // Add id to the heading
        node.properties = {
          ...node.properties,
          id: uniqueId,
        };
      }

      if (isQuillCodeBlock) {
        node.properties.className += " pre";
        const codeContent = node.children[0]?.value || "";
        node.children = [
          {
            type: "element",
            tagName: "code",
            properties: {},
            children: [{ type: "text", value: codeContent }],
          },
        ];
      }
    });
  };
};
const lowlight = createLowlight(all);

export const highlightCode = (html: string) => {
  // HTML 문자열을 파싱하여 AST로 변환
  const ast = unified().use(rehypeParse, { fragment: true }).parse(html);

  // AST를 순회하면서 code 노드 찾기
  const visit = (node: any) => {
    if (
      node.type === "element" &&
      node.tagName === "code" &&
      node.properties?.className?.[0]?.startsWith("language-")
    ) {
      const lang = node.properties.className[0].replace("language-", "");
      const code = node.children?.[0]?.value || "";

      try {
        const highlighted = lowlight.highlight(lang, code);
        node.children = highlighted.children;
        node.properties.className = [
          ...(node.properties.className || []),
          "hljs",
        ];
      } catch (e) {
        console.warn("Failed to highlight:", e);
        node.properties.className = [
          ...(node.properties.className || []),
          "hljs",
        ];
      }
    }

    // 자식 노드들도 순회
    if (node.children) {
      node.children.forEach(visit);
    }
  };

  visit(ast);

  // AST를 다시 HTML 문자열로 변환
  const result = unified().use(rehypeStringify).stringify(ast);

  return result;
};

// TODO QuillEditor 내용 -> Tiptap으로 전환
const convertQuillToTiptap = (html: string): string => {
  const ast = unified().use(rehypeParse, { fragment: true }).parse(html);

  visit(ast, "element", (node) => {
    if (
      node.tagName === "p" &&
      node.children?.length === 1 &&
      node.children[0].type === "text" &&
      node.children[0].value === "<br/>"
    ) {
      node.children = [
        {
          type: "element",
          tagName: "br",
          properties: {},
          children: [],
        },
      ];
    }

    if (
      node.properties?.className &&
      (node.properties?.className as string).includes("ql-syntax") &&
      node.tagName === "pre"
    ) {
      const langClass = (node.properties.className as string[]).find(
        (cls: string) => cls.startsWith("language-"),
      );
      const lang = langClass ? langClass.replace("language-", "") : "plaintext";

      //@ts-ignore
      const codeContent = node.children[0]?.value || "";

      try {
        const highlighted = lowlight.highlight(lang, codeContent);

        node.children = [
          {
            type: "element",
            tagName: "code",
            properties: {
              className: [`language-${lang}`, "hljs"],
            },
            children: highlighted.children as any,
          },
        ];

        // Add necessary classes for Tiptap
        node.properties.className = ["pre"];
      } catch (e) {
        console.warn("Failed to highlight code:", e);
        // Fallback: Create basic code element without highlighting
        node.children = [
          {
            type: "element",
            tagName: "code",
            properties: {
              className: ["hljs"],
            },
            children: [{ type: "text", value: codeContent }],
          },
        ];
      }
    }

    if (node.tagName === "img") {
      // Ensure proper image properties for Tiptap
      node.properties = {
        ...node.properties,
        draggable: false,
      };
    }
  });

  // Convert AST back to HTML string
  const result = unified().use(rehypeStringify).stringify(ast);
  return result;
};

async function processHTML(html: string) {
  const file = await unified()
    .use(rehypeParse, { fragment: true })
    .use(editPreTagCode)
    .use(rehypeHighlight, { detect: true })
    .use(rehypeStringify)
    .process(html);

  const processedHTML = file.toString();
  return DOMPurify.sanitize(processedHTML);
}

const generateFallbackText = (length: number): string => {
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUV WXYZabcd efghijklm nopqrstuvwxyz0123456789 ";
  return Array.from({ length }, () =>
    chars.charAt(Math.floor(Math.random() * chars.length)),
  ).join("");
};

export {
  setCategoryPresetImg,
  getContentImg,
  parseHTMLToString,
  cn,
  processHTML,
  generateFallbackText,
  convertQuillToTiptap,
};
