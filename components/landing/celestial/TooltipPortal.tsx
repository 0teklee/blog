"use client";

import { createPortal } from "react-dom";
import useClickOutside from "@/libs/hooks/useClickOutside";
import { useRef } from "react";
import { BlogPost, TooltipPosition } from "./types";

type TooltipProps = {
  hoveredPost: BlogPost | null;
  position: TooltipPosition;
  isTooltipOpen: boolean;
  onClose: () => void;
};

export function TooltipPortal({
  hoveredPost,
  position,
  isTooltipOpen,
  onClose,
}: TooltipProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(containerRef, onClose);

  if (!hoveredPost || !isTooltipOpen) return null;

  return createPortal(
    <div
      ref={containerRef}
      className="absolute bg-gray-800 text-white p-4 rounded-lg shadow-lg text-sm transition-all duration-300"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        position: "fixed",
        zIndex: 1000,
        pointerEvents: "auto",
        transform: "translate(-50%, -100%)",
        marginTop: "-10px",
        marginLeft: "0",
        minWidth: "200px",
        maxWidth: "300px",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      }}
    >
      <div className="font-bold mb-1">{hoveredPost.title}</div>
      {hoveredPost.category && (
        <div className="text-xs text-gray-400">{hoveredPost.category.name}</div>
      )}
      {hoveredPost.tags.length > 0 && (
        <div className="flex gap-1 mt-2">
          {hoveredPost.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-gray-700 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>,
    document.body
  );
}
