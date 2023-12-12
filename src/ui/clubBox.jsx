import React from "react";
import styled from "styled-components";

const ClubBox = () => {
  return (
    <Colunms>
      <ClubImage />
      <div>
        <ClubPosition>팀장</ClubPosition>
        <ClubPeople>김준경</ClubPeople>
      </div>
      <div>
        <ClubPosition>팀워</ClubPosition>
        <ClubPeople>팍우빈</ClubPeople>
      </div>
    </Colunms>
  );
};

const Colunms = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
`;

const ClubImage = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  flex-shrink: 0;
  background-color: #000;
`;

const ClubPosition = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const ClubPeople = styled.div`
  color: #000;
  width: 60px;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 3px;
`;
export default ClubBox;
