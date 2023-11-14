import React from "react";
import styled from "styled-components";

const Dday = () => {
  return (
    <Column>
      <Container>
        <DdayBox>
          <DdayBoxTitle>소프트웨이브까지</DdayBoxTitle>
          <DdayBoxSauce>D-21</DdayBoxSauce>
        </DdayBox>
        <CheckScheduleButton>해당 일정 확인하기</CheckScheduleButton>
        <ClubScheduleListBox>
          <ClubScheduleListTitle>전동동아리 일정</ClubScheduleListTitle>
          <ClubScheduleListSauce>
            <Between>
              <ClubScheduleTitle>소프트웨이브</ClubScheduleTitle>
              <ClubScheduleSouse>2023.11.12</ClubScheduleSouse>
            </Between>
            <ClubScheduleComing />
          </ClubScheduleListSauce>
        </ClubScheduleListBox>
      </Container>
    </Column>
  );
};

const Column = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Between = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  width: 1086.692px;
  height: 483.257px;
  border-radius: 20px;
  background: black;
  position: relative;
`;

const CheckScheduleButton = styled.div`
  position: absolute;
  bottom: 54px;
  left: 49px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: var(--gray-scale-gray-scale-700, #fff);
  width: 190px;
  height: 42px;
  flex-shrink: 0;
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const DdayBox = styled.div`
  position: absolute;
  top: 49px;
  left: 49px;
`;

const DdayBoxTitle = styled.div`
  color: #ccc;
  text-align: center;
  font-family: Pretendard;
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: start;
`;

const DdayBoxSauce = styled.div`
  color: var(--gray-scale-gray-scale-700, #fff);
  text-align: center;
  font-family: Pretendard;
  font-size: 74px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 2.96px;
  text-align: start;
`;

const ClubScheduleListBox = styled.div`
  position: absolute;
  top: 49px;
  right: 67px;
  margin-bottom: 18px;
`;

const ClubScheduleListTitle = styled.div`
  color: #ccc;
  text-align: center;
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: end;
  margin-bottom: 18px;
`;

const ClubScheduleListSauce = styled.div`
  width: 260px;
  height: 52px;
  padding: 16.5px 0px 16.5px 17.543px;
  gap: 75.881px;
  flex-shrink: 0;
`;

const ClubScheduleTitle = styled.div`
  color: var(--gray-scale-gray-scale-700, #fff);
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const ClubScheduleSouse = styled.div`
  color: rgb(204, 204, 204);
  text-align: center;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: end;
`;

const ClubScheduleComing = styled.div`
  width: 260px;
  height: 1.4px;
  flex-shrink: 0;
  margin: auto;
  margin-top: 3px;
  background: var(--gray-scale-gray-scale-700, #fff);
`;

export default Dday;
