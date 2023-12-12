import React, { useRef } from "react";
import styled from "styled-components";
import Logo from "../assets/img/logo";
import { BsmIcon } from "../assets";
import { Cookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { CustomAxios } from "../axios/customAxios";
import { useOutsideClick } from "../hooks/useOutsideClick";

const LoginModal = ({ state }) => {
  const isLogin = () => {
    window.location.href =
      "https://auth.bssm.kro.kr/oauth?clientId=24fb9d83&redirectURI=http://localhost:3000/auth";
  };

  const ref = useRef();
  useOutsideClick(ref, () => state(false));

  return (
    <Page>
      <LoginModalPage ref={ref}>
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
        <LoginButton onClick={() => isLogin()}>
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
