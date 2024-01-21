import React from "react";
import * as S from "./style";

const CheckApplication = () => {
  return (
    <S.PageBox>
      <S.PageTitle>📦 물품 신청 현황</S.PageTitle>
      <S.Row></S.Row>
      {/* 디자인 수정 해야함 임시 설정 */}
      <S.ColnmnBox>
        <S.ColnmnContent>USB TO C</S.ColnmnContent>
        <S.ColnmnContent>고무망치(배송비포함)</S.ColnmnContent>
        <S.ColnmnContent>10</S.ColnmnContent>
        <S.ColnmnContent>100.000</S.ColnmnContent>
        <S.ColnmnContent>홍교사</S.ColnmnContent>
      </S.ColnmnBox>
    </S.PageBox>
  );
};

export default CheckApplication;
