"use client";

import { useEffect, useRef } from "react";

export default function CommentiSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && ref.current) {
      const commentiSection = document.createElement("commenti-section");
      ref.current.appendChild(commentiSection);
    }
  }, []);

  return <div ref={ref} />;
}
