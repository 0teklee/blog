# Teklog

[Front End Developer Tekwoo Lee's Tech Blog](https://teklog.site)
프론트엔드 개발자 이택우의 기술 블로그

#### Review 개발 회고 ([LINK](https://teklog.site/blog/8))

#### [Demo 시연 영상 보러가기](#demo)

### Author

이택우
github : @0teklee

## About Project

### Description

개발 기간 : 2022.08.23 ~ 2022.09.02
참여 인원 : 1인 (@0teklee) - Full Stack

CRUD가 구현된 풀스택 블로그앱을 개발하였습니다.
기획, 디자인, 개발, 배포까지 단독으로 진행한 프로젝트입니다.

#### Project Motivation & Goal

이 프로젝트의 동기는 블로그를 잘 사용하지 않게 된 것이었습니다. 어떤 이유에서 인지 고민해 보았고, 사용하던 서비스(velog, github, tistory, etc..)의 공통적인 문제점 3가지를 파악하게 되었습니다.

1. 게시글 관리의 불편함 (게시글 작성마다 배포를 해야 하는 불편함)
2. 게시글의 분류 (카테고리 사이드바가 없거나 태그로만 게시글 분류)
3. UI 변경의 한계

이러한 문제를 개선하여 사용자(저와 구독자) 모두가 만족할 만한 블로그를 만드는 것이 프로젝트의 궁극적인 목표였습니다.

이를 성취하기 위해서 다음 세부 목표를 세웠습니다.

- 사이트 내의 create, edit 페이지를 통해 게시글을 쉽게 작성, 수정할 수 있을 것.
- 카테고리를 통해 게시글을 분류하고, 쉽게 분류된 글에 접근할 수 있을 것.
- 서버사이드 렌더링(SSR)과 정적 사이트 렌더링(SSG)를 충분히 활용할 것.
- 매력적인 UI를 만들 것. (반응형 레이아웃 포함)
- SEO 최적화 (라이트하우스 SEO 부문 100점 달성)
- next/auth를 사용하여 사용자 권한을 관리할 것.

### Features

다음 기능들을 구현했습니다.

- github 로그인/로그아웃 기능
- 게시글 생성, 수정, 삭제 기능 (이미지 업로드 가능)
- 게시글 카테고리, 태그 필터링
- 게시글 아카이브 (월별 게시글 필터링)
- UI 편의성 (반응형 대응, night 모드 etc..)
- 예외처리, 로딩 시 fallback 페이지

### Stack

사용된 기술 스택은 다음과 같습니다.

**Frontend :**
<img src="https://img.shields.io/badge/React-61dafb?style=flatsquare&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flatsquare&logo=TypeScript&logoColor=white"> <img src="https://img.shields.io/badge/Next.js-000000?style=flatsquare&logo=Next.js&logoColor=white">

**Backend :**
<img src="https://img.shields.io/badge/Prisma-2D3748?style=flatsquare&logo=Prisma&logoColor=white"> <img src="https://img.shields.io/badge/PlanetScale (database)-000000?style=flatsquare&logo=PlanetScale&logoColor=white">

**Deployment:**
<img src="https://img.shields.io/badge/Vercel-000000?style=flatsquare&logo=Vercel&logoColor=white"> <img src="https://img.shields.io/badge/Cloudflare (CDN)-F38020?style=flatsquare&logo=Cloudflare&logoColor=white">

**Packages / Libraries**

- **CSS :** Styled Components
- **Editor :** React-quill
- **Authorization :** next/auth
- **State Management :** Recoil
- eslint / prettier

### Demo

#### Performance Inspection (Main Page)

![LIGHTHOUSE](https://res.cloudinary.com/dolziw8fv/image/upload/v1662452503/teklog_readme/teklog_lighthouse_avn8bo.jpg)

#### 메인 페이지

![MAIN](https://res.cloudinary.com/dolziw8fv/image/upload/v1662373284/teklog_readme/teklog_main_tinw7k.gif)

#### 블로그 리스트 페이지

![LIST](https://res.cloudinary.com/dolziw8fv/image/upload/v1662446832/teklog_readme/teklog_blog_list_f9um9g.gif)

#### 블로그 아카이브 페이지 (월별 필터링)

![ARCHIVE](https://res.cloudinary.com/dolziw8fv/image/upload/v1662446832/teklog_readme/teklog_archive_oqk6hc.gif)

#### 블로그 디테일 페이지

![DETAIL](https://res.cloudinary.com/dolziw8fv/image/upload/v1662446829/teklog_readme/teklog_blog_detail_qzny6s.gif)

#### 로그인/로그아웃 페이지

![LOGIN](https://res.cloudinary.com/dolziw8fv/image/upload/v1662370455/teklog_readme/teklog_login_d3xvja.gif)

#### 게시글 생성

![CREATE](https://res.cloudinary.com/dolziw8fv/image/upload/v1662371184/teklog_readme/teklog_writing_zmjsnv.gif)

#### 게시글 수정 & 삭제

![EDIT](https://res.cloudinary.com/dolziw8fv/image/upload/v1662371541/teklog_readme/teklog_editing_lopyut.gif)
![DELETE](https://res.cloudinary.com/dolziw8fv/image/upload/v1662371746/teklog_readme/teklog_delete_iiqwka.gif)

#### 모바일 반응형

![RESPONSIVE](https://res.cloudinary.com/dolziw8fv/image/upload/v1662446830/teklog_readme/teklog_mobile_akww8s.gif)

#### 잘못된 경로 접근 혹은 페이지 로딩 시 FALLBACK 페이지

![FALLBACK](https://res.cloudinary.com/dolziw8fv/image/upload/v1662447361/teklog_readme/teklog_fallback_pghd3m.jpg)
