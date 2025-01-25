import "highlight.js/styles/github-dark-dimmed.css";
import { processHTML } from "@/libs/utils";
import { cache } from "react";

const cachedHTML = cache(processHTML);

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
