import {
  CardButton,
  CardContent,
  CardDetails,
  CardTitle,
  CardWrapper,
  LinkProject,
} from "./style";

import { AiOutlineLink } from "react-icons/ai";

type TitlesTypes = {
  title: string;
  description: string;
  link: string;
  image: string;
  tag?: string;
};

const Cards: React.FC<TitlesTypes> = ({
  title,
  description,
  link,
  image,
  tag,
}) => {
  return (
    <CardWrapper>
      <CardContent image={image}>
        <CardDetails>
          <CardTitle>
            <h4>{title}</h4>
          </CardTitle>
          <span>{description}</span>
          <CardButton>
            <LinkProject href={`${link}`} target="_blank">
              <AiOutlineLink fontSize={20} />
            </LinkProject>
          </CardButton>
        </CardDetails>
      </CardContent>
    </CardWrapper>
  );
};

export default Cards;
