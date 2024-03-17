import Layout from "components/Atom/Layout";
import Title from "components/Atom/Title";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { theme } from "styles/theme";

const InfoTemplate = () => {
  const subTitleStyle = {
    fontSize: "1.5rem",
    fontWeight: "400",
    marginBottom: "2rem",
    fontFamily: "proxima-nova",
  };
  return (
    <Layout padding="8rem 3rem 4rem 3rem" mobilePadding="5rem 1rem 3rem 1rem">
      <__Wrapper>
        <__Section>
          <__MainLogo>
            <Image
              src="https://res.cloudinary.com/dolziw8fv/image/upload/v1663058798/logo_ktizgo.jpg"
              width={300}
              height={300}
              alt="Teklog-Info"
            />
          </__MainLogo>

          <__SunbTitle title="Contact" customStyle={subTitleStyle} />
          <__ItemWrapper>
            <__Field>Email</__Field>
            <__Val>leetekwoo@gmail.com</__Val>
          </__ItemWrapper>
          <__GithubWrapper>
            <__Field>Github</__Field>
            <__Githublogo />
            <Link href="https://www.github.com/0teklee">
              <__LinkVal>@0teklee</__LinkVal>
            </Link>
          </__GithubWrapper>
          <__ItemWrapper>
            <__Field>Twitter</__Field>
            <Link href="https://twitter.com/0teklee">
              <__LinkVal>@0teklee</__LinkVal>
            </Link>
          </__ItemWrapper>
        </__Section>
        <__Section>
          <__SunbTitle title="CV" customStyle={subTitleStyle} />
          <__CVWrapper>
            <Link href="https://0teklee.github.io/resume">
              <__LinkVal>프론트 개발자 이택우 이력서 보러가기 </__LinkVal>
            </Link>
            <Link href="https://0teklee.github.io/resume">
              <__LinkVal>Link to LEE TEKWOO'S CV (KR) </__LinkVal>
            </Link>
          </__CVWrapper>
        </__Section>
        <__Section>
          <__SunbTitle title="Inquiry" customStyle={subTitleStyle} />
          <__Val>
            협업 / 기타 여러가지 질문들은 언제든 이메일로 문의주세요
          </__Val>
          <__Val>Collab & Questions are welcome!{"\n"}</__Val>
          <__Val>Please contact me anytime via email {`:)`}</__Val>
        </__Section>
        <__Section>
          <__SunbTitle title="About teklog" customStyle={subTitleStyle} />
          <__Val>Designed & Developed by @0teklee</__Val>
          <__SpecWrapper>
            <__FrontSpecWrapper>
              <h3>Front End</h3>
              <__SpecLogoWrapper>
                <__SpecLogo
                  src="https://res.cloudinary.com/dolziw8fv/image/upload/v1661927799/2560px-TypeScript_Logo__Blue_.svg_ed2qef.png"
                  width={150}
                  height={40}
                  alt="TypeScript"
                />
                <__SpecLogo
                  src="https://res.cloudinary.com/dolziw8fv/image/upload/v1661926939/React-icon.svg_qpdlfw.png"
                  width={70}
                  height={60}
                  alt="React"
                />
                <__SpecLogo
                  src="https://res.cloudinary.com/dolziw8fv/image/upload/v1661927798/800px-Nextjs-logo.svg_ozmxzw.png"
                  width={130}
                  height={80}
                  alt="NextJs"
                />
              </__SpecLogoWrapper>
            </__FrontSpecWrapper>
            <__BackSpecWrapper>
              <h3>Back End</h3>
              <__SpecLogoWrapper>
                <__SpecLogo
                  src="https://res.cloudinary.com/dolziw8fv/image/upload/v1661926895/prismalogo-freelogovectors.net__czjyfd.png"
                  width={130}
                  height={40}
                  alt="prisma"
                />
                <__SpecLogo
                  src="https://res.cloudinary.com/dolziw8fv/image/upload/v1661926895/planetscale_owler_20210106_213213_original_h0rsjf.png"
                  width={250}
                  height={40}
                  alt="planetscale"
                />
              </__SpecLogoWrapper>
            </__BackSpecWrapper>
            <__PhotoWrapper>
              <h3>Images</h3>
              <__SpecLogoWrapper>
                <__SpecLogo
                  src="https://res.cloudinary.com/dolziw8fv/image/upload/v1661931739/Cloudinary_logo.svg_hsgzv7.png"
                  width={260}
                  height={50}
                  alt="Cloudinary"
                />
              </__SpecLogoWrapper>
              <__PhotoCaptionWrapper>
                <__Val>
                  블로그에 사용된 대부분의 이미지는 직접 촬영했습니다.
                </__Val>
                <__Val>Images are made by @0teklee</__Val>
                <__Val id="copyrights">
                  All Rights Reserved by teklee 2022
                </__Val>
              </__PhotoCaptionWrapper>
            </__PhotoWrapper>
          </__SpecWrapper>
        </__Section>
      </__Wrapper>
    </Layout>
  );
};

export default InfoTemplate;

const __Wrapper = styled.div`
  max-width: 30rem;
`;

const __MainLogo = styled(__Wrapper)`
  ${theme.displayFlex("center", "center")}
`;

const __Section = styled.section`
  margin-top: 3rem;
  padding-bottom: 2rem;
`;

const __SunbTitle = styled(Title)``;

const __ItemWrapper = styled.div`
  ${theme.displayFlex("center", "space-between")};
  width: 100%;
  margin-bottom: 1rem;
`;

const __Field = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
`;

const __Val = styled.p`
  font-family: "proxima-nova", "IBM Plex Sans KR", sans-serif;
`;

const __GithubWrapper = styled(__ItemWrapper)`
  position: relative;
`;

const __Githublogo = styled.div`
  position: absolute;
  left: 70px;
  padding: 0.5rem;

  background: url("https://res.cloudinary.com/dolziw8fv/image/upload/v1661922158/25231_vg8uxt.png");
  background-size: contain;
  z-index: 2;
`;

const __LinkVal = styled.p`
  cursor: pointer;
  text-decoration: underline;
  font-family: "IBM Plex Sans KR", sans-serif;
  font-size: 1.2rem;
  font-weight: 600;

  &:hover {
    background: ${theme.colors.sign};
    color: #fff;
    border-color: #fff;
    transition: 0.5s;
  }
`;

const __CVWrapper = styled(__ItemWrapper)`
  display: block;
  p {
    text-decoration: none;
    margin-bottom: 1rem;
    font-weight: 600;
    line-height: 1.4;
  }
`;

const __SpecWrapper = styled(__GithubWrapper)`
  display: block;
  width: 100%;
  max-width: unset;
  flex: 1;
`;

const __SpecLogoWrapper = styled.div`
  ${theme.displayFlex("center", "flex-start")}
  gap: 10%;
`;

const __SpecLogo = styled(Image)`
  margin: auto;
`;

const __FrontSpecWrapper = styled.div`
  margin-top: 3rem;
  h3 {
    margin-bottom: 1rem;
  }
`;

const __BackSpecWrapper = styled(__FrontSpecWrapper)``;

const __PhotoWrapper = styled(__BackSpecWrapper)`
  display: block;
`;

const __PhotoCaptionWrapper = styled.div`
  margin-top: 2rem;
  #copyrights {
    position: relative;
    bottom: -5rem;
    font-size: 0.8rem;
    text-align: center;
  }
  @media only screen and (max-width: 500px) {
    font-size: 0.9rem;
  }
`;
