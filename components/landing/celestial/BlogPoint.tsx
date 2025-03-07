import { useEffect } from "react";
import { BlogPost } from "@/components/landing/celestial/types";

type Props = {
  post: BlogPost;
  index: number;
  total: number;
  center: number[];
  setHoveredPost: (selected: BlogPost | null) => void;
  setPositions: (positions: Record<number, [number, number, number]>) => void;
};

export function BlogPoint({
  post,
  index,
  total,
  center,
  setHoveredPost,
  setPositions,
}: Props) {
  const phi = Math.acos(-1 + (2 * index) / total);
  const theta = Math.sqrt(total * Math.PI) * phi;

  const offset = 0.3;
  const x = center[0] + Math.cos(theta) * Math.sin(phi) * offset;
  const y = center[1] + Math.sin(theta) * Math.sin(phi) * offset;
  const z = center[2] + Math.cos(phi) * offset;

  useEffect(() => {
    //@ts-expect-error
    setPositions((prev) => ({ ...prev, [post.id]: [x, y, z] }));
  }, [post.id, x, y, z, setPositions]);

  return (
    <mesh
      position={[x, y, z]}
      onPointerOver={() => setHoveredPost(post)}
      onPointerOut={() => setHoveredPost(null)}
    >
      <sphereGeometry args={[0.03, 12, 16]} />
      <meshBasicMaterial color={"hsl(var(--theme))"} />
    </mesh>
  );
}
