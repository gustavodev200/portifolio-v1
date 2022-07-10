import { InputWrapper } from "./style";
import { Dispatch, SetStateAction } from "react";

interface IInputProps {
  type: string;
  name: string;
  placeholder: string;
  register(name: string): string[];
}

const Input: React.FC<IInputProps> = ({
  type,
  name,
  placeholder,
  register,
}) => {
  return (
    <InputWrapper
      type={type}
      name={name}
      placeholder={placeholder}
      {...register(name)}
    />
  );
};

export default Input;
