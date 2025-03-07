import { useEffect, useState } from "react";

type TooltipProps = {
  post: {
    title: string;
    summary: string;
  };
  position: { x: number; y: number };
};

export function Tooltip({ post, position }: TooltipProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    return () => setVisible(false);
  }, [post]);

  return (
    <div
      className={`absolute bg-gray-800 text-white p-2 rounded-md text-sm transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      style={{ left: position.x + 10, top: position.y + 10 }}
    >
      <div className="font-bold">{post.title}</div>
      <div className="text-xs opacity-80">{post.summary}</div>
    </div>
  );
}
