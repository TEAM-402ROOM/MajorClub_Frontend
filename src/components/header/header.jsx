import styled from "styled-components";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LogoIcon, AlertIcon } from "../../assets/index";

const Header = ({ state, alert }) => {
  return (
    <Column>
      <HeaderGap>
        <LinkTo to="/">
          <LogoIcon />
        </LinkTo>
        <LinkTo to="/">
          <HeaderText>홈</HeaderText>
        </LinkTo>
        <LinkTo to="/report">
          <HeaderText>보고서</HeaderText>
        </LinkTo>
        <LinkTo to="/application">
          <HeaderText>물품신청</HeaderText>
        </LinkTo>
        <LinkTo to="/d">
          <HeaderText>알람 보내기</HeaderText>
        </LinkTo>
      </HeaderGap>
      <ProfileGap>
        <div
          onClick={() => {
            state(true);
          }}
        >
          로그인
        </div>
        <div
          onClick={() => {
            alert([true, false]);
          }}
        >
          <AlertIcon width={10} height={10} />
        </div>
        <UserProfile />
      </ProfileGap>
    </Column>
  );
};

const Column = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 177px;
  padding-right: 177px;
  height: 80px;
  background-color: #fff;
`;

const LinkTo = styled(Link)`
  text-decoration: none;
`;

const ProfileGap = styled.div`
  display: flex;
  gap: 31px;
  align-items: center;
`;

const HeaderGap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 77px;
`;

const UserProfile = styled.div`
  border-radius: 40px;
  background: url(""), lightgray 50%;
  background-color: black;
  background-repeat: no-repeat;
  background-size: cover;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
`;

const HeaderText = styled.div`
  color: #000;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export default Header;
