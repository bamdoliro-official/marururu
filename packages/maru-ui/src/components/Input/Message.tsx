import { color, font } from '@packages/maru-global-style';
import styled from 'styled-components';
import { ReactNode } from 'react';

interface PropsType {
    children: ReactNode;
}

const Message = ({ children }: PropsType) => {
    return <StyledMessage>{children}</StyledMessage>;
};

export default Message;

const StyledMessage = styled.p`
    ${font.p3};
    color: ${color.gray500};
    margin-top: 4px;
`;
