import React from "react";
import styled from "styled-components";
import BOCU_IMG from "../assets/BOCU_IMG.png";

const Main = () => {
  return (
    <Wrapper>
      <Poster src={BOCU_IMG} alt="BOCU CAREER FAIR" />
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.main`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  /* 데스크톱에서 여백(화이트) 보이도록 배경을 흰색으로 */
  background: #ffffff;
`;

/* 
  모바일(기본): 화면 꽉 채움 (cover) → 여백 없음
  데스크톱(>=768px): 포스터를 중앙에 담아 보여줌 (contain) → 양쪽 여백 생김
*/
const Poster = styled.img`
  width: 100vw;
  height: 100vh;
  height: -webkit-fill-available; /* iOS 랜딩뷰 꽉 채우기 */
  object-fit: cover;
  object-position: center;
  display: block;

  @media (min-width: 768px) {
    width: 100%;
    height: auto;
    max-width: 560px;
    object-fit: contain;
  }
`;