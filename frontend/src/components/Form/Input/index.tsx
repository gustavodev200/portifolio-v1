import { FieldValues, UseFormRegister } from "react-hook-form";
import { InputWrapper } from "./style";

type InputProps = {
  type: string;
  name: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
};

const Input: React.FC<InputProps> = ({ type, name, placeholder, register }) => {
  return (
    <InputWrapper
      type={type}
      placeholder={placeholder}
      {...register(name)}
      name={name}
      required
    />
  );
};

export default Input;
