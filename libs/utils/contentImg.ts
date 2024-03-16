/* 블로그 포스트 이미지 미리보기*/

const getContentImg = (content: string): string => {
  const contentReg = content.match(/<img [^>]*src="[^"]*"[^>]*>/gm);
  const contentImg =
    contentReg &&
    contentReg
      .map((x: string) => x.replace(/.*src="([^"]*)".*/, "$1"))[0]
      .replace("http", "https")
      .replace("httpss", "https");
  return (
    contentImg ??
    "https://res.cloudinary.com/dolziw8fv/image/upload/v1661838248/handinthesky_by7xjb.jpg"
  );
};

/* 카테고리 별 다른 프리셋 이미지 설정*/
const setCategoryPresetImg = (category: string): string | undefined => {
  if (category === ("React" || "react")) {
    return "https://res.cloudinary.com/dolziw8fv/image/upload/v1661838248/handinthesky_by7xjb.jpg";
  }
  if (category === ("Next.js" || "next.js" || "Nextjs" || "nextjs")) {
    return "https://res.cloudinary.com/dolziw8fv/image/upload/v1661669755/zlc6jlp1p6ilr8rhzvi5.png";
  }
  if (category === "TypeScript") {
    return "https://res.cloudinary.com/dolziw8fv/image/upload/v1661840879/typescript_preset_ioudd0.png";
  }
  if (category === "JavaScript") {
    return "https://res.cloudinary.com/dolziw8fv/image/upload/v1662480649/javascript_preset_f07j3f.png";
  }
  if (category === ".etc") {
    return "https://res.cloudinary.com/dolziw8fv/image/upload/v1661838134/component_pji40f.png";
  }
  if (category === "Recap") {
    return "https://res.cloudinary.com/dolziw8fv/image/upload/v1661975868/recap-preset_ssksj1.png";
  }
  if (category === "Error") {
    return "https://res.cloudinary.com/dolziw8fv/image/upload/v1661975868/error-preset_s0chxc.png";
  }

  return "https://res.cloudinary.com/dolziw8fv/image/upload/v1674554187/rkvskmgscq88ku3kzfks.png";
};

export { getContentImg, setCategoryPresetImg };
