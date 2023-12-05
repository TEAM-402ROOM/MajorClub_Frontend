import React from "react";
import styled from "styled-components";
import Logo from "../../../assets/img/logo";
import { BsmIcon } from "../../../assets";
import { Cookies } from "react-cookie";
import CustomAxios from "../../../axios/customAxios";

axios.defaults.withCredentials = true;

const LoginModal = ({ state }) => {
  const isLogin = async () => {
    try {
      console.log("로그인중");
      const response = await CustomAxios.post("api/user/login", {
        userId: user.id,
        password: user.pw,
      });
      // 성공적으로 로그인한 경우의 처리
      console.log("성공");
      setIsState((prev) => ({
        ...prev,
        popup: false,
      }));
      return response.data;
    } catch (error) {
      console.error("로그인 오류", error);
    }
  };
  const cookie = new cookie();
  return (
    <Page
      onClick={() => {
        state(false);
      }}
    >
      <LoginModalPage>
        <div>
          <div
            style={{
              marginTop: "32px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Logo width={149} height={49} />
          </div>
          <LoginFont>로그인</LoginFont>
        </div>
        <LoginButton>
          <BsmIcon />
          BSM 계정으로 로그인
        </LoginButton>
      </LoginModalPage>
    </Page>
  );
};

const Page = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const LoginModalPage = styled.div`
  width: 280px;
  height: 300px;
  border-radius: 6px;
  background: var(--gray-scale-gray-scale-700, #fff);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const LoginFont = styled.div`
  color: #666;
  text-align: center;
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 4px;
`;

const LoginButton = styled.div`
  cursor: pointer;
  width: 210px;
  height: 62px;
  flex-shrink: 0;
  border-radius: 6px;
  background: #000;
  margin: auto;
  margin-bottom: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 17px;
  color: var(--gray-scale-gray-scale-700, #fff);
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export default LoginModal;
