import { useEffect, useMemo } from "react";
import { BlogPost, Position } from "./types";
import { useTheme } from "next-themes";
import { Lensflare, LensflareElement } from "three/examples/jsm/objects/Lensflare";
import * as THREE from "three";
import { useThree } from "@react-three/fiber";

type Props = {
  post: BlogPost;
  index: number;
  total: number;
  center: number[];
  handleHover: (
    post: BlogPost | null,
    position: { x: number; y: number },
  ) => void;
  handleClick: (
    post: BlogPost | null,
    position: { x: number; y: number },
  ) => void;
  setPositions: (positions: Record<number, Position>) => void;
};

// 렌즈 플레어 텍스처를 위한 데이터 URL
const FLARE_TEXTURE = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAQESURBVHic7ZtNiFVVGMd/z7kzY2qJWViRRBYt+liUi2gTFULQxkUfVLRoE0UQQdGqVdDXok0QRRARQS0KoqKgqE1QENUiEQnCQIXCQIXJj5nx6+85b3PP3Ln3njP33plx7jw/eHnvOc95z/M/z3nPx3vOhUwmk8lkMplMJpPJZDLjhTQNQFoMzAEHgVOBE4A/gD+BfcDXwF7gZ2C/mR1pdXOzgaXAYuA04CTgKLAP+An4DvgG+AH408wONfUzGZImJO2U9LmkQ5IGGtIvSdot6UFJF0k6rsXPzZd0q6RXJP0u6VhD+iFJeyQ9LmmFpMlWfk4ISQuAJ4GbgF4KvAF8BHwK7AZ+Bg4Dk8BMYB5wFrAMuAi4FJhT0f4B4E3gOeBdMxtsEMtE4DLgLuBqYEqF+j3gPeBZ4G0zO1zXz4QkTZf0hKT9Nb3/u6QXJV0jaXKNNqYqtPWSpN9qevlA0jpJM+v4mZCkGZLWS/qtRgD7JT0l6fQx8HOGpKcVxo06/CbpYUmzx8LPf0jSYkkvSDpcEcRhSS9LWjZGPpZLekXSkYp+fpX0qKR5Y+WnhKRJktZK+qYiiP2SnpE0d4x8zJP0rKQDFf18K+k+SVPHyk8FSRdL2lkRxKeSlkjqGwMPfZKWSNpV4WOXpCvGwkdtJE2T9JCkgxXBbJJ0+ij7OF3S5opYDkp6WNL00fQxLBRGy/XAE8DsinJ7gHVmtmWUfGwBHgDmlxQZBB4zs/Wj4WPYSJojaWNFL/xP0oOSpo2C/WmSHlEYPsvYKGnuSNsfEZLOlrS9IqgdkhaNsO1FknZW2N8u6ZyRtD1iJF0maU9FYO9IOn+E7J4vaWuF3T2SrhwJm6OGpBWSfq0IbpOk2SPQ/mxJr1bY/E3SmvFwcjwkrZV0tCK49yXNa7PdeZLeq7B3VNJ9x+PkeEnSvZIGKoLcLmlhG20ulLSjwtaApHvGzUkDJN0h6Z+KQLdJOqfF9s6W9EmFnX8k3T6uThoiaYWkfRUBvy1pQQvtLJC0rcLGPkmrxttJQyRdL+mviqC3SjqzQRtnSvqwwsZfktb2wklDJF0r6UBF4O9KOq1m/VMlvVNR/4Cka3rlpCGSrpL0Z8ULeEvS3Jp159SoK0l/SFrdSycNkXS5pL0VL2KzpJNr1J0u6fWKun9IWtVrJw2RtFTS9xUv401Jsxq0P0vSlor630ta2g9OGiJpsaTPKl7IK5JOaVB3iqSXK+p+LumCfnHSEElnSXq/4qVskDSjQb0ZkjZW1H1f0tn95KQhks6TtL3i5WyWNKtBvVkKQ2kZ2yWd309OGiJpkaRPK17QNkkXNah3kaRPK+p9ImlxPzlpiKTTJL1W8ZK+knRZg3qXS/qyos5rkk7tJyeZTCaTyWQymUwmk8n0Nf8CwuqKQxmsgL4AAAAASUVORK5CYII=";

export function BlogPoint({
  post,
  index,
  total,
  center,
  handleHover,
  handleClick,
  setPositions,
}: Props) {
  const { theme } = useTheme();
  const { scene } = useThree();
  const isCategory = "isCategory" in post && post.isCategory;
  const isCenter = ("isCenter" in post && post.isCenter) as boolean;

  // 카테고리와 포스트의 위치 계산 로직 분리
  const calculatePosition = () => {
    // 중앙 글 처리 (id가 5인 포스트)
    if ("isCenter" in post && post.isCenter) {
      return {
        x: 0,
        y: 0,
        z: 0,
        size: 0.08, // 중앙 글은 가장 크게
      };
    }

    if (isCategory) {
      // 카테고리는 3D 공간에 분산 배치
      const phi = Math.acos(-1 + (2 * post.categoryId) / 10);
      const theta = Math.sqrt(10 * Math.PI) * phi;
      const categoryRadius = 1.2; // 반경을 늘려 카테고리 간 거리 증가

      // 3D 공간을 더 잘 활용하기 위해 z축 변화 증가
      return {
        x: Math.cos(theta) * Math.sin(phi) * categoryRadius,
        y: Math.sin(theta) * Math.sin(phi) * categoryRadius,
        z: Math.cos(phi) * categoryRadius,
        size: 0.05,
      };
    } else {
      // 포스트 배치 로직
      const categoryCenter = (() => {
        const phi = Math.acos(-1 + (2 * post.categoryId) / 10);
        const theta = Math.sqrt(10 * Math.PI) * phi;
        const r = 1.2; // 카테고리 반경과 동일하게 설정
        return {
          x: Math.cos(theta) * Math.sin(phi) * r,
          y: Math.sin(theta) * Math.sin(phi) * r,
          z: Math.cos(phi) * r,
        };
      })();

      // 3D 공간에서 자연스러운 분포를 위한 계산
      const t = index * Math.PI * 0.5;
      // 같은 카테고리 내의 포스트들의 분산 반경
      const radius = 0.3 + Math.sin(t * 0.5) * 0.9;

      // Spherical coordinates with time-based variation
      const phi = Math.acos(-1 + (2 * index) / total) + Math.sin(t) * 0.3;
      const theta = Math.sqrt(total * Math.PI) * phi + t;

      // Add some randomness for more natural distribution
      const randomOffset = {
        x: Math.sin(index * 7919) * 0.05,
        y: Math.sin(index * 7907) * 0.05,
        z: Math.sin(index * 7901) * 0.05,
      };

      // 카테고리 중심을 기준으로 더 조밀하게 배치
      return {
        x:
          categoryCenter.x +
          Math.cos(theta) * Math.sin(phi) * radius +
          randomOffset.x,
        y:
          categoryCenter.y +
          Math.sin(theta) * Math.sin(phi) * radius +
          randomOffset.y,
        z: categoryCenter.z + Math.cos(phi) * radius + randomOffset.z,
        size: 0.025,
      };
    }
  };

  const position = calculatePosition();
  const eventOffset = 100;

  useEffect(() => {
    setPositions({ [post.id]: [position.x, position.y, position.z] });
  }, [post.id, position.x, position.y, position.z, setPositions]);

  // 텍스처 메모이제이션
  const flareTexture = useMemo(() => {
    const textureLoader = new THREE.TextureLoader();
    return textureLoader.load(FLARE_TEXTURE);
  }, []);

  useEffect(() => {
    if (isCenter || isCategory) {
      const light = new THREE.PointLight(
        isCenter 
          ? theme === "dark" ? 0xffd700 : 0x4068b3
          : theme === "dark" ? 0xe8ddba : 0x4068b3,
        isCenter ? 1 : 0.5,
        2
      );
      light.position.set(position.x, position.y, position.z);

      const lensflare = new Lensflare();
      
      // 메인 플레어
      lensflare.addElement(new LensflareElement(
        flareTexture,
        isCenter ? 700 : 500,
        0,
        new THREE.Color(isCenter 
          ? theme === "dark" ? 0xffd700 : 0x4068b3
          : theme === "dark" ? 0xe8ddba : 0x4068b3)
      ));
      
      // 보조 플레어
      lensflare.addElement(new LensflareElement(
        flareTexture,
        isCenter ? 300 : 200,
        0.2,
        new THREE.Color(theme === "dark" ? 0xffffff : 0x4068b3)
      ));
      
      light.add(lensflare);
      scene.add(light);

      return () => {
        scene.remove(light);
      };
    }
  }, [isCenter, isCategory, position, theme, scene, flareTexture]);

  return (
    <group>
      {!isCenter && (
        <group
          position={[position.x, position.y, position.z]}
          onPointerOver={(event) => {
            handleHover(post, {
              x: event.clientX + eventOffset,
              y: event.clientY - eventOffset,
            });
          }}
          onPointerOut={(event) => {
            handleHover(null, { x: 0, y: 0 });
          }}
          onPointerMove={(event) => {
            handleHover(post, {
              x: event.clientX + eventOffset,
              y: event.clientY - eventOffset,
            });
          }}
          onClick={(event) => {
            handleClick(post, {
              x: event.clientX + eventOffset,
              y: event.clientY - eventOffset,
            });
          }}
        >
          {/* 중앙 구체 */}
          <mesh>
            <sphereGeometry args={[position.size * 0.8, 16, 16]} />
            <meshStandardMaterial
              color={
                isCategory
                  ? theme === "dark"
                    ? "#e8ddba"
                    : "#4068b3"
                  : theme === "dark"
                    ? "#ffffff"
                    : "#282d37"
              }
              emissive={
                isCategory
                  ? theme === "dark"
                    ? "#e8ddba"
                    : "#4068b3"
                  : theme === "dark"
                    ? "#e8ddba"
                    : "#4068b3"
              }
              emissiveIntensity={isCategory ? 2 : 1}
              toneMapped={false}
              roughness={0.2}
              metalness={0.8}
            />
          </mesh>
          
          {/* 별의 가지들 - 3개의 직교 평면 */}
          {[0, 1, 2].map((i) => (
            <group key={i} rotation={[
              i === 0 ? Math.PI / 2 : 0,
              i === 1 ? Math.PI / 2 : 0,
              i === 2 ? Math.PI / 2 : 0
            ]}>
              <mesh>
                <planeGeometry args={[position.size * 4, position.size * 0.4]} />
                <meshStandardMaterial
                  color={
                    isCategory
                      ? theme === "dark"
                        ? "#e8ddba"
                        : "#4068b3"
                      : theme === "dark"
                        ? "#ffffff"
                        : "#282d37"
                  }
                  emissive={
                    isCategory
                      ? theme === "dark"
                        ? "#e8ddba"
                        : "#4068b3"
                      : theme === "dark"
                        ? "#e8ddba"
                        : "#4068b3"
                  }
                  emissiveIntensity={isCategory ? 1.5 : 0.8}
                  toneMapped={false}
                  roughness={0.2}
                  metalness={0.8}
                  transparent={true}
                  opacity={0.8}
                  side={THREE.DoubleSide}
                />
              </mesh>
              <mesh rotation={[0, 0, Math.PI / 2]}>
                <planeGeometry args={[position.size * 4, position.size * 0.4]} />
                <meshStandardMaterial
                  color={
                    isCategory
                      ? theme === "dark"
                        ? "#e8ddba"
                        : "#4068b3"
                      : theme === "dark"
                        ? "#ffffff"
                        : "#282d37"
                  }
                  emissive={
                    isCategory
                      ? theme === "dark"
                        ? "#e8ddba"
                        : "#4068b3"
                      : theme === "dark"
                        ? "#e8ddba"
                        : "#4068b3"
                  }
                  emissiveIntensity={isCategory ? 1.5 : 0.8}
                  toneMapped={false}
                  roughness={0.2}
                  metalness={0.8}
                  transparent={true}
                  opacity={0.8}
                  side={THREE.DoubleSide}
                />
              </mesh>
            </group>
          ))}
        </group>
      )}
      {isCenter && (
        <mesh
          position={[position.x, position.y, position.z]}
          onPointerOver={(event) => {
            handleHover(post, {
              x: event.clientX + eventOffset,
              y: event.clientY - eventOffset,
            });
          }}
          onPointerOut={(event) => {
            handleHover(null, { x: 0, y: 0 });
          }}
          onPointerMove={(event) => {
            handleHover(post, {
              x: event.clientX + eventOffset,
              y: event.clientY - eventOffset,
            });
          }}
          onClick={(event) => {
            handleClick(post, {
              x: event.clientX + eventOffset,
              y: event.clientY - eventOffset,
            });
          }}
        >
          <sphereGeometry args={[position.size, 16, 16]} />
          <meshStandardMaterial
            color={theme === "dark" ? "#ffd700" : "#4068b3"}
            emissive={theme === "dark" ? "#ffd700" : "#4068b3"}
            emissiveIntensity={3}
            toneMapped={false}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      )}
    </group>
  );
}
