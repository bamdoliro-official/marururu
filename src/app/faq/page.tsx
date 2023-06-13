"use client";

import CategoryBar from "@/components/faq/CategoryBar";
import FaqLayout from "@/layouts/FaqLayout";
import { color } from "@/styles/color";
import { font } from "@/styles/font";
import styled from "styled-components";

const FaqPage = () => {
  return (
    <FaqLayout>
      <StyledFaq>
        <Title>자주 묻는 질문</Title>
        <CategoryBar />
      </StyledFaq>
    </FaqLayout>
  );
};

export default FaqPage;

const StyledFaq = styled.div`
  width: 100%;
  height: 100%;
`;

const Title = styled.p`
  ${font.H2}
  color: ${color.gray900};
`;
