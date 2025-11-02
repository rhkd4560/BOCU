import React from "react";
import styled from "styled-components";
import BOCU_IMG from '../assets/BOCU_IMG.png'

// 전체 화면을 차지하며 가운데 정렬
const Wrapper = styled.main`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;      /* 세로 중앙 */
  justify-content: center;  /* 가로 중앙 */
  background: white;      /* 필요시 배경색 */
  box-sizing: border-box;
`;

// 이미지 비율 유지, 가로 폭 기준 축소
const CenteredImage = styled.img`
  display: block;
  max-width: 520px;  /* 원본이 세로 배너라 적당한 상한선 */
  width: 100%;       /* 컨테이너에 맞춰 축소 */
  height: auto;      /* 비율 유지 */
  object-fit: contain;
`;

const Main = () => {
    return (
        <Wrapper>
            <CenteredImage src={BOCU_IMG} alt="BOCU" />
        </Wrapper>
    )
}

export default Main;