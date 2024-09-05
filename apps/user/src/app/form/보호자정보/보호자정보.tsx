import { FindAddressModal, FormController } from '@/components/form';
import { FormLayout } from '@/layouts';
import { useFormValueStore } from '@/store';
import { ButtonInput, Column, Input, Row } from '@maru/ui';
import { useOverlay } from '@toss/use-overlay';
import { useCTAButton, useInput } from './보호자정보.hooks';
import { useState } from 'react';
import { Storage } from '@/apis/storage/storage';

const 보호자정보 = () => {
  const overlay = useOverlay();
  const form = useFormValueStore();
  const { handle보호자정보Change } = useInput();
  const { handleMoveNextStep, handleMovePreviousStep } = useCTAButton();

  const [isNextClicked, setIsNextClicked] = useState(false);
  const [isParentNameError, setIsParentNameError] = useState(false);
  const [isParentPhoneNumberError, setIsParentPhoneNumberError] = useState(false);
  const [isParentRelationError, setIsParentRelationError] = useState(false);
  const [isAddressError, setIsAddressError] = useState(false);
  const [isDetailAddressError, setIsDetailAddressError] = useState(false);

  const correct = Storage.getItem('correct');

  const validateForm = () => {
    const nameValid = form.parent.name.length >= 2;
    const phoneNumberValid = form.parent.phoneNumber.length === 11;
    const relationValid = form.parent.relation.length > 0;
    const addressValid =
      form.parent.address.length > 0 && form.parent.address.length < 100;
    const detailAddressValid =
      form.parent.detailAddress.length > 0 && form.parent.detailAddress.length < 100;

    return (
      nameValid && phoneNumberValid && relationValid && addressValid && detailAddressValid
    );
  };

  const handleNextClick = () => {
    setIsNextClicked(true);

    const nameValid = form.parent.name.length >= 2;
    const phoneNumberValid = form.parent.phoneNumber.length === 11;
    const relationValid = form.parent.relation.length > 0;
    const addressValid =
      form.parent.address.length > 0 && form.parent.address.length < 100;
    const detailAddressValid =
      form.parent.detailAddress.length > 0 && form.parent.detailAddress.length < 100;

    setIsParentNameError(!nameValid);
    setIsParentPhoneNumberError(!phoneNumberValid);
    setIsParentRelationError(!relationValid);
    setIsAddressError(!addressValid);
    setIsDetailAddressError(!detailAddressValid);

    if (validateForm()) {
      handleMoveNextStep();
    }
  };

  const handle보호자정보ErrorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handle보호자정보Change(e);
    const { name, value } = e.target;

    if (isNextClicked) {
      if (name === 'name') {
        setIsParentNameError(value.length < 2);
      } else if (name === 'phoneNumber') {
        setIsParentPhoneNumberError(value.length !== 11);
      } else if (name === 'relation') {
        setIsParentRelationError(value.length === 0);
      } else if (name === 'address') {
        setIsAddressError(value.length === 0 || value.length >= 100);
      } else if (name === 'detailAddress') {
        setIsDetailAddressError(value.length === 0 || value.length >= 100);
      }
    }
  };

  const openFindAddressModal = () => {
    overlay.open(({ isOpen, close }) => (
      <FindAddressModal isOpen={isOpen} onClose={close} />
    ));
  };

  return (
    <FormLayout title="보호자 정보">
      <Column gap={30}>
        <Row gap={48}>
          <Input
            name="name"
            value={form.parent.name}
            onChange={handle보호자정보ErrorChange}
            label="성명"
            placeholder="예) 홍길동"
            width="100%"
            isError={isParentNameError}
            errorMessage={isParentNameError ? '이름을 입력해주세요.' : ''}
          />
          <Input
            name="phoneNumber"
            value={form.parent.phoneNumber}
            onChange={handle보호자정보ErrorChange}
            label="전화번호"
            placeholder="- 없이 입력해주세요."
            width="100%"
            isError={isParentPhoneNumberError}
            errorMessage={isParentPhoneNumberError ? '전화번호를 입력해주세요.' : ''}
          />
        </Row>
        <Input
          label="학생과의 관계"
          value={form.parent.relation}
          onChange={handle보호자정보ErrorChange}
          name="relation"
          placeholder="예) 부, 모"
          isError={isParentRelationError}
          errorMessage={isParentRelationError ? '올바른 값을 입력해주세요' : ''}
          width="calc(50% - 24px)"
        />
        <ButtonInput
          label="주소"
          buttonText="검색"
          onClick={openFindAddressModal}
          width="100%"
          value={form.parent.address}
          placeholder="예) 부산광역시 강서구 가락대로 1393 봉림동 15"
          isError={isAddressError}
          errorMessage={isAddressError ? '주소를 입력해주세요.' : ''}
          enabled={true}
        />
        <Row gap={48}>
          <Input
            name="detailAddress"
            value={form.parent.detailAddress}
            onChange={handle보호자정보ErrorChange}
            label="상세 주소"
            placeholder="상세 주소를 입력해주세요."
            width="100%"
            isError={isDetailAddressError}
            errorMessage={isDetailAddressError ? '알맞은 상세 주소를 입력해 주세요.' : ''}
          />
          <Input
            name="zoneCode"
            value={form.parent.zoneCode}
            onChange={handle보호자정보ErrorChange}
            label="우편번호"
            placeholder="우편번호 5자리를 입력해주세요."
            width="100%"
            readOnly
          />
        </Row>
      </Column>
      <FormController
        onPrevious={correct ? undefined : handleMovePreviousStep}
        onNext={handleNextClick}
        step="보호자정보"
      />
    </FormLayout>
  );
};

export default 보호자정보;
