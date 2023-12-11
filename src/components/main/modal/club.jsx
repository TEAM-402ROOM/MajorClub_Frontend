import React, { useRef } from "react";
import { useOutsideClick } from "../../../hooks/useOutsideClick";
import styled from "styled-components";
import Box from "../../../ui/clubBox";
import { CustomAxios } from "../../../axios/customAxios";

const Club = ({ state }) => {
  const ref = useRef();
  useOutsideClick(ref, () => state([false, false]));

  const JoinClub = async () => {
    try {
      // localStorage에서 토큰을 가져오거나, 다른 방식으로 토큰을 얻어온다.
      const accessToken = localStorage.getItem("accessToken");

      const response = await CustomAxios.post(
        "/clubs/join",
        {
          name: "김더미",
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Page>
      <ClubListTool ref={ref}>
        <Columns>
          <Row>
            <ClubImage />
            <div>
              <ClubName>OutSert</ClubName>
              <ClubInter>
                안녕하세요 인서트입니다 줜공동아리 계획 보고서 작성 방법을
                안내해드리는 서비스를 만드는 동아리를 만드는 팀을 만드는 사람을
                만드는 마현우를 만드는 동아리입니다
              </ClubInter>
            </div>
          </Row>
          <JoinButton onClick={() => JoinClub()}>참여하기</JoinButton>
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

const JoinButton = styled.div`
  cursor: pointer;
  width: 114.004px;
  height: 36px;
  flex-shrink: 0;
  border-radius: 6px;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;

  color: var(--gray-scale-gray-scale-700, #fff);
  text-align: center;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-right: 40px;
`;

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
const Row = styled.div`
  display: flex;
  align-items: center;
`;
const Columns = styled.div`
  display: flex;
  justify-content: space-between;
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
