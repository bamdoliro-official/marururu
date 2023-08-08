import { AppLayout } from '@/layouts';
import { Button, Column, Row, Text } from '@maru/ui';
import { color, font } from '@maru/theme';
import { FinalFormTable } from '@/components/form';
import { flex } from '@maru/utils';
import {
    useExportFormAction,
    useFileUploadButton,
    useInput,
    useUploadFormDocumentAction,
} from './최종제출.hooks';
import { useFormDocumentState } from './최종제출.state';
import styled from 'styled-components';

const 최종제출 = () => {
    const { formDocument } = useFormDocumentState();
    const { fileInputRef, handleFileUploadButtonClick } = useFileUploadButton();
    const { handleUploadFormDocumentButtonClick } = useUploadFormDocumentAction();
    const { handleExportFormButtonClick } = useExportFormAction();
    const { handleFileDataChange } = useInput();

    return (
        <AppLayout header style={{ padding: '58px 96px 0px' }}>
            <Styled최종제출>
                <ContentBox>
                    <Column gap={36} alignItems="flex-start">
                        <Text fontType="H1" color={color.gray900}>
                            원서 최종 제출
                        </Text>
                        <Column gap={4}>
                            <Text fontType="p2" color={color.gray900}>
                                제출서류들은 스캔해서 하나의 PDF파일로 첨부해주시기 바랍니다.
                            </Text>
                            <Text fontType="p2" color={color.red}>
                                원서를 최종 제출됐을 경우 재업로드는 불가능합니다.
                            </Text>
                        </Column>
                        <ExportFormButton onClick={handleExportFormButtonClick}>
                            [ 원서 초안 pdf 다운로드 ]
                        </ExportFormButton>
                    </Column>
                    <Row gap={16} alignItems="center" style={{ margin: '72px 0 56px 0' }}>
                        <Button onClick={handleFileUploadButtonClick} size="SMALL">
                            첨부파일 업로드
                        </Button>
                        {formDocument.file.name ? (
                            <Text fontType="p2" color={color.gray900}>
                                {formDocument.file.name}
                            </Text>
                        ) : (
                            <Text fontType="p2" color={color.gray900}>
                                선택된 파일 없음
                            </Text>
                        )}
                    </Row>
                    <FinalFormTable />
                </ContentBox>
                <SideBar>
                    <Column style={{ position: 'sticky', top: '0px' }} gap={10}>
                        <FormFinalSubmitInfoBox>
                            <Text fontType="H4" color={color.gray900}>
                                제출 하기 전에 잠깐!
                            </Text>
                            <Column gap={12} alignItems="flex-start">
                                <Text fontType="p2" color={color.gray900}>
                                    1. 제출해야 하는 서류 확인하기
                                </Text>
                                <Text fontType="p2" color={color.gray900}>
                                    2. 잘못 입력되어 있는지 확인하기
                                </Text>
                                <Text fontType="p2" color={color.gray900}>
                                    3. 첨부 안 한 서류 있는지 확인하기
                                </Text>
                            </Column>
                        </FormFinalSubmitInfoBox>
                        <Button
                            onClick={handleUploadFormDocumentButtonClick}
                            width="100%"
                            size="LARGE">
                            원서 최종 제출
                        </Button>
                    </Column>
                </SideBar>
            </Styled최종제출>
            <input
                ref={fileInputRef}
                onChange={handleFileDataChange}
                type="file"
                accept=".pdf"
                hidden
            />
        </AppLayout>
    );
};

export default 최종제출;

const Styled최종제출 = styled.div`
    ${flex({ alignItems: 'center', justifyContent: 'space-between' })}
    width: 100%;
    height: 100%;
`;

const ContentBox = styled.div`
    ${flex({ flexDirection: 'column' })};
    width: 816px;
    height: 100%;
`;

const ExportFormButton = styled.button`
    ${font.btn2};
    color: ${color.gray500};
`;

const SideBar = styled.div`
    position: relative;
    width: 276px;
    height: 100%;
`;

const FormFinalSubmitInfoBox = styled.div`
    ${flex({ flexDirection: 'column' })};
    gap: 20px;
    height: 360px;
    width: 100%;
    padding: 28px 24px;
    border-radius: 12px;
    border: 1px solid ${color.gray300};
`;
