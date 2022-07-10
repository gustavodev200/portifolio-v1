import Input from "../Input";

interface IFormInputProps {
  type: string;
  name: string;
  placeholder: string;
  register(name: string): string[];
}

const Form: React.FC<IFormInputProps> = ({
  name,
  type,
  placeholder,
  register,
}) => {
  return (
    <form action="#">
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        {...register(name)}
      />
    </form>
  );
};

export default Form;
