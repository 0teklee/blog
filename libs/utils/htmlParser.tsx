import DOMPurify from "isomorphic-dompurify";
import { ReactNode } from "react";

const htmlParser = (html: string): ReactNode => {
  const clean = DOMPurify.sanitize(html);
  return <div dangerouslySetInnerHTML={{ __html: clean }} />;
};

export default htmlParser;
