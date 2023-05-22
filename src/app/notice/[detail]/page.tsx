"use client";

import LeftArrowIcon from "@/components/common/Icon/LeftArrow";
import NoticeInfo from "@/components/notice/NoticeInfo";
import NoticeLayout from "@/layouts/NoticeLayout";
import { color } from "@/styles/color";
import { font } from "@/styles/font";
import { useRouter } from "next/navigation";
import { styled } from "styled-components";

const NoticeDetailPage = () => {
  const router = useRouter();

  return (
    <NoticeLayout>
      <StyledNoticeDetail>
        <BackButton onClick={() => router.back()}>
          <LeftArrowIcon color={color.gray600} size={24} />
          <Title>공지사항</Title>
        </BackButton>
        <ContentsBox>
          <NoticeInfo title="테스트" date="2023.11.05" />
          <Content>이것은 테스트 입니다</Content>
        </ContentsBox>
      </StyledNoticeDetail>
    </NoticeLayout>
  );
};

export default NoticeDetailPage;

const StyledNoticeDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
  width: 100%;
  height: 100%;
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 2px;
  width: 89px;
  cursor: pointer;
`;

const Title = styled.p`
  ${font.H5}
  color: ${color.gray900};
`;

const ContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0px 7px;
`;

const Content = styled.pre`
  ${font.p2}
  color: ${color.gray900};
`;
