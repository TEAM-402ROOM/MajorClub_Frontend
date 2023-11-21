import styled from "styled-components";
import React, { useState } from "react";
import Member from "./member/member";

const Report = () => {
  const members = Array.from({ length: 10 }, (_, index) => index);
  const [skillInput, setSkillInput] = useState("");
  const [skill, setSkill] = useState([]);
  const [goldClub, setGold] = useState([{ id: 1, value: "" }]);

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter" && skillInput.trim() !== "") {
      setSkill([...skill, skillInput.trim()]);
      setSkillInput("");
    }
  };

  const handleOnChange = (e) => {
    setSkillInput(e.target.value);
  };

  const addButtonGold = () => {
    const newList = [...goldClub, { id: goldClub.length + 1, value: "" }];
    setGold(newList);
  };

  const handleGoldChange = (index, newValue) => {
    const updatedGold = [...goldClub];
    updatedGold[index].value = newValue;
    setGold(updatedGold);
  };

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
      <ReportFrom>서비스 주제</ReportFrom>
      <InputBox placeholder="스마트 학생 관리 웹/앱 서비스" />
      <ReportFrom>서비스 목표</ReportFrom>
      {goldClub.map(({ id, value }, index) => (
        <InputBox
          placeholder="스마트 학생 관리 웹/앱 서비스"
          key={id}
          value={value}
          onChange={(e) => handleGoldChange(index, e.target.value)}
        />
      ))}

      <AddGoldButton onClick={addButtonGold}>+ 목표 추가</AddGoldButton>
      <ReportFrom>기술 스택</ReportFrom>
      <InputBoxShort
        placeholder="기술스택 입력"
        onKeyDown={handleInputKeyDown}
        onChange={handleOnChange}
        value={skillInput}
      />
      <ColumnSkill>
        {skill.map((item, index) => (
          <SkillBox key={index}>{item}</SkillBox>
        ))}
      </ColumnSkill>
      <ReportFrom>프로젝트 진행사항</ReportFrom>
      <TextField placeholder="진행사항을 입력해주세요" />
      <ReportFrom>발생헀던 문제 혹은 어려웠던 점 또는 해결 방안</ReportFrom>
      <TextField placeholder="발생한 문제 || 어려운점 && 해결방안" />
      <ReportFrom>피드백 받은 내용</ReportFrom>
      <TeacherType m={29}>멘토 교사 피드백</TeacherType>
      <TextField placeholder="멘토 교사님의 피드백을 입력하세요." />
      <TeacherType m={20}>담당 교사 피드백</TeacherType>
      <TextField placeholder="담당 교사님의 피드백을 입력하세요." />
      <PostButton>제출하기</PostButton>
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

const ColumnSkill = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
  width: 840px;
  gap: 7.6px;
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

const ReportFrom = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 40px;
`;

const InputBox = styled.input`
  width: 840px;
  height: 54px;
  flex-shrink: 0;
  border: none;
  border-radius: 5px;
  background: var(--gray-scale-gray-scale-700, #fff);
  margin-top: 10px;
  padding-left: 23px;

  ::placeholder {
    color: #999;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

const InputBoxShort = styled.input`
  width: 300px;
  height: 54px;
  flex-shrink: 0;
  border: none;
  border-radius: 5px;
  background: var(--gray-scale-gray-scale-700, #fff);
  margin-top: 10px;
  padding-left: 23px;

  ::placeholder {
    color: #999;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

const AddGoldButton = styled.div`
  color: #444;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 14px;
  text-align: end;
  cursor: pointer;
`;

const SkillBox = styled.div`
  padding: 11.5px 14.34px 11.5px 14.34px;
  border-radius: 30px;
  margin-top: 18.34px;
  background-color: #000;
  flex-shrink: 0;
  color: var(--gray-scale-gray-scale-700, #fff);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const TextField = styled.textarea`
  border: none;
  width: 840px;
  height: 400px;
  flex-shrink: 0;
  border-radius: 5px;
  background: var(
    --gray-scale-gray-scale-700,
    #fff
  ); /* Adjust or replace this line */
  resize: none;
  margin-top: 10px;
  position: relative;

  &::placeholder {
    position: absolute;
    top: 17px; /* Adjust as needed */
    left: 21px;
  }
`;

const TeacherType = styled.div`
  color: #444;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: ${(props) => `${props.m}px`};
`;

const PostButton = styled.div`
  cursor: pointer;
  margin: auto;
  display: flex;
  margin-top: 81px;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 54px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #000;
  color: var(--gray-scale-gray-scale-700, #fff);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 91px;
`;

export default Report;
