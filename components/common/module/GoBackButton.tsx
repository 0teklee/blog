"use client";
import React from "react";
import { clsx } from "clsx";
import { useRouter } from "next/navigation";

const GoBackButton = () => {
  const router = useRouter();
  return (
    <button
      className={clsx(
        "mt-12 text-base font-light",
        "unset-button hover:text-white hover:bg-blue-500",
        "transition-colors duration-500",
      )}
      onClick={() => router.back()}
    >
      ← go back to list
    </button>
  );
};

export default GoBackButton;
