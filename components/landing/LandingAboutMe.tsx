"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styled, { css } from "styled-components";

const LandingAboutMe = () => {
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
            <p>
              PASSIONATE ABOUT WEB TECHNOLOGIES & USER INTERFACE. {"\n"}
              CURRENTLY WORKING AS A FRONT-END DEVELOPER. {"\n"}I AM ABLE TO SEE
              THE BEAUTY IN CODING AND CONTINUE TO CHALLENGE MYSELF TO CREATE
              FINER CODES.{"\n"}
            </p>
            <br />
            <p>
              AS A FORMER VISUAL ARTIST, I STILL TAKE PHOTOS FROM TIME TO TIME
              AS WELL.
              {"\n"}
              YOU CAN CHECK OUT MY PHOTOS ON{" "}
              <Link href="/gallery">
                <u>GALLERY</u>
              </Link>
              .
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
        ) : (
          <>
            <p>
              유저 인터페이스에 관심이 많은 프론트 개발자 이택우입니다. {"\n"}
              개발자가 되기 이전에는 조형예술을 전공하고, 시각예술가로 활동을
              해왔습니다.
              {"\n"}
              현재는 프론트엔드 개발자로 커리어를 시작했습니다. {"\n"}
              감각적인 인터페이스와 매끄러운 유저 경험을 통해 사용자에게
              아름다움을 전달하고자 합니다.
            </p>
            <br />
            <span>
              취미로는 사진 찍는 것과 여행하는 것을 좋아합니다.
              {"\n"}
              제가 찍은 사진들은{" "}
            </span>
            <Link href="/gallery">
              <u>여기에서</u>
            </Link>{" "}
            <span>확인이 가능합니다 .</span>
            <br />
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

export default LandingAboutMe;

const __AboutWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  /* margin-bottom: 1.5rem; */

  @media (min-width: 720px) {
    padding-top: 1rem;
    margin-top: 15rem;
  }
`;

const __AboutTitle = styled.h1`
  margin-top: 2rem;
  transition: 1s;
  font-family: "IBM Plex Sans KR", sans-serif;
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

  font-family: "Tenon", "Roboto", sans-serif;
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

  font-family: "IBM Plex Sans KR", sans-serif;
  font-weight: 400;
  font-size: 1.3rem;

  transition: 1s;

  u:hover {
    background-clip: text;
    background: #2d10b0;
    color: #fff;
    transition: 0.5s;
    font-family: "proxima-condensed", "Roboto", sans-serif;
    font-weight: 800;
  }

  opacity: 1;

  @media only screen and (max-width: 800px) {
    margin-top: 3rem;
  }

  @media only screen and (max-width: 500px) {
    font-size: 1rem;
  }

  ${(props) =>
    props.isUnmount
      ? css`
          opacity: 0;
          transition: 0.5s;
        `
      : null}
`;
