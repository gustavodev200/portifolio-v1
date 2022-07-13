import { ButtonContainer, ButtonWrapper } from "./style";

type ButtonProps = {
  type: string;
  text: string;
};

const ButtonSubmit: React.FC<ButtonProps> = ({ type, text }) => {
  return (
    <ButtonContainer>
      <ButtonWrapper type={type} value={text} />
    </ButtonContainer>
  );
};

export default ButtonSubmit;
