import React, { useRef, useState } from "react";
import styled from "styled-components";
import Detail from "./aldetail";
import { useOutsideClick } from "../../../hooks/useOutsideClick";

const AlertModal = ({ state }) => {
  const [type, setType] = useState(true);
  const ref = useRef();
  useOutsideClick(ref, () => state([false, false]));
  return (
    <Page>
      <AlertModatPage ref={ref}>
        {type && (
          <>
            <PageName>내 알람 목록</PageName>
            <AlertBox>
              <Row>
                <div>
                  <AlertBoxTitle>
                    박민하 선생님이 프로젝트 계획서에 메세지를 남겼어요.
                  </AlertBoxTitle>
                  <AlertBoxDay>2023.11.08. 4일 전</AlertBoxDay>
                </div>
                <SeeDetail onClick={() => setType(false)}>
                  자세히 보기
                </SeeDetail>
              </Row>
            </AlertBox>
          </>
        )}
        {!type && <Detail />}
      </AlertModatPage>
    </Page>
  );
};

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

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
  border-top: 2px solid #f2f3f7;

  &:hover {
    background-color: #f5f5f5;
  }
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

const SeeDetail = styled.div`
  cursor: pointer;

  color: #000;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export default AlertModal;
