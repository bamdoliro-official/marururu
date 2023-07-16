import { loginUserParamsType } from '@/services/auth/api';
import { useLoginUserMutation } from '@/services/auth/mutations';
import { ChangeEventHandler, useState } from 'react';

export const useLogin = () => {
    const [loginUserData, setLoginUserData] = useState<loginUserParamsType>({
        email: '',
        password: '',
    });
    const loginUserMutation = useLoginUserMutation(loginUserData);

    const handleLoginButtonClick = () => {
        loginUserMutation.mutate();
    };

    const handleLoginUserData: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { name, value } = e.target;
        setLoginUserData({ ...loginUserData, [name]: value });
    };

    return { handleLoginUserData, handleLoginButtonClick };
};
