import { color, font } from '@maru/theme';
import { Button, Td } from '@maru/ui';
import Dropdown from '@maru/ui/components/Dropdown/Dropdown';
import { flex } from '@maru/utils';
import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

interface PropsType {
    subject?: string;
    grades: string[];
}

const GradeCalculatorItem = ({ subject, grades }: PropsType) => {
    return (
        <StyledGradeCalculatorItem>
            <Td width={123} height="100%">
                {subject}
            </Td>
            <Td width={190} height="100%">
                <Dropdown size="SMALL" data={grades} width={80} />
            </Td>
            <Td width={190} height="100%">
                <Dropdown size="SMALL" data={grades} width={80} />
            </Td>
            <Td width={190} height="100%">
                <Dropdown size="SMALL" data={grades} width={80} />
            </Td>
            <Td width={123} height="100%">
                {null}
            </Td>
        </StyledGradeCalculatorItem>
    );
};

export default GradeCalculatorItem;

const StyledGradeCalculatorItem = styled.div`
    ${flex({ alignItems: 'center' })}
    width: 100%;
    height: 64px;
`;
