import "highlight.js/styles/github-dark-dimmed.css";
import { processHTML } from "@/libs/utils";

async function ParsedHTMLTag({ html }: { html: string }) {
  const cleanHTML = await processHTML(html);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: cleanHTML }}
      className="parsed-content"
    />
  );
}

export default ParsedHTMLTag;
