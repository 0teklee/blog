"use client";

import { useEffect, useState } from "react";

export const useMount = () => {
  const [isMounted, setMounted] = useState(false);
  const isWindowLoaded = typeof window !== "undefined";

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  return { isMounted, isWindowLoaded };
};
