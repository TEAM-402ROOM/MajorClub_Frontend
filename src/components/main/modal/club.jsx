import React from "react";
import styled from "styled-components";
import Box from "../../../ui/clubBox";

const Club = ({ state, value }) => {
  return (
    <Page
      onClick={() => {
        const newModalState = [...value];
        newModalState[0] = false;
        state(newModalState);
      }}
    >
      <ClubListTool>
        <Columns>
          <ClubImage />
          <div>
            <ClubName>OutSert</ClubName>
            <ClubInter>
              안녕하세요 인서트입니다 줜공동아리 계획 보고서 작성 방법을
              안내해드리는 서비스를 만드는 동아리를 만드는 팀을 만드는 사람을
              만드는 마현우를 만드는 동아리입니다
            </ClubInter>
          </div>
        </Columns>
        <UnderLine />
        <div style={{ marginLeft: "35px" }}>
          <Form>동아리 구성원</Form>
          <Grid>
            <Box />
          </Grid>
        </div>
      </ClubListTool>
    </Page>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  justify-content: start;
  gap: 18px;
`;

const Page = styled.div`
  position: fixed;
  top: 0;
  z-index: 99;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Columns = styled.div`
  display: flex;
  align-items: center;
`;

const ClubListTool = styled.div`
  width: 900px;
  height: 360px;
  flex-shrink: 0;
  background: #fff;
`;

const ClubImage = styled.div`
  width: 120px;
  height: 120.001px;
  border-radius: 10px;
  background: #000;
  margin: 35px;
  margin-bottom: 17px;
`;

const ClubName = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 5px;
`;

const ClubInter = styled.div`
  width: 500px;
  color: #666;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const UnderLine = styled.div`
  width: 833.145px;
  height: 2px;
  flex-shrink: 0;
  background: #f2f3f7;
  margin: auto;
  margin-bottom: 18px;
`;

const Form = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 13px;
`;

export default Club;
