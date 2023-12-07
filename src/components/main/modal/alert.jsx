import React from "react";
import styled from "styled-components";

const AlertModal = ({ state }) => {
  return (
    <Page
      onClick={() => {
        state([false, false]);
      }}
    >
      <AlertModatPage>
        <PageName>내 알람 목록</PageName>
        <AlertBox>
          <AlertBoxTitle>
            박민하 선생님이 프로젝트 계획서에 메세지를 남겼어요.
          </AlertBoxTitle>
          <AlertBoxDay>2023.11.08. 4일 전</AlertBoxDay>
        </AlertBox>
      </AlertModatPage>
    </Page>
  );
};

const Page = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AlertModatPage = styled.div`
  width: 800px;
  height: 540px;
  background-color: white;
  padding: 42px;
`;

const PageName = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 30px;
`;

const AlertBox = styled.div`
  width: 680px;
  height: 61px;
  flex-shrink: 0;
  padding: 20px;
`;

const AlertBoxTitle = styled.div`
  color: #000;
  text-align: start;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const AlertBoxDay = styled.div`
  color: #000;
  text-align: start;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export default AlertModal;
