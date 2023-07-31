import { useFormProvider, useFormStepProvider } from '../form.provider';
import { ChangeEventHandler } from 'react';
import { useParentInfoProvider } from './보호자정보.provider';

export const useInput = () => {
    const { setParentInfo } = useParentInfoProvider();

    const handleParentInfoDataChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { name, value } = e.target;
        setParentInfo((prev) => ({ ...prev, [name]: value }));
    };

    return { handleParentInfoDataChange };
};

export const useCTAButton = () => {
    const { parentInfo } = useParentInfoProvider();
    const { setForm } = useFormProvider();
    const { setFormStep } = useFormStepProvider();

    const handleNextButtonClick = () => {
        setForm((prev) => ({ ...prev, parent: parentInfo }));
        setFormStep('출신학교 및 학력');
    };

    const handlePreviousButtonClick = () => {
        setFormStep('지원자 정보');
    };

    return { handleNextButtonClick, handlePreviousButtonClick };
};
