import { useRouter } from 'next/navigation';
import { ROUTES } from '@/constants/common/constant';
import { Link } from '@maru/ui';
import { color, font } from '@maru/theme';
import { flex } from '@maru/utils';
import { IconArrowRight } from '@maru/icon';
import MainNoticeList from './MainNoticeList/MainNoticeList';
import styled from 'styled-components';
import { Suspense } from 'react';
import { Loader } from '@/components/common';

const MainNotice = () => {
    const router = useRouter();

    return (
        <StyledMainNotice>
            <Link onClick={() => router.push(ROUTES.NOTICE)} gap="8px">
                <Title>공지사항</Title>
                <IconArrowRight color={color.gray900} width={24} height={24} />
            </Link>
            <Suspense fallback={<Loader />}>
                <MainNoticeList />
            </Suspense>
        </StyledMainNotice>
    );
};

export default MainNotice;

const StyledMainNotice = styled.div`
    position: relative;
    ${flex({ flexDirection: 'column' })}
    gap: 16px;
    width: 596px;
    height: 100%;
`;

const Title = styled.p`
    ${font.H3}
    color: ${color.gray900};
`;
