import { Category, Position } from "./types";

// 카테고리 중심점 계산 유틸리티 함수
const calculateCategoryCenters = (categories: Category[], radius: number = 2): Position[] => {
    return categories.map((_, index) => {
      const phi = Math.acos(-1 + (2 * index) / categories.length);
      const theta = Math.sqrt(categories.length * Math.PI) * phi;
      
      return [
        Math.cos(theta) * Math.sin(phi) * radius,
        Math.sin(theta) * Math.sin(phi) * radius,
        Math.cos(phi) * radius,
      ];
    });
  };
  
  export {
    calculateCategoryCenters
  }