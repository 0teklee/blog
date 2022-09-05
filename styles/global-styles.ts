import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

export const GlobalStyles = createGlobalStyle`
${normalize}
  :focus {
  outline: none;
  border: none;
}

@font-face {
  font-family: 'Cormorant';
  src: url('/asset/Cormorant/Cormorant-SemiBold.woff');
  font-weight:400;
  font-style: normal;
  font-display: swap;

}
@font-face {
  font-family:'IBM Plex Sans KR';
  src: url('/asset/IBM_Plex_Sans_KR/IBMPlexSansKR-Regular.woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;

}
@font-face {
  font-family: 'Roboto';
  src: url('/asset/Roboto/Roboto-Regular.woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap;

}

::-webkit-scrollbar {
  display: none;
}
button {
  background: none;
  padding: 0;
  border: none;
  cursor: pointer;
}
a {
  text-decoration: none;
  color:inherit;
}
h1, h2, h3, h4, h5, h6, p, span, a {
  margin : 0;

}
h1, h2, h3, h4, h5, h6, p, span, a, div {
  &::selection {
    color: #fff;
    background: #7e7e7e;
  }
}

* {
  font-family: "IBM Plex Sans KR","Cormorant","proxima-nova", "proxima-nova-condensed", "proxima-nova-extra-condensed", "Tenon";
  box-sizing: border-box;
  line-height: normal;
  letter-spacing: normal;
}

`;
