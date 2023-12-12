import React from "react";
import styled from "styled-components";

const MemberProfil = ({ name, type }) => {
  return (
    <ProfilBox>
      <MemImg />
      <div>
        <Position>{type}</Position>
        <Name>{name}</Name>
      </div>
    </ProfilBox>
  );
};

const ProfilBox = styled.div`
  width: 100px;
  height: 59px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 11.25px;
`;

const MemImg = styled.div`
  background-image: url("");
  background-position: center; /* 배경 이미지를 가운데로 정렬 */
  background-size: 32px 32px; /* 배경 이미지의 크기를 32x32로 조절 */
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  background-repeat: no-repeat;
  fill: #d9d9d9;
  border-radius: 50%;
  background-color: #000;
`;

const Position = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Name = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export default MemberProfil;
