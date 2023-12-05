import React from "react";
import styled from "styled-components";
import Logo from "../../../assets/img/logo";

const AlertModal = (props) => {
  return (
    <Page>
      <AlertModalPage>
        <Logo />
      </AlertModalPage>
    </Page>
  );
};

const Page = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const AlertModatPage = styled.div`
  width: 800px;
  height: 740px;
`;

export default AlertModal;
