import React, { useRef, useState } from "react";
import styled from "styled-components";
import Detail from "./aldetail";
import { useOutsideClick } from "../../../hooks/useOutsideClick";
import { CustomAxios } from "../../../axios/customAxios";

const SendModal = ({ state }) => {
  const ref = useRef();
  useOutsideClick(ref, () => state(false));

  const [searchValue, setSearchValue] = useState(""); // 1. 상태 추가
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleInputChange = (e) => {
    setSearchValue(e.target.value); // 2. 상태 업데이트
  };

  const SendAlert = async () => {
    console.log("Sending alert");
    try {
      const response = await CustomAxios.post(
        "/notice",
        {
          toWho: searchValue,
          subject: title,
          content: content,
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
    <Page>
      <AlertModatPage ref={ref}>
        <PageInfo>다음 학생들에게 알람을 보낼게요 </PageInfo>
        <SerchSender
          type="text"
          value={searchValue} // 상태와 값을 연결
          onChange={handleInputChange} // onChange 핸들러 연결
        />
        <Row>
          <SendedName>2121이일이</SendedName>
        </Row>
        <Title>알람 제목</Title>
        <TextArea
          height={"49.385px"}
          isAlightCenter={true}
          placeholder="제목을 입력해주세요..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Title>알람 내용</Title>
        <TextArea
          height={"336.491px;"}
          placeholder="이야기할 내용을 적어주세요..."
          isAlightCenter={false}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <SendButton onClick={() => SendAlert()}>전송하기</SendButton>
      </AlertModatPage>
    </Page>
  );
};

const Row = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 4px;
  flex-wrap: wrap; /* 추가 */

  margin-top: 8px;
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
  width: 700px;
  height: 85vh;
  flex-shrink: 0;
  background: #fff;

  padding: 37px;

  overflow-y: scroll;
`;

const PageInfo = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const SerchSender = styled.input`
  width: 215.988px;
  height: 33.573px;
  flex-shrink: 0;
  border: none;
  border-radius: 5px;
  background: #f7f8fa;

  margin-top: 5px;
`;

const SendedName = styled.div`
  padding: 10px 12px;
  background-color: #000;
  border-radius: 50px;

  color: var(--gray-scale-gray-scale-700, #fff);
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Title = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  margin-top: 20px;
`;

const TextArea = styled.textarea`
  width: 623.167px;
  height: ${(props) => props.height || "auto"};
  flex-shrink: 0;

  line-height: ${(props) =>
    props.isAlightCenter
      ? props.height
      : "normal"}; /* 오타 수정: isAlightCenter */

  border: none;
  border-radius: 8px; /* 오타 수정: border-radius */
  background: #f7f8fa;
  resize: none;

  margin-top: 10px;
  padding-left: 15px;
  padding-top: ${(props) => (props.isAlightCenter ? "" : "16px")};
`;

const SendButton = styled.div`
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 180px;
  height: 44.571px;
  flex-shrink: 0;

  border-radius: 5px;
  background: #000;

  color: var(--gray-scale-gray-scale-700, #fff);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  margin: auto;
  margin-top: 32px;
`;

export default SendModal;
