import { useSubjectListValueStore } from '@/store';
import { Dropdown, Td } from '@maru/ui';
import { flex } from '@maru/utils';
import styled from 'styled-components';
import { useInput } from './GradeCalculatorItem.hooks';

interface Props {
  id: number;
  achievementLevels: string[];
  isError?: boolean[];
}

const GradeCalculatorItem = ({ id, achievementLevels, isError = [] }: Props) => {
  const subjectList = useSubjectListValueStore();
  const { handleSubjectChange } = useInput(id);

  const subject = subjectList[id];

  const getDisplayValue = (value: string | null, is미이수: boolean | null) => {
    if (value === null || (is미이수 && value === 'C')) return '미이수';
    return value;
  };

  return (
    <StyledGradeCalculatorItem>
      <Td styleType="SECONDARY" width={123} height="100%">
        {subject.subjectName}
      </Td>
      <Td width={190} height="100%">
        <Dropdown
          value={getDisplayValue(subject.achievementLevel21, subject.is미이수21)}
          size="SMALL"
          data={achievementLevels}
          width={80}
          onChange={handleSubjectChange}
          name="achievementLevel21"
          isError={subject.achievementLevel21 === '-' && isError[id]}
        />
      </Td>
      <Td width={190} height="100%">
        <Dropdown
          value={getDisplayValue(subject.achievementLevel22, subject.is미이수22)}
          size="SMALL"
          data={achievementLevels}
          width={80}
          onChange={handleSubjectChange}
          name="achievementLevel22"
          isError={subject.achievementLevel22 === '-' && isError[id]}
        />
      </Td>
      <Td width={190} height="100%">
        <Dropdown
          value={getDisplayValue(subject.achievementLevel31, subject.is미이수31)}
          size="SMALL"
          data={achievementLevels}
          width={80}
          onChange={handleSubjectChange}
          name="achievementLevel31"
          isError={subject.achievementLevel31 === '-' && isError[id]}
        />
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
