import "highlight.js/styles/github-dark-dimmed.css";
import { highlightCode, processHTML } from "@/libs/utils";
import { cache } from "react";

const cachedHTML = cache(async (html: string) => {
  const cleanHTML = await processHTML(html);
  return highlightCode(cleanHTML);
});

async function ParsedHTMLTag({ html }: { html: string }) {
  const cleanHTML = await cachedHTML(html);
  return (
    <div
      dangerouslySetInnerHTML={{ __html: cleanHTML }}
      className="parsed-content"
    />
  );
}

export default ParsedHTMLTag;
