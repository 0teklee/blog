"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sparkles } from "@react-three/drei";
import { useCallback, useRef, useState } from "react";
import { BlogPoint } from "./BlogPoint";
import { BlogConnections } from "./BlogConnections";
import { CelestialBlogProps, Position } from "./types";
import { cn } from "@/libs/utils";
import { TooltipPortal } from "./TooltipPortal";
import { useTooltip } from "./useTooltip";
import { calculateCategoryCenters } from "./utils";
import { Bloom, EffectComposer, GodRays } from "@react-three/postprocessing";
import { BlendFunction, KernelSize } from "postprocessing";
import {
  BLUR_COLOR_DARK,
  BLUR_COLOR_LIGHT,
  COLOR_DARK,
  COLOR_LIGHT,
} from "./constants";
import { useTheme } from "next-themes";

export default function CelestialBlog({
  posts,
  categories,
}: CelestialBlogProps) {
  const [positions, setPositions] = useState<Record<number, Position>>({});
  const {
    hoveredPost,
    tooltipPosition,
    isTooltipOpen,
    handleHover,
    handleClick,
    handleClose,
  } = useTooltip();
  const sunRef = useRef(null);

  const { theme } = useTheme();
  const isDark = theme === "dark";

  const categoryCenters = calculateCategoryCenters(categories);

  // positions 업데이트를 최적화
  const updatePositions = useCallback(
    (newPositions: Record<number, Position>) => {
      setPositions((prev) => {
        const updated = { ...prev, ...newPositions };
        // 실제로 변경된 값이 있는지 확인
        const hasChanges = Object.entries(newPositions).some(([key, value]) => {
          const prevValue = prev[Number(key)];
          return JSON.stringify(prevValue) !== JSON.stringify(value);
        });
        return hasChanges ? updated : prev;
      });
    },
    [],
  );

  return (
    <div
      className={cn(
        "relative mx-auto",
        "max-w-screen max-h-screen sm:max-w-[70dvw] sm:max-h-[70dvh]",
        "aspect-1 bg-transparent",
      )}
    >
      <TooltipPortal
        hoveredPost={hoveredPost}
        position={tooltipPosition}
        isTooltipOpen={isTooltipOpen}
        onClose={handleClose}
      />
      <Canvas
        className={cn(
          "my-5 lg:my-10",
          "aspect-1 bg-transparent",
          "rounded-full border-4 border-primary",
          hoveredPost ? "cursor-pointer" : "cursor-move",
        )}
        camera={{ position: [0, 0, 5], fov: 50 }}
      >
        <mesh ref={sunRef} position={[0, 0, 0]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshBasicMaterial
            color={isDark ? BLUR_COLOR_LIGHT : BLUR_COLOR_DARK}
          />
        </mesh>

        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <Sparkles
          color={isDark ? COLOR_LIGHT : COLOR_DARK}
          count={30}
          scale={7}
          size={2}
          speed={0.4}
          opacity={0.5}
        />

        {posts.map((post, index) => {
          const categoryIndex = categories.findIndex(
            (c) => c.id === post.categoryId,
          );
          const center = categoryCenters[categoryIndex] || [0, 0, 0];

          return (
            <BlogPoint
              key={post.id}
              isDark={isDark}
              post={post}
              index={index}
              total={posts.length}
              center={center}
              handleHover={handleHover}
              handleClick={handleClick}
              setPositions={updatePositions}
            />
          );
        })}

        <BlogConnections
          posts={posts}
          hoveredPostId={hoveredPost?.id || null}
          positions={positions}
        />

        <OrbitControls enableZoom={true} />

        <EffectComposer multisampling={8}>
          <Bloom
            intensity={1.5}
            luminanceThreshold={0.2}
            luminanceSmoothing={0.9}
            kernelSize={KernelSize.LARGE}
            mipmapBlur={false}
            blendFunction={isDark ? BlendFunction.ADD : BlendFunction.SKIP}
          />
          <GodRays
            sun={sunRef}
            samples={60}
            density={0.9}
            decay={0.9}
            weight={0.4}
            exposure={isDark ? 0.6 : 1}
            clampMax={1}
            kernelSize={KernelSize.LARGE}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}
