"use client";

import React, { ReactNode } from "react";
import { RecoilRoot } from "recoil";

const RecoilProvider = ({ children }: { children: ReactNode }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default RecoilProvider;
