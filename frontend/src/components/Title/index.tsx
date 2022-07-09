import { TitleWrapper } from "./style";

type TitlesTypes = {
  firstText: string;
  secondText: string;
};

const Title: React.FC<TitlesTypes> = ({ firstText, secondText }) => {
  return (
    <TitleWrapper>
      <h2>
        <span>{firstText}</span>
        <span>{secondText}</span>
      </h2>
    </TitleWrapper>
  );
};

export default Title;
