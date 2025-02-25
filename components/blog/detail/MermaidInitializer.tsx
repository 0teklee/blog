"use client";
import { useEffect } from "react";
import mermaid from "mermaid";

const MermaidInitializer = () => {
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
      nodes: document.querySelectorAll(".language-mermaid"),
    });
  }, []);

  return null;
};

export default MermaidInitializer;
