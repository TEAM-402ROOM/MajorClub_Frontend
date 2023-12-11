import styled from "styled-components";
import Dday from "./dday/dday";
import Announcement from "./announcement/announcement";
import ClubList from "./clublist/clublist";
import Club from "./modal/club";
import Alert from "./modal/alert";
import { CustomAxios } from "../../axios/customAxios";
import React, { useState, useLayoutEffect } from "react";

const Main = () => {
  const [modal, setModal] = useState([false, false]);

  const urlSearchParams = new URLSearchParams(window.location.search);
  const token = urlSearchParams.get("code");

  useLayoutEffect(() => {
    const fetchData = async () => {
      try {
        console.log(token);

        const getIDToken = await CustomAxios.post("/auth/bsm", null, {
          params: { code: token },
        });

        console.log("콘솔" + getIDToken.data.access_token);
        localStorage.setItem("accessToken", getIDToken.data.access_token);
        localStorage.setItem("refreshToken", getIDToken.data.refresh_token);

        // {
        //   headers: {
        //     Authorization: `Bearer ${localStorage.getItem("accessToken")}`, // 여기에 토큰 변수를 넣어주세요.
        //   },
        // }
      } catch (error) {
        console.error("로그인 오류", error);
      }
    };
    if (token !== null) {
      fetchData();
    }
  }, []);

  return (
    <>
      {modal[0] && <Club state={setModal} value={modal} />}
      {modal[1] && <Alert state={setModal} />}
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
