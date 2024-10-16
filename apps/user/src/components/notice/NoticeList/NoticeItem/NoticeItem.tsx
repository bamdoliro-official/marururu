import { ROUTES } from '@/constants/common/constant';
import { IconArrowRight } from '@maru/icon';
import { color } from '@maru/design-token';
import { Column, Text } from '@maru/ui';
import { flex, formatCreatedAt } from '@maru/utils';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

interface Props {
  id: number;
  title: string;
  updatedAt: string;
}

const NoticeItem = ({ id, title, updatedAt }: Props) => {
  const router = useRouter();

  return (
    <StyledNoticeItem onClick={() => router.push(`${ROUTES.NOTICE}/${id}`)}>
      <Column gap={8} height={55}>
        <Text fontType="H5" color={color.gray900}>
          {title}
        </Text>
        <Text fontType="p3" color={color.gray750}>
          {formatCreatedAt(updatedAt)}
        </Text>
      </Column>
      <IconArrowRight color={color.gray600} width={24} height={24} />
    </StyledNoticeItem>
  );
};

export default NoticeItem;

const StyledNoticeItem = styled.div`
  ${flex({ justifyContent: 'space-between' })}
  width: 100%;
  height: 71px;
  border-bottom: 1px solid ${color.gray300};
  padding-bottom: 16px;
  cursor: pointer;
`;
