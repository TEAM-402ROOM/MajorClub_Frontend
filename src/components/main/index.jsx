import styled from "styled-components";
import Dday from "./dday/dday";
import Announcement from "./announcement/announcement";
import ClubList from "./clublist/clublist";
import Club from "./modal/club";
import React, { useState } from "react";

const Main = () => {
  const [modal, setModal] = useState([false, false]);
  return (
    <>
      {modal[0] && <Club state={setModal} value={modal} />}
      <Box>
        <Dday />
        <MenuText>공지사항</MenuText>
        {/* {props.keyword !== "" &&
        props.keyword
          .replace(/ /g, "")
          .split(",")
          .slice(0, 3)
          .map((splitKeyword) => <Announcement />)} */}
        <Announcement />
        <MenuText>동아리 목록</MenuText>
        <ClubList state={setModal} value={modal} />
        <button
          onClick={() => {
            console.log(modal);
          }}
        >
          test
        </button>
      </Box>
    </>
  );
};

const Box = styled.div`
  width: 1086.692px;
  margin: auto;
  padding-top: 27px;
`;

const MenuText = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 38px;
`;

export default Main;
