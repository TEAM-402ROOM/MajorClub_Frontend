import React, { useState, useLayoutEffect } from "react";
import styled from "styled-components";
import { CustomAxios } from "../../../axios/customAxios";

const Announcement = () => {
  const [alert, setAlert] = useState([]);

  useLayoutEffect(() => {
    GetNotice();
  });

  const GetNotice = async () => {
    const token = localStorage.getItem("accessToken");
    try {
      const response = await CustomAxios.get("/notice", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("알림" + response.data);
      setAlert(response.data);
    } catch (err) {
      console.error("공지" + err);
    }
  };

  return (
    <>
      <AnnBox>
        <AnnTitle>알람 제목</AnnTitle>
        <AnnDay>2022.21.23</AnnDay>
      </AnnBox>
    </>
  );
};

const AnnBox = styled.div`
  display: flex;
  width: 1080px;
  padding: 34.5px 36.29px 34.5px 32.551px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  border-radius: 5px;
  background: #fff;
  margin-top: 15px;
`;

const AnnTitle = styled.div`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const AnnDay = styled.div`
  color: #666;
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export default Announcement;
