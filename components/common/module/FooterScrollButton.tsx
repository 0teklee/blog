"use client";

import React from "react";

const FooterScrollButton = ({
  children,
  className,
}: {
  children: string;
  className: string;
}) => {
  const handleTop = (): void => {
    if (typeof window === "undefined") return;

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button onClick={handleTop} className={className}>
      {children}
    </button>
  );
};

export default FooterScrollButton;
