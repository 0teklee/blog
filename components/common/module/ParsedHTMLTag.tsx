import DOMPurify from "isomorphic-dompurify";
import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeStringify from "rehype-stringify";
import { visit } from "unist-util-visit";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark-dimmed.css";

const addCodeTag = () => {
  return (tree: any) => {
    visit(tree, "element", (node) => {
      if (
        node.tagName === "pre" &&
        node.properties?.className?.includes("ql-syntax")
      ) {
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

const processHTML = async (html: string): Promise<string> => {
  const result = await unified()
    .use(rehypeParse, { fragment: true }) // HTML 파싱
    .use(addCodeTag) // ql-syntax에 code 태그 추가
    .use(rehypeHighlight, { detect: true })
    .use(rehypeStringify)
    .process(html);

  return result.toString();
};

const ParsedHTMLTag = async ({ html }: { html: string }) => {
  // `rehype`로 HTML 콘텐츠 처리
  const processedHTML = await processHTML(html);

  // DOMPurify로 XSS 방지
  const cleanHTML = DOMPurify.sanitize(processedHTML);

  return <div dangerouslySetInnerHTML={{ __html: cleanHTML }} />;
};

export default ParsedHTMLTag;
