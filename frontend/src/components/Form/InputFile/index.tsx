import { FieldValues, UseFormRegister } from "react-hook-form";
import styled from "styled-components";
import bingo_teste from "../../../assets/images/bingo.png";

type InputProps = {
  type: string;
  name: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
};

const InputFile: React.FC<InputProps> = ({
  type,
  name,
  placeholder,
  register,
}) => {
  return (
    <InputContainer>
      <ImagemSelected htmlFor={name}>
        <img src={bingo_teste} alt="Selecione uma imagem" />
        <span>SELECIONAR IMAGEM</span>
      </ImagemSelected>
      <InputFiles
        type={type}
        placeholder={placeholder}
        {...register(name)}
        name={name}
        id={name}
        required
      />
    </InputContainer>
  );
};

const InputContainer = styled.div``;
const ImagemSelected = styled.label`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;

  span {
    width: 100%;
    display: none;
  }

  img {
    width: 100%;
    border-radius: 10px;

    &:hover {
      opacity: 0.5;
      span {
        display: block;
      }
    }
  }
`;
const InputFiles = styled.input`
  display: none;
`;

export default InputFile;
