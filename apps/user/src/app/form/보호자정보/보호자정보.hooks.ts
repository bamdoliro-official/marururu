import { ChangeEventHandler } from 'react';
import { useSaveFormMutation } from '@/services/form/mutations';
import { useSetFormStore, useSetFormStepStore } from '@/store';

export const useCTAButton = () => {
    const { saveFormMutate } = useSaveFormMutation();
    const setFormStep = useSetFormStepStore();

    const handleNextButtonClick = () => {
        setFormStep('출신학교및학력');
        saveFormMutate();
    };

    const handlePreviousButtonClick = () => {
        setFormStep('지원자정보');
    };

    return { handleNextButtonClick, handlePreviousButtonClick };
};

export const useInput = () => {
    const setForm = useSetFormStore();

    const handle보호자정보DataChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, parent: { ...prev.parent, [name]: value } }));
    };

    return { handle보호자정보DataChange };
};
