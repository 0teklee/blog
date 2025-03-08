"use client";
import { useEffect } from "react";
import mermaid from "mermaid";

const MermaidParser = ({
  mermaidCode,
}: {
  mermaidCode?: ArrayLike<HTMLElement>;
}) => {
  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      theme: "neutral",
      themeCSS: `        
        .labelBkg,
        .edgeLabel > p
         {
          color: white !important;
          background: none !important;
        }
      `,
    });

    mermaid.run({
      nodes: mermaidCode || document.querySelectorAll(".language-mermaid"),
    });
  }, []);

  return null;
};

export default MermaidParser;
