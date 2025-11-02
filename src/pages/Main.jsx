import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import BOCU_IMG from "../assets/BOCU_IMG.png";

const GlobalStyle = createGlobalStyle`
  html, body, #root { min-height: 100%; margin: 0; }
  * { box-sizing: border-box; }
  body { overflow-x: hidden; } /* 가로 스크롤 방지 */
`;

const Main = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Poster src={BOCU_IMG} alt="BOCU CAREER FAIR" />
      </Wrapper>
    </>
  );
};

export default Main;

/* ✅ 스크롤 가능: fixed 제거, 일반 레이아웃 */
const Wrapper = styled.main`
  min-height: 100svh;     /* 모바일 동적 뷰포트 */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
`;

/* 모바일: 가로 꽉, 세로 자동(스크롤 허용) / 데스크톱: contain 중앙 */
const Poster = styled.img`
  display: block;
  width: 100vw;
  max-width: 100%;
  height: auto;           /* 긴 세로는 자연 스크롤 */
  object-fit: contain;
  object-position: center;

  @media (min-width: 768px) {
    width: auto;
    height: 92vh;
    max-width: 560px;
    object-fit: contain;
  }
`;
