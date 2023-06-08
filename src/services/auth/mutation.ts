import {
  joinUser,
  joinUserParamsType,
  loginUser,
  loginUserParamsType,
  requestEmail,
  requestEmailParamsType,
} from "./api";
import { ACCESS_KEY, REFRESH_KEY } from "@/constants/token";
import { Storage } from "@/lib/storage";
import { useRouter } from "next/navigation";
import { useMutation } from "react-query";
import axiosErrorTemplate from "@/utils/functions/axiosErrorTemplate";

/** 로그인 */
export const useLoginUserMutation = ({
  email,
  password,
}: loginUserParamsType) => {
  const router = useRouter();

  return useMutation(() => loginUser({ email, password }), {
    onSuccess: (res) => {
      const { accessToken, refreshToken } = res.data;
      Storage.setItem(ACCESS_KEY, accessToken);
      Storage.setItem(REFRESH_KEY, refreshToken);
      router.push("/");
    },
    onError: (err) => {
      axiosErrorTemplate(err);
    },
  });
};

/** 회원가입 */
export const useJoinUserMutation = ({
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
    onError: (err) => {
      axiosErrorTemplate(err);
    },
  });
};

/** 이메일 인증번호 요청 */
export const useRequestEmailMutation = ({ email }: requestEmailParamsType) => {
  return useMutation(() => requestEmail({ email }), {
    onError: (err) => {
      axiosErrorTemplate(err);
    },
  });
};
