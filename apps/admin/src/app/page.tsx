'use client';

import FormList from '@/components/main/FormList/FormList';
import AppLayout from '@/layouts/AppLayout';
import initMockAPI from '@/mocks';
import { useFormListQuery } from '@/services/form/queries';
import { Button, Column, Row, SearchInput, Text } from '@maru/ui';
import { flex } from '@maru/utils';
import { styled } from 'styled-components';

if (process.env.NODE_ENV === 'development') {
    initMockAPI();
}

const MainPage = () => {
    const { data: formListData } = useFormListQuery();

    return (
        <AppLayout>
            <StyledMainPage>
                <Text fontType="H1">원서 관리</Text>
                <Column gap={36}>
                    <Row justifyContent="space-between" alignItems="center">
                        <Text fontType="H5">{formListData?.length}명</Text>
                        <Row gap={8}>
                            <SearchInput placeholder="통합 검색" />
                            <Button size="SMALL">검색</Button>
                        </Row>
                    </Row>
                    <FormList />
                </Column>
            </StyledMainPage>
        </AppLayout>
    );
};

export default MainPage;

const StyledMainPage = styled.div`
    ${flex({ flexDirection: 'column' })}
    gap: 40px;
    width: 100%;
    height: 100%;
    padding: 64px 75px;

    overflow: auto;
`;
