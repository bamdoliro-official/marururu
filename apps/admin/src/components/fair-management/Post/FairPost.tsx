import { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { flex } from '@maru/utils';
import { color } from '@maru/design-token';
import { Button, Column, Input, RadioGroup, Row } from '@maru/ui';
import { useFairPostAction } from './Post.hooks';
import type { ChangeEvent } from 'react';
import { formatDate, formatTime } from '@/utils';

const FairPost = () => {
  const [fairData, setFairData] = useState({
    applicationUrl: '',
    type: 'STUDENT_AND_PARENT',
    place: '',
    capacity: 100,
    applicationStartDate: '',
    applicationEndDate: '',
    startDate: '',
    startHour: '',
    start: '',
  });

  useEffect(() => {
    if (fairData.startDate && fairData.startHour) {
      const combinedStart = `${fairData.startDate}T${fairData.startHour}:00`;
      setFairData((prevData) => ({
        ...prevData,
        start: combinedStart,
      }));
    }
  }, [fairData.startDate, fairData.startHour]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (
      name === 'startDate' ||
      name === 'applicationStartDate' ||
      name === 'applicationEndDate'
    ) {
      setFairData((prevData) => ({
        ...prevData,
        [name]: formatDate(value),
      }));
    } else if (name === 'startHour') {
      setFairData((prevData) => ({
        ...prevData,
        [name]: formatTime(value),
      }));
    } else {
      setFairData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFairData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const { handleFairPostButtonClick } = useFairPostAction(fairData);

  return (
    <StyledCreateFairBox>
      <Column gap={58} alignItems="center" width={360}>
        <Column gap="36px" width="100%">
          <Column gap="18px">
            <Input
              label="폼 링크"
              width="100%"
              name="applicationUrl"
              value={fairData.applicationUrl}
              placeholder="폼의 링크를 삽입해주세요."
              onChange={handleInputChange}
            />
            <RadioGroup
              label="대상 선택"
              name="type"
              items={[
                { value: 'STUDENT_AND_PARENT', label: '학생 / 학부모' },
                { value: 'TEACHER', label: '교사' },
              ]}
              value={fairData.type}
              onChange={handleRadioChange}
            />
            <Input
              label="장소"
              width="100%"
              name="place"
              placeholder="장소를 입력해주세요."
              value={fairData.place}
              onChange={handleInputChange}
            />
            <Input
              label="입학설명회 날짜(yyyymmdd)"
              width="100%"
              name="startDate"
              placeholder="날짜를 입력해주세요."
              value={fairData.startDate}
              onChange={handleInputChange}
            />
            <Input
              label="시간(hhmm)"
              width="100%"
              name="startHour"
              placeholder="시간을 입력해주세요."
              value={fairData.startHour}
              onChange={handleInputChange}
            />
            <Row gap={5} alignItems="center">
              <Input
                label="신청 기한(yyyymmdd)"
                width="50%"
                name="applicationStartDate"
                placeholder="시작일"
                value={fairData.applicationStartDate}
                onChange={handleInputChange}
              />
              <Input
                label="ㅤ"
                width="50%"
                name="applicationEndDate"
                placeholder="마감일"
                value={fairData.applicationEndDate}
                onChange={handleInputChange}
              />
            </Row>
          </Column>
        </Column>
        <Button size="SMALL" onClick={handleFairPostButtonClick}>
          새로운 입학전형 설명회 생성하기
        </Button>
      </Column>
    </StyledCreateFairBox>
  );
};

export default FairPost;

const StyledCreateFairBox = styled.div`
  ${flex({
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  })}
  width: 500px;
  height: 690px;
  padding: 28px 32px;
  background-color: ${color.gray50};
  border: 1px solid ${color.gray200};
  border-radius: 12px;
  cursor: pointer;
`;
