import styled from "styled-components";
import React, { useState } from "react";
import { CustomAxios } from "../../axios/customAxios";

const Application = () => {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const [url, setUrl] = useState("");
  const [price, setprice] = useState(0);
  const [usage, setUsage] = useState("");
  const [etc, setEtc] = useState("");
  const PostApplication = async () => {
    console.log("Sending alert");
    try {
      const response = await CustomAxios.post(
        "/application",
        {
          productName: name,
          count: count,
          url: url,
          price: price,
          usage: usage,
          etc: etc,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`, // 여기에 토큰 변수를 넣어주세요.
          },
        }
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <MainPage>
      <PageTitle>📦 동아리 물품 신청</PageTitle>
      <PageSubTitle>
        동아리 활동에 필요한 물품을 선생님께 신청할 수 있어요!
      </PageSubTitle>
      <FormTitle>물품 이름 또는 책 제목</FormTitle>
      <Column>
        <FormInputS
          placeholder="ex ) 라떼판다 델타 3"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <FormInputSS
          value={count}
          type="number"
          onChange={(e) => {
            setCount(e.target.value);
          }}
        />
      </Column>
      <FormTitle>구매 사이트</FormTitle>
      <FormInput
        placeholder="https://coupang.com/ ..."
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <FormTitle>단가 ( 개당 가격 )</FormTitle>
      <FormInput
        placeholder="단가 입력"
        type="number"
        value={price}
        onChange={(e) => setprice(e.target.value)}
      />
      <FormTitle>사용 용도</FormTitle>
      <FormArea
        placeholder="온프레미스 서버 구축을 통한 리눅스와 도커 & 쿠버네티스 학습 및 클라우드 비용 절감을 위하..."
        value={usage}
        onChange={(e) => setUsage(e.target.value)}
      />{" "}
      <FormTitle>비고</FormTitle>
      <FormArea
        placeholder="규격 또는 참고사항을 입력해주세요"
        value={etc}
        onChange={(e) => setEtc(e.target.value)}
      />
      <Column>
        <FinishLast>
          ‘리액트를 다루는 기술’ <span style={{ color: "red" }}>3</span>개를 총
          가격 <span style={{ color: "red" }}>126,000</span>
          원으로 물품을 신청할게요.
        </FinishLast>
      </Column>
      <CheckF>해당 사항이 요구 사항과 일치하며, 이를 확인했어요</CheckF>
      <SubmitButton onClick={() => PostApplication()}>제출하기</SubmitButton>
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
