import styled from "styled-components";
import Dday from "./dday/dday";
import Announcement from "./announcement/announcement";

const Main = () => {
  return (
    <Box>
      <Dday />
      <MenuText>공지사항</MenuText>
      {/* {props.keyword !== "" &&
        props.keyword
          .replace(/ /g, "")
          .split(",")
          .slice(0, 3)
          .map((splitKeyword) => <Announcement />)} */}
      <Announcement />
    </Box>
  );
};

const Box = styled.div`
  width: 1086.692px;
  margin: auto;
  padding-top: 27px;
`;

const MenuText = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 38px;
`;

export default Main;
