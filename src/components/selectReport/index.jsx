import React from "react";
import styled from "styled-components";
import { ReturnIcon, UnderArrowIcon } from "../../assets";

const Result = () => {
  return (
    <Page>
      <Content>
        <PageTitle>📄 월별 보고서 목록</PageTitle>
        <Row>
          <ReturnIcon />
          <RowBox>
            <SeeBox type={true}>
              <Button>동아리 이름</Button>
              <UnderArrowIcon width={25} height={25} />
            </SeeBox>
          </RowBox>
          <RowBox>
            <SeeBox type={false}>
              <Button>전체 보기</Button>
              <UnderArrowIcon />
            </SeeBox>
          </RowBox>
        </Row>
        <div style={{ height: "20px" }} />
        <ReportBox>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "42px",
            }}
          >
            <ReportNum>8</ReportNum>
            <div>
              <ReportTitle>"팀명 n월계획보고서"</ReportTitle>
              <ReportTMI>2023.11.09. 오후 08:32 · 조우성 학생</ReportTMI>
            </div>
          </div>
          <ReportCheckButton>확인하기</ReportCheckButton>
        </ReportBox>
      </Content>
    </Page>
  );
};

export default Result;

const RowBox = styled.div`
  display: flex;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 10px;
`;

const SeeBox = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 15px;
  border: 1px solid #b3b3b3;
  padding: 3px 6px 3px 12px;

  background: ${(props) => (props.type ? "#121212" : "#fff")};
  color: ${(props) => (props.type ? "#f6f6f6" : "#898989")};
`;

const Button = styled.div`
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 133.333% */
  letter-spacing: -0.12px;
`;

const Page = styled.div`
  width: 100vw;
  background: #f7f8fa;
  padding: 0px auto;
`;

const Content = styled.div`
  width: 834px;
  flex-shrink: 0;
  margin: auto;
  margin-top: 42px;
`;

const PageTitle = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const ReportBox = styled.div`
  width: 834px;
  height: 100px;
  padding: 0px 40px;
  flex-shrink: 0;
  border-top: 2px solid #f2f3f7;
  background: #fff;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ReportNum = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 800;
  line-height: 16px; /* 50% */
  letter-spacing: -0.32px;
`;

const ReportTitle = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px; /* 61.538% */
  letter-spacing: -0.26px;
  margin-bottom: 15px;
`;

const ReportTMI = styled.div`
  color: #666;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 88.889% */
  letter-spacing: -0.18px;
`;

const ReportCheckButton = styled.div`
  cursor: pointer;
  color: #000;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 88.889% */
  letter-spacing: -0.18px;
`;
