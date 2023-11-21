import React from "react";
import styled from "styled-components";

const Club = () => {
  return (
    <Page>
      <ClubListTool></ClubListTool>
    </Page>
  );
};

const Page = styled.div`
  position: fixed;
  top: 0;
  z-index: 99;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ClubListTool = styled.div`
  width: 900px;
  height: 360px;
  flex-shrink: 0;
  background: #fff;
`;

export default Club;
