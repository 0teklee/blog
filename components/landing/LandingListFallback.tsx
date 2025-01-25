import React from "react";
import { MAIN_LIST_FALLBACK } from "@/components/landing/values";
import { cn } from "@/libs/utils";
import LandingListCard from "@/components/landing/LandingListCard";

const LandingListFallback = () => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-x-[8%] gap-y-3 items-stretch",
        "w-full",
        "md:grid-cols-3",
        "opacity-95",
      )}
    >
      {MAIN_LIST_FALLBACK.map((item, index) => (
        <LandingListCard
          key={`fallback_items_${index}`}
          index={index}
          post={item}
        />
      ))}
    </div>
  );
};

export default LandingListFallback;
