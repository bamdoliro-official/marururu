import DownArrowIcon from '../Icons/ArrowDropDown';
import { color, flex, font } from '@maru/theme';
import styled from 'styled-components';

interface PropsType {
    name: string;
}

const Profile = ({ name }: PropsType) => {
    return (
        <StyledProfile>
            <Name>{name} 님</Name>
            <DownArrowIcon />
        </StyledProfile>
    );
};

export default Profile;

const StyledProfile = styled.div`
    ${flex({ alignItems: 'center' })}
    cursor: pointer;
`;

const Name = styled.p`
    ${font.H5};
    color: ${color.gray900};
`;
