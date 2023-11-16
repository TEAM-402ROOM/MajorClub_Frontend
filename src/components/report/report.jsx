import styled from "styled-components";
import React from "react";
import Member from "./member/member";

const Report = () => {
  const members = Array.from({ length: 10 }, (_, index) => index);
  return (
    <MainBox>
      <MonthlyReport>📄8월 월별 보고서 작성</MonthlyReport>
      <NoticeReport>
        2023년 8월간 동아리 시간에 활동한 내용들을 작성해주세요!
      </NoticeReport>
      <ClubInfo>
        <Column>
          <ClubImg />
          <div>
            <ClubName>outSert</ClubName>
            <ClubInter>
              안녕하세요 인서트입니다 줜공동아리 계획 보고서 작성 방법을
              안내해드리는 서비스를 만드는 동아리를 만드는 팀을 만드는 사람을
              만드는 마현우를 만드는 동아리입니다
            </ClubInter>
          </div>
        </Column>
        <UnderLine />
        <ClubMember>동아리 구성원</ClubMember>
        <MemberGrid>
          {members.map((memberIndex) => (
            <Member key={memberIndex} />
          ))}
        </MemberGrid>
      </ClubInfo>
    </MainBox>
  );
};

const Column = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 34px;
  margin-top: 34px;
  margin-left: 35px;
`;

const MainBox = styled.div`
  width: 840px;
  margin: auto;
`;

const MonthlyReport = styled.div`
  color: #000;
  margin-top: 37px;
  text-align: start;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const NoticeReport = styled.div`
  color: #666;
  text-align: start;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 4px;
`;

const ClubInfo = styled.div`
  width: 840px;
  height: 360px;
  flex-shrink: 0;
  border: 2px solid #f2f3f7;
  background: #fff;
  margin-top: 19px;
`;

const ClubImg = styled.div`
  width: 120px;
  height: 120.001px;
  border-radius: 10px;
  background: black;
`;

const ClubName = styled.div`
  color: #000;
  text-align: start;
  font-family: Pretendard;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const ClubInter = styled.div`
  color: #666;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  width: 500px;
`;

const UnderLine = styled.div`
  width: 763.145px;
  height: 2px;
  flex-shrink: 0;
  background: #f2f3f7;
  margin: auto;
  margin-top: 17px;
`;

const ClubMember = styled.div`
  color: #000;
  text-align: start;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 18px;
  margin-left: 35px;
`;

const MemberGrid = styled.div`
  width: 763.145px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  margin-left: 35px;
`;

export default Report;
