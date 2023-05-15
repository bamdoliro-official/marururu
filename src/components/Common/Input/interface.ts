import { InputHTMLAttributes } from "react";

export interface InputPropsInterface
  extends InputHTMLAttributes<HTMLInputElement> {
  width?: string;
  desc?: string;
  msg?: string;
}

export interface ButtonInputPropsInterface extends InputPropsInterface {
  buttonText: string;
  buttonClick: () => void;
}
