import { useFormProvider, useFormStepProvider } from '../form.provider';
import { useDebounceInput } from '@maru/hooks';

export const useFormSubmitAction = (
    debouncedCoverLetter: string,
    debouncedStatementOfPurpose: string,
) => {
    const { form, setForm } = useFormProvider();

    setForm((prev) => ({
        ...prev,
        document: {
            coverLetter: debouncedCoverLetter,
            statementOfPurpose: debouncedStatementOfPurpose,
        },
    }));

    const handleFormSubmitButtonClick = () => {
        console.log(form);
        alert('완료!');
    };

    return { handleFormSubmitButtonClick };
};

export const useInput = () => {
    const {
        value: coverLetter,
        onChange: handleCoverLetterDataChange,
        debouncedValue: debouncedCoverLetter,
    } = useDebounceInput({ initialValue: '' });
    const {
        value: statementOfPurpose,
        onChange: handleStatementOfPurposeDataChange,
        debouncedValue: debouncedStatementOfPurpose,
    } = useDebounceInput({ initialValue: '' });

    return {
        coverLetter,
        debouncedCoverLetter,
        handleCoverLetterDataChange,
        statementOfPurpose,
        debouncedStatementOfPurpose,
        handleStatementOfPurposeDataChange,
    };
};

export const useCTAButton = () => {
    const { setFormStep } = useFormStepProvider();

    const handlePreviousButtonClick = () => {
        setFormStep('성적 입력');
    };

    return { handlePreviousButtonClick };
};
