import { FormLayout } from '@/layouts';
import useModal from '@maru/hooks/src/useModal';
import { ButtonInput, Input, RadioGroup } from '@maru/ui';
import { useState } from 'react';
import { styled } from 'styled-components';
import FormController from '../FormController/FormController';
import FindSchoolModal from './FindSchoolModal/FindSchoolModal';

interface PropsType {
    onPrevious: () => void;
    onNext: () => void;
}

const 출신학교및학력 = ({ onPrevious, onNext }: PropsType) => {
    const { isOpen, openModal, closeModal } = useModal();
    const [appliedSchool, setAppliedSchool] = useState({
        name: '',
        location: '',
        code: '',
    });

    return (
        <FormLayout title="출신학교 및 학력">
            <Styled출신학교및학력>
                <RadioGroup
                    label="졸업 구분"
                    name="gradurationStatus"
                    list={['졸업 예정', '졸업', '고입 검정']}
                />
                <div></div>
                <ButtonInput
                    name="almaMater"
                    label="출신학교"
                    value={appliedSchool.name}
                    buttonText="검색"
                    handleInputButtonClick={openModal}
                    placeholder="클릭하여 검색하기"
                    readOnly
                />
                <div></div>
                <Input
                    name="gradurationYear"
                    label="졸업 년도, 합격 년도"
                    placeholder="뭐시기 뭐시기"
                    width="100%"
                />
                <ButtonInput
                    name="regions"
                    label="지역"
                    value={appliedSchool.location}
                    buttonText="검색"
                    handleInputButtonClick={() => {}}
                    placeholder="도로명 주소"
                    readOnly
                />
                <Input
                    name="neisNumber"
                    label="학교 나이스번호"
                    placeholder="뭐시기 뭐시기"
                    width="100%"
                />
                <Input
                    name="schoolContact"
                    label="학교 연락처"
                    placeholder="뭐시기 뭐시기"
                    width="100%"
                />
                <Input
                    name="teacherName"
                    label="작성 교사 이름"
                    placeholder="뭐시기 뭐시기"
                    width="100%"
                />
                <Input
                    name="teacherContact"
                    label="작성 교사 연락처"
                    placeholder="뭐시기 뭐시기"
                    width="100%"
                />
            </Styled출신학교및학력>
            <FormController onPrevious={onPrevious} onNext={onNext} step="출신학교 및 학력" />
            {isOpen && (
                <FindSchoolModal closeModal={closeModal} setAppliedSchool={setAppliedSchool} />
            )}
        </FormLayout>
    );
};

export default 출신학교및학력;

const Styled출신학교및학력 = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px 48px;
`;
