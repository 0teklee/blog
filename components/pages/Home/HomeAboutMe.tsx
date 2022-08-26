import { url } from "inspector";
import Link from "next/link";
import { useEffect, useState } from "react";
import styled, { css } from "styled-components";

const HomeAboutMe = () => {
  const [lang, setLang] = useState<string>("en");
  const [mount, setMount] = useState<boolean>(false);

  useEffect(() => {
    setMount(false);
  }, [lang]);

  const handleClick = (val: string): void => {
    setMount(true);
    setTimeout(() => setLang(val), 500);
  };

  return (
    <__AboutWrapper>
      <__AboutTitle>
        About Me {"\n"}
        반갑습니다
      </__AboutTitle>
      <__AboutLangBtn
        onClick={() => handleClick("en")}
        selected={lang === "en"}
      >
        EN
      </__AboutLangBtn>
      <__AboutLangBtn
        onClick={() => handleClick("kr")}
        selected={lang === "kr"}
      >
        KR
      </__AboutLangBtn>
      <__AboutContent isUnmount={mount}>
        {lang === "en" ? (
          <>
            {" "}
            <div>
              PASSIONATE ABOUT WEB TECHNOLOGIES & USER INTERFACE. {"\n"}
              CURRENTLY STARTED MY CARRER AS FRONT-END DEVELOPER. {"\n"}AS A
              FORMER VISUAL ARTIST, I STILL FIND BEAUTY IN CODING AND ITS
              RESULT.
            </div>
            <br />
            <div>
              BESIDES FROM WEB DEVELOPMENT, I TAKE PHOTOS FROM TIME TO TIME.
              {"\n"}
              YOU CAN CHECK MY ARTWORKS FROM{" "}
              <a href="">
                <u>HERE</u>
              </a>
              .
            </div>
            <br />
            <div>
              FOR MORE INFORMATION, {"\n"}
              PLEASE VISIT{" "}
              <u>
                <Link href="/info">INFO PAGE</Link>
              </u>
              .
            </div>
          </>
        ) : (
          <>
            <p>
              웹 개발과 유저 인터페이스에 관심이 많은 프론트 개발자
              이택우입니다. {"\n"}
              현재 프론트엔드 개발자로 커리어를 시작했습니다. {"\n"}
              이전에는 조형예술을 전공하고, 시각예술가로 활동을 해왔습니다.
              {"\n"}
              지금과는 다른 일이지만, 감각적인 인터페이스와 매끄러운 유저
              경험에서 아름다움을 찾을 수 있다는 점에선 비슷하다.
            </p>
            <br />
            <p>
              사진 찍는 것과 여행하는 것을 좋아합니다.
              {"\n"}
              제가 찍은 사진들은{" "}
              <a href="">
                <u>여기에서</u>
              </a>{" "}
              확인이 가능합니다 .
            </p>
            <br />
            <p>
              FOR MORE INFORMATION, {"\n"}
              PLEASE VISIT{" "}
              <u>
                <Link href="/info">INFO PAGE</Link>
              </u>
              .
            </p>
          </>
        )}
      </__AboutContent>
    </__AboutWrapper>
  );
};

export default HomeAboutMe;

const __AboutWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  padding: 3rem 5rem 3.5rem 3rem;
  margin-bottom: 1.5rem;

  @media (min-width: 720px) {
    padding-top: 1rem;
    margin-top: 9rem;
  }
`;

const __AboutTitle = styled.h1`
  margin-top: 2rem;
  transition: 1s;
  font-family: "IBM Plex Sans KR";
  white-space: pre-wrap;

  animation: intro 1s;
  @keyframes intro {
    0% {
      opacity: 0%;
    }
    100% {
      opacity: 100%;
    }
  }
`;

const __AboutLangBtn = styled.button<{ selected: boolean }>`
  all: unset;
  display: inline-block;

  margin-top: 1.2rem;

  font-family: "Tenon", sans-serif;
  font-weight: ${(props) => (props.selected ? 600 : 400)};

  cursor: pointer;

  &:last-of-type {
    margin-left: 3rem;
  }
`;

const __AboutContent = styled.div<{ isUnmount: boolean }>`
  margin-top: 5rem;

  line-height: 1.4;
  white-space: pre-wrap;

  font-family: "proxima-nova", "IBM Plex Sans KR";
  font-weight: 400;
  font-size: 1.3rem;

  transition: 1s;

  u:hover {
    background-clip: text;
    background: #2d10b0;
    color: #fff;
    transition: 0.5s;
    font-family: "proxima-condensed";
    font-weight: 800;
  }

  opacity: 1;
  ${(props) =>
    props.isUnmount
      ? css`
          opacity: 0;
          transition: 0.5s;
        `
      : null}
`;
