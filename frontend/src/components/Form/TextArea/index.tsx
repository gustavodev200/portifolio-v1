import { FieldValues, UseFormRegister } from "react-hook-form";
import { TextAreaWrapper } from "./style";

type TextAreaProps = {
  name: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
};

const TextArea: React.FC<TextAreaProps> = ({ name, placeholder, register }) => {
  return (
    <TextAreaWrapper
      placeholder={placeholder}
      {...register(name)}
      name={name}
      required
    />
  );
};

export default TextArea;
