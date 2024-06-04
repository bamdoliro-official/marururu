'use client';

import { AppLayout } from '@/layouts';
import { color } from '@maru/design-token';
import { Column, Text } from '@maru/ui';
import { styled } from 'styled-components';

const termUse = () => {
  return (
    <AppLayout header footer>
      <StyledTermUsePage>
        <Column gap={5}>
          <Text fontType="H1" color={color.gray900}>
            이용약관
          </Text>
          <Separator />
        </Column>
      </StyledTermUsePage>
      <Center>
        <Text fontType="H1" color={color.gray900}>
          부산소프트웨어마이스터고등학교 이용약관
        </Text>
      </Center>
      <StyledTermUsePage></StyledTermUsePage>
    </AppLayout>
  );
};

export default termUse;

const StyledTermUsePage = styled.div`
  width: 100%;
  padding-left: 205px;
  padding-top: 25px;

  @media (max-width: 768px) {
    padding-left: 20px;
    padding-top: 20px;
  }
`;

const Separator = styled.hr`
  border: 1px solid ${color.gray400};
  margin: 2% 0;
  width: 82%;

  @media (max-width: 768px) {
    width: 82%;
  }
`;

const Center = styled.div`
  align-items: center;
  display: inline-block;
  text-align: center;
  width: 100%;
`;
