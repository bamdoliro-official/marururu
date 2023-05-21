import {
  joinUser,
  joinUserParamsType,
  loginUser,
  loginUserParamsType,
  requestEmail,
  requestEmailParamsType,
} from "@/api/auth";
import { ACCESS_KEY, REFRESH_KEY } from "@/constants/token";
import { Storage } from "@/api/storage";
import { useRouter } from "next/navigation";
import { useMutation } from "react-query";

/** 로그인 */
export const loginUserMutation = ({ email, password }: loginUserParamsType) => {
  const router = useRouter();

  return useMutation(() => loginUser({ email, password }), {
    onSuccess: (res) => {
      const { accessToken, refreshToken } = res.data;
      Storage.setItem(ACCESS_KEY, accessToken);
      Storage.setItem(REFRESH_KEY, refreshToken);

      alert("로그인 성공 !");
      router.push("/");
    },
    onError: () => {
      alert("로그인 실패");
    },
  });
};

/** 회원가입 */
export const joinUserMutation = ({
  email,
  code,
  password,
}: joinUserParamsType) => {
  const router = useRouter();

  return useMutation(() => joinUser({ email, code, password }), {
    onSuccess: () => {
      alert("회원가입 성공");
      router.push("/login");
    },
    onError: () => {
      alert("회원가입 실패");
    },
  });
};

/** 이메일 인증번호 요청 */
export const requestEmailMutation = ({ email }: requestEmailParamsType) => {
  return useMutation(() => requestEmail({ email }));
};
