import React, { useLayoutEffect, useState } from "react";
import styled from "styled-components";
import { CustomAxios } from "../../../axios/customAxios";

const List = ({ state, value }) => {
  const [club, setClub] = useState();
  useLayoutEffect(() => {
    ClubGet();
  }, []);

  const ClubGet = async () => {
    try {
      const response = await CustomAxios.get("/club/list");
      console.log("club" + response.data);
      setClub(response.data);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <ListBigBox>
      <ListSauceBox
        onClick={() => {
          const newModalState = [...value];
          newModalState[0] = true;
          state(newModalState);
        }}
      >
        <ClubLogoBox>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-XQ-rJia-4eigH2Xv8OYXqRSQk0IYDc0sfA&usqp=CAU"
              alt="Club Logo"
            />
          </div>
        </ClubLogoBox>
        <ClubName>outsert</ClubName>
        <ClubIntroduce>
          교내 스마트 학생 관리 서비스 개발팀 인서트입니다. 학생들의 불편함을
        </ClubIntroduce>
      </ListSauceBox>
    </ListBigBox>
  );
};

const ListBigBox = styled.div`
  width: 1080px;
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  gap: 26px 40px;
`;

const ListSauceBox = styled.div`
  width: 180px;
  height: 234px;
  align-items: flex-start;
  gap: 3px;
  flex-shrink: 0;
  margin-top: 26px;
`;

const ClubLogoBox = styled.div`
  width: 180px;
  height: 180px;
  overflow: hidden;
  flex-shrink: 0;
`;

const ClubName = styled.div`
  color: #000;
  text-align: start;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const ClubIntroduce = styled.div`
  color: #666;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export default List;
