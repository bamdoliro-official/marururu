import { useBooleanState, useOutsideClick } from '@maru/hooks';
import { IconArrowBottom, IconArrowTop } from '@maru/icon';
import { color, font } from '@maru/theme';
import { flex } from '@maru/utils';
import { CSSProperties } from 'react';
import styled, { css } from 'styled-components';
import Text from '../Text/Text';

type DropdownSizeOption = 'MEDIUM' | 'SMALL';

interface Props {
    label?: string;
    data: string[];
    width?: CSSProperties['width'];
    size?: DropdownSizeOption;
    value?: string;
    onChange: (value: string, name: string) => void;
    name: string;
    placeholder?: string;
}

const Dropdown = ({
    label,
    data,
    width = '320px',
    size = 'MEDIUM',
    value = '',
    onChange,
    name,
    placeholder,
}: Props) => {
    const {
        value: isOpen,
        setFalse: closeDropdown,
        toggle: handleToggleButtonClick,
    } = useBooleanState();
    const dropdownRef = useOutsideClick(closeDropdown);

    const handleDropdownItemButtonClick = (data: string) => {
        onChange(data, name);
        closeDropdown();
    };

    return (
        <div style={{ width }}>
            {label && <Label>{label}</Label>}
            <StyledDropdown size={size} onClick={handleToggleButtonClick} $isOpen={isOpen}>
                <Text fontType="p2" color={!!value ? color.gray900 : color.gray500}>
                    {value || placeholder}
                </Text>
                {isOpen ? (
                    <IconArrowTop color={color.gray600} width={24} height={24} />
                ) : (
                    <IconArrowBottom color={color.gray600} width={24} height={24} />
                )}
            </StyledDropdown>
            <DropdownListBox ref={dropdownRef} $isOpen={isOpen}>
                <DropdownList>
                    {data?.map((item, index) => (
                        <DropdownItem
                            key={`dropdown ${index}`}
                            onClick={() => handleDropdownItemButtonClick(item)}>
                            {item}
                        </DropdownItem>
                    ))}
                </DropdownList>
            </DropdownListBox>
        </div>
    );
};

export default Dropdown;

const Label = styled.p`
    ${font.context}
    color: ${color.gray700};
    margin-bottom: 8px;
`;

const StyledDropdown = styled.div<{ $isOpen: boolean; size: DropdownSizeOption }>`
    ${flex({ alignItems: 'center', justifyContent: 'space-between' })}
    width: 100%;
    background-color: ${color.white};
    border-radius: 6px;
    cursor: pointer;

    ${(props) =>
        props.$isOpen
            ? css`
                  border: 1px solid ${color.maruDefault};
                  outline: 2px solid rgba(20, 112, 255, 0.25);
              `
            : css`
                  border: 1px solid ${color.gray400};
              `};

    ${(props) =>
        props.size === 'MEDIUM'
            ? css`
                  height: 48px;
                  padding: 10px 16px;
              `
            : css`
                  height: 40px;
                  padding: 10px 10px 10px 16px;
              `}
`;

const DropdownListBox = styled.div<{ $isOpen: boolean }>`
    position: relative;
    display: ${(props) => (props.$isOpen ? 'block' : 'none')};
`;

const DropdownList = styled.div`
    z-index: 1;
    position: absolute;
    margin-top: 8px;
    padding: 8px 0px;
    width: 100%;
    background-color: ${color.white};
    border: 1px solid ${color.gray200};
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
`;

const DropdownItem = styled.button`
    ${flex({ alignItems: 'center' })}
    padding: 10px 16px;
    width: 100%;
    height: 48px;
    cursor: pointer;
    &:hover {
        background-color: ${color.gray200};
    }
`;
