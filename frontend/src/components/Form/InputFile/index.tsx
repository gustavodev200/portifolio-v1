import { ChangeEvent } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import styled from "styled-components";
import bingo_teste from "../../../assets/images/bingo.png";
import { device } from "../../../styles/responsive";
import pixelToRem from "../../../utils/pxToRem";

type InputProps = {
  type: string;
  name: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  onChange: (value: ChangeEvent<HTMLInputElement>) => void;
  value: any;
};

const InputFile: React.FC<InputProps> = ({
  type,
  name,
  placeholder,
  onChange,
  register,
  value,
}) => {
  return (
    <InputContainer>
      <ImagemSelected htmlFor={name}>
        <img src={value ? value : bingo_teste} alt="Selecione uma imagem" />
        <span>SELECIONAR IMAGEM</span>
      </ImagemSelected>
      <InputFiles
        type={type}
        placeholder={placeholder}
        {...register(name)}
        name={name}
        id={name}
        onChange={onChange}
        required
      />
    </InputContainer>
  );
};

const InputContainer = styled.div`
  width: 100%;
`;
const ImagemSelected = styled.label`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 10px;

  span {
    width: 100%;
    display: none;
  }

  img {
    cursor: pointer;
    width: 100%;
    border-radius: 10px;

    &:hover {
      opacity: 0.5;
      span {
        display: block;
      }
    }
  }

  @media ${device.laptop} {
    justify-content: flex-start;
    img {
      width: 20%;
    }

    span {
      cursor: pointer;
      display: flex;
      justify-content: center;
      background-color: #10131a;
      margin-top: ${pixelToRem(40)};
      margin-left: ${pixelToRem(30)};
      width: 30%;
      padding: 10px;
      border-radius: 5px;
      height: 100%;
      color: #fff;
      font-weight: bold;
      font-size: ${pixelToRem(15)};
    }
  }
`;
const InputFiles = styled.input`
  display: none;
`;

export default InputFile;
