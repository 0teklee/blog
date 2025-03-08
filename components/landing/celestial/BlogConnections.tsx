import { Line } from "@react-three/drei";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";
import { BlogPost, Position } from "./types";
import { INTRO_POST_ID } from "@/components/landing/celestial/constants";

type Props = {
  posts: BlogPost[];
  hoveredPostId: number | null;
  positions: Record<number, Position>;
};

type Connection = {
  points: [Position, Position];
  type: "category" | "tag";
};

export function BlogConnections({ posts, hoveredPostId, positions }: Props) {
  const { theme } = useTheme();
  const [connections, setConnections] = useState<Connection[]>([]);

  // 연결 계산을 메모이제이션
  const calculatedConnections = useMemo(() => {
    if (!hoveredPostId) return [];

    const hoveredPost = posts.find((p) => p.id === hoveredPostId);
    if (!hoveredPost || !positions[hoveredPostId]) return [];

    // INTRO_POST_ID인 경우 유효한 포지션이 있는 포스트들만 연결
    if (hoveredPostId === INTRO_POST_ID) {
      return posts
        .filter((p) => {
          // 자기 자신 제외 및 유효한 포지션이 있는 포스트만 필터링
          return (
            p.id !== INTRO_POST_ID &&
            positions[p.id] &&
            Array.isArray(positions[p.id]) &&
            positions[p.id].every(
              (coord) => typeof coord === "number" && !isNaN(coord),
            )
          );
        })
        .map((post) => ({
          points: [positions[hoveredPostId], positions[post.id]] as [
            Position,
            Position,
          ],
          type: "category" as const,
        }));
    }

    // 같은 카테고리 연결
    const categoryConnections = posts
      .filter((p) => {
        const isSameCategory =
          p.id !== hoveredPostId &&
          p.categoryId === hoveredPost.categoryId &&
          positions[p.id] &&
          Array.isArray(positions[p.id]) &&
          positions[p.id].every(
            (coord) => typeof coord === "number" && !isNaN(coord),
          );

        return isSameCategory;
      })
      .map((post) => ({
        points: [positions[hoveredPostId], positions[post.id]] as [
          Position,
          Position,
        ],
        type: "category" as const,
      }));

    // 같은 태그 연결
    const tagConnections = posts
      .filter((p) => {
        const hasCommonTags =
          p.id !== hoveredPostId &&
          p.tags.some((tag) => hoveredPost.tags.includes(tag)) &&
          positions[p.id] &&
          Array.isArray(positions[p.id]) &&
          positions[p.id].every(
            (coord) => typeof coord === "number" && !isNaN(coord),
          );

        return hasCommonTags;
      })
      .map((post) => ({
        points: [positions[hoveredPostId], positions[post.id]] as [
          Position,
          Position,
        ],
        type: "tag" as const,
      }));

    return [...categoryConnections, ...tagConnections];
  }, [hoveredPostId, posts, positions]);

  // connections 상태 업데이트를 최적화
  useEffect(() => {
    setConnections(calculatedConnections);
  }, [calculatedConnections]);

  return (
    <group>
      {connections.map((connection, index) => (
        <Line
          key={index}
          points={connection.points}
          color={theme === "dark" ? "#c31ddd" : "#070d40"}
          lineWidth={0.5}
          transparent
          opacity={1}
          toneMapped={true}
        />
      ))}
    </group>
  );
}
