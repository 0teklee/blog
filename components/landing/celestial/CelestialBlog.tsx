"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useState } from "react";
import { BlogPoint } from "./BlogPoint";
import { BlogConnections } from "./BlogConnections";
import { Tooltip } from "./Tooltip";
import { BlogPost } from "@/components/landing/celestial/types";
import { cn } from "@/libs/utils";

type Category = {
  id: number;
  name: string;
};

type Props = {
  posts: BlogPost[];
  categories: Category[];
};

export default function CelestialBlog({ posts, categories }: Props) {
  const [hoveredPost, setHoveredPost] = useState<BlogPost | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });

  // 위치 정보 저장
  const [positions, setPositions] = useState<
    Record<number, [number, number, number]>
  >({});

  const categoryCenters = categories.map((_, index) => {
    const angle = (index / categories.length) * Math.PI * 2;
    return [Math.cos(angle) * 1.5, Math.sin(angle) * 1.5, 0];
  });

  return (
    <div className={cn("relative mx-auto", "aspect-1 bg-transparent")}>
      {hoveredPost && <Tooltip post={hoveredPost} position={tooltipPosition} />}
      <Canvas
        className={cn(
          "aspect-1 bg-transparent",
          "rounded-full border-4 border-primary",
        )}
        style={{
          maxWidth: "32rem",
          maxHeight: "32rem",
        }}
        camera={{ position: [0, 0, 5], fov: 50 }}
        onPointerMove={(e) =>
          setTooltipPosition({ x: e.clientX, y: e.clientY })
        }
      >
        {/* 블로그 포스트 배치 */}
        {posts.map((post, index) => {
          const categoryIndex = categories.findIndex(
            (c) => c.id === post.categoryId,
          );
          const center = categoryCenters[categoryIndex] || [0, 0, 0];

          return (
            <BlogPoint
              key={post.id}
              post={post}
              index={index}
              total={posts.length}
              center={center}
              setHoveredPost={setHoveredPost}
              setPositions={setPositions}
            />
          );
        })}

        {/* 태그 기반 연결선 */}
        <BlogConnections
          posts={posts}
          hoveredPostId={hoveredPost?.id || null}
          positions={positions}
        />

        <OrbitControls enableZoom={true} />
      </Canvas>
    </div>
  );
}
