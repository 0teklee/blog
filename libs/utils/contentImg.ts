/* 블로그 포스트 이미지 미리보기*/

const getContentImg = (content): string | undefined => {
  const contentReg = content.match(/<img [^>]*src="[^"]*"[^>]*>/gm);
  const contentImg =
    contentReg &&
    contentReg.map((x) => x.replace(/.*src="([^"]*)".*/, "$1"))[0];
  return contentImg;
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

  if (category === ".etc") {
    return "https://res.cloudinary.com/dolziw8fv/image/upload/v1661838134/component_pji40f.png";
  }
  if (category === "Recap") {
    return "https://res.cloudinary.com/dolziw8fv/image/upload/v1661975868/recap-preset_ssksj1.png";
  }
  if (category === "Error") {
    return "https://res.cloudinary.com/dolziw8fv/image/upload/v1661975868/error-preset_s0chxc.png";
  }
  return;
};

export { getContentImg, setCategoryPresetImg };
