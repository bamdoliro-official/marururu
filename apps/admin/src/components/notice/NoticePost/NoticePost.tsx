import { color, font } from '@maru/theme';
import { Button, Column } from '@maru/ui';
import { flex } from '@maru/utils';
import { ChangeEventHandler, useRef, useState } from 'react';
import styled from 'styled-components';
import { useNoticePostAction } from './NoticePost.hooks';

const NoticePost = () => {
    const contentTextareaRef = useRef<HTMLTextAreaElement>(null);
    const [noticeData, setNoticeData] = useState({
        title: '',
        content: '',
    });

    const { handleNoticePostButtonClick } = useNoticePostAction(noticeData);

    const handleNoticeDataChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (
        e,
    ) => {
        const { name, value } = e.target;
        setNoticeData({ ...noticeData, [name]: value });

        if (!contentTextareaRef.current) return;
        contentTextareaRef.current.style.height = 'auto';
        contentTextareaRef.current.style.height = contentTextareaRef.current.scrollHeight + 'px';
    };

    return (
        <StyledNoticeDetailContent>
            <Column gap={36}>
                <NoticeHeader>
                    <TitleInput
                        name="title"
                        value={noticeData.title}
                        onChange={handleNoticeDataChange}
                        placeholder="제목을 입력해주세요"
                    />
                    <Button size="SMALL" onClick={handleNoticePostButtonClick}>
                        게시하기
                    </Button>
                </NoticeHeader>
                <ContentTextarea
                    ref={contentTextareaRef}
                    name="content"
                    value={noticeData.content}
                    onChange={handleNoticeDataChange}
                    placeholder="내용을 작성해주세요."
                    rows={1}
                />
            </Column>
        </StyledNoticeDetailContent>
    );
};

export default NoticePost;

const StyledNoticeDetailContent = styled.div`
    ${flex({ flexDirection: 'column' })}
    padding: 0px 7px;
`;

const NoticeHeader = styled.div`
    ${flex({ alignItems: 'center', justifyContent: 'space-between' })}
    gap: 172px;
    width: 100%;
    height: 66px;
    border-bottom: 1px solid ${color.gray300};
    padding-bottom: 16px;
`;

const TitleInput = styled.input`
    ${font.H1}
    color: ${color.gray900};
    width: 100%;

    &::placeholder {
        color: ${color.gray400};
    }
`;

const ContentTextarea = styled.textarea`
    ${font.p2};
    color: ${color.gray900};

    &::placeholder {
        color: ${color.gray500};
    }
    resize: none;
`;
