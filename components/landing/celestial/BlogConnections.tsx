import { Line } from "@react-three/drei";
import { useEffect, useState } from "react";
import { BlogPost } from "@/components/landing/celestial/types";

type Props = {
  posts: BlogPost[];
  hoveredPostId: number | null;
  positions: Record<number, [number, number, number]>; // 각 BlogPoint의 위치를 저장
};

export function BlogConnections({ posts, hoveredPostId, positions }: Props) {
  const [lines, setLines] = useState<[number, number, number][][]>([]);

  useEffect(() => {
    if (!hoveredPostId) {
      setLines([]);
      return;
    }

    const hoveredPost = posts.find((p) => p.id === hoveredPostId);
    if (!hoveredPost || !positions[hoveredPostId]) return;

    const relatedPosts = posts.filter(
      (p) =>
        p.id !== hoveredPostId &&
        p.tags.some((tag) => hoveredPost.tags.includes(tag)) &&
        positions[p.id],
    );

    const newLines = relatedPosts.map((post) => [
      positions[hoveredPostId], // hover된 글의 위치
      positions[post.id], // 연결할 글의 위치
    ]);

    setLines(newLines);
  }, [hoveredPostId, posts, positions]);

  return (
    <>
      {lines.map((line, index) => (
        <Line key={index} points={line} color="cyan" lineWidth={1} />
      ))}
    </>
  );
}
