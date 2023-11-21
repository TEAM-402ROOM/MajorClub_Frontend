import styled from "styled-components";
import React from "react";

const Application = () => {
  return (
    <MainPage>
      <PageTitle>📦 동아리 물품 신청</PageTitle>
      <PageSubTitle>
        동아리 활동에 필요한 물품을 선생님께 신청할 수 있어요!
      </PageSubTitle>
      <FormTitle>물품 이름 또는 책 제목</FormTitle>
      <Column>
        <FormInputS placeholder="ex ) 라떼판다 델타 3" />
        <FormInputSS value={1} type="number" />
      </Column>
      <FormTitle>구매 사이트</FormTitle>
      <FormInput placeholder="https://coupang.com/ ..." />
      <FormTitle>단가 ( 개당 가격 )</FormTitle>
      <FormInput placeholder="단가 입력" type="number" />
      <FormTitle>비고</FormTitle>
      <FormArea placeholder="규격 또는 참고사항을 입력해주세요" />
      <Column>
        <FinishLast>
          ‘리액트를 다루는 기술’ <span style={{ color: "red" }}>3</span>개를 총
          가격 <span style={{ color: "red" }}>126,000</span>
          원으로 물품을 신청할게요.
        </FinishLast>
      </Column>
      <CheckF>해당 사항이 요구 사항과 일치하며, 이를 확인했어요</CheckF>
      <SubmitButton>제출하기</SubmitButton>
    </MainPage>
  );
};

const Column = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const MainPage = styled.div`
  width: 840px;
  margin: auto;
`;

const PageTitle = styled.div`
  color: #000;
  text-align: start;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 40px;
`;

const PageSubTitle = styled.div`
  color: #666;
  text-align: start;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 2px;
`;

const FormTitle = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: start;
  margin-top: 40px;
`;

const FormInput = styled.input`
  width: 840px;
  height: 54px;
  flex-shrink: 0;
  position: relative;
  border: none;
  border-radius: 5px;
  background: var(--gray-scale-gray-scale-700, #fff);
  margin-top: 10px;
  text-indent: 23px;
`;

const FormInputS = styled.input`
  width: 700px;
  height: 54px;
  flex-shrink: 0;
  border: none;
  border-radius: 5px;
  background: var(--gray-scale-gray-scale-700, #fff);
  margin-top: 10px;
  text-indent: 23px;
`;

const FormInputSS = styled.input`
  width: 130px;
  height: 54px;
  flex-shrink: 0;
  border: none;
  border-radius: 5px;
  background: var(--gray-scale-gray-scale-700, #fff);
  text-indent: 23px;
  margin-top: 10px;
`;

const FormArea = styled.textarea`
  width: 840px;
  height: 128px;
  flex-shrink: 0;
  border-radius: 5px;
  background: var(--gray-scale-gray-scale-700, #fff);
  border: none;
  margin-top: 10px;
  text-indent: 23px;
  padding-top: 27px;
`;

const FinishLast = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: start;
  width: 840px;
  margin-top: 27px;
`;

const CheckF = styled.div`
  color: #666;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 2px;
`;

const SubmitButton = styled.div`
  cursor: pointer;
  border-radius: 5px;
  background: #000;
  width: 200px;
  height: 54px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--gray-scale-gray-scale-700, #fff);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: auto;
  margin-top: 55px;
  margin-bottom: 90px;
`;

export default Application;
