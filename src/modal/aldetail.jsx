import React from "react";
import styled from "styled-components";

const Detail = () => {
  return (
    <>
      <TSay>DA:ON 오늘 안에 계획서 내세요 ~~</TSay>
      <WhoSay>2023.11.08 · 박민하 선생님</WhoSay>
      <Line />
      <TextContent>
        타입스크립트(TypeScript)는 Microsoft에서 개발한 오픈 소스 프로그래밍
        언어로, 자바스크립트의 상위 집합 언어입니다. 타입스크립트는 정적 타입
        시스템을 제공하여 코드의 안정성과 가독성을 향상시키는데 중점을 둡니다.
        아래에서 타입스크립트의 주요 특징과 이점을 설명하겠습니다: 정적 타입
        시스템: 타입스크립트는 변수, 함수, 객체 등의 요소에 타입 정보를
        명시적으로 지정할 수 있습니다. 이를 통해 코드 실행 전에 타입 오류를
        발견하고 예방할 수 있어 코드의 안정성을 높입니다. 자바스크립트와 호환성:
        타입스크립트는 자바스크립트의 상위 집합 언어이므로 기존의 자바스크립트
        코드를 타입스크립트로 쉽게 마이그레이션할 수 있습니다. 또한,
        타입스크립트 코드는 .js 확장자 대신 .ts 확장자를 사용하여 저장하며,
        타입스크립트 컴파일러를 사용하여 자바스크립트 코드로 변환됩니다. 타입
        어노테이션: 변수, 함수, 인터페이스, 클래스 등의 요소에 타입 어노테이션을
        추가하여 해당 요소의 타입을 명시적으로 정의할 수 있습니다. 이를 통해
        코드의 가독성을 높이고 타입 오류를 사전 타입스크립트(TypeScript)는
        Microsoft에서 개발한 오픈 소스 프로그래밍 언어로, 자바스크립트의 상위
        집합 언어입니다. 타입스크립트는 정적 타입 시스템을 제공하여 코드의
        안정성과 가독성을 향상시키는데 중점을 둡니다. 아래에서 타입스크립트의
        주요 특징과 이점을 설명하겠습니다: 정적 타입 시스템: 타입스크립트는
        변수, 함수, 객체 등의 요소에 타입 정보를 명시적으로 지정할 수 있습니다.
        이를 통해 코드 실행 전에 타입 오류를 발견하고 예방할 수 있어 코드의
        안정성을 높입니다. 자바스크립트와 호환성: 타입스크립트는 자바스크립트의
        상위 집합 언어이므로 기존의 자바스크립트 코드를 타입스크립트로 쉽게
        마이그레이션할 수 있습니다. 또한, 타입스크립트 코드는 .js 확장자 대신
        .ts 확장자를 사용하여 저장하며, 타입스크립트 컴파일러를 사용하여
        자바스크립트 코드로 변환됩니다. 타입 어노테이션: 변수, 함수, 인터페이스,
        클래스 등의 요소에 타입 어노테이션을 추가하여 해당 요소의 타입을
        명시적으로 정의할 수 있습니다. 이를 통해 코드의 가독성을 높이고 타입
        오류를 사전에 방지할 수 있습니다. 객체 지향 프로그래밍: 타입스크립트는
        클래스, 상속, 인터페이스 등의 객체 지향 프로그래밍 요소를 지원하므로
        복잡한 소프트웨어 시스템을 개발하기에 적합합니다. 에코시스템:
        타입스크립트는 방대한 에코시스템을 가지고 있으며, 다양한 개발 도구와
        라이브러리를 지원합니다. 이로 인해 개발자들은 타입스크립트를 사용하여 웹
        애플리케이션, 서버 사이드 애플리케이션, 모바일 앱 등 다양한 플랫폼에서
        소프트웨어를 개발할 수 있습니다. 컴파일러 검사: 타입스크립트 컴파일러는
        코드를 변환하기 전에 타입 검사를
      </TextContent>
    </>
  );
};

export default Detail;

const TSay = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const WhoSay = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Line = styled.div`
  width: 714.49px;
  height: 2px;
  flex-shrink: 0;
  background: #f2f3f7;
`;

const TextContent = styled.div`
  width: 710.756px;
  height: 400px;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 56px;

  flex-wrap: wrap;
  overflow-y: scroll;

  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }

  color: #000;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 155.556% */
`;
