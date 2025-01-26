import React from "react";
import Loading from "@/components/common/Loading";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className={`flex flex-col justify-center items-center w-full`}>
      <Loading style={`text-transparent`} />
      <h1 className={`mb-4 text-xl font-bold`}>Not Found</h1>
      <Link className={`underline hover:text-theme`} href="/">
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
