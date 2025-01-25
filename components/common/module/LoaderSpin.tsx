import React from "react";
import { LoaderCircle } from "lucide-react";
import { cn } from "@/libs/utils";

const LoaderSpin = ({
  wrapperClass,
  iconClass,
}: {
  wrapperClass?: string;
  iconClass?: string;
}) => {
  return (
    <div
      className={cn(`flex justify-center items-center w-full`, wrapperClass)}
    >
      <LoaderCircle className={cn(`text-gray-300 animate-spin`, iconClass)} />
    </div>
  );
};

export default LoaderSpin;
