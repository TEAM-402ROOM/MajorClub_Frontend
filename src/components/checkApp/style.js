import styled from "styled-components";

export const PageBox = styled.div`
  padding: 0 175px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PageTitle = styled.p`
  color: #000;
  text-align: start;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ColnmnBox = styled.div`
  width: 100%;
  height: 70px;
  background-color: #fff;

  border-bottom: 1px solid #8e8e8e;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`;

export const ColnmnContent = styled.p`
  color: #8e8e8e;
  text-align: center;
  font-family: Pretendard;
  font-size: 26px;
  font-style: normal;
  font-weight: 400;
`;
