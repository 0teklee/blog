"use client";
import { useState } from "react";
import { BlogPost, TooltipPosition } from "./types";

  // 툴팁 상태 관리를 위한 커스텀 훅
  export const useTooltip = () => {
    const [hoveredPost, setHoveredPost] = useState<BlogPost | null>(null);
    const [tooltipPosition, setTooltipPosition] = useState<TooltipPosition>({ x: 0, y: 0 });
    const [isFixedTooltip, setFixedTooltip] = useState(false);
    const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  
    const handleHover = (post: BlogPost | null, position: TooltipPosition) => {
      setHoveredPost(post);
      setTooltipPosition(position);
      if (!isFixedTooltip) {
        setIsTooltipOpen(!!post);
      }
    };
  
    const handleClick = (post: BlogPost | null, position: TooltipPosition) => {
      if (isFixedTooltip && hoveredPost?.id === post?.id) {
        // 현재 고정된 포스트를 다시 클릭하면 툴팁 닫기
        setFixedTooltip(false);
        setIsTooltipOpen(false);
      } else {
        // 다른 포스트 클릭 시 해당 포스트로 툴팁 고정
        setHoveredPost(post);
        setTooltipPosition(position);
        setFixedTooltip(true);
        setIsTooltipOpen(true);
      }
    };
  
    const handleClickOutside = () => {
      if (isFixedTooltip) {
        setFixedTooltip(false);
        setIsTooltipOpen(false);
      }
    };
  
    return {
      hoveredPost,
      tooltipPosition,
      isFixedTooltip,
      isTooltipOpen,
      handleHover,
      handleClick,
      handleClickOutside,
    };
  };
  