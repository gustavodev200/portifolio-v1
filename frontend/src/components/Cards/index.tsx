import {
  CardButton,
  CardContent,
  CardDetails,
  CardTitle,
  CardWrapper,
  LinkProject,
} from "./style";

import { AiOutlineLink } from "react-icons/ai";
import bingo from "../../assets/images/bingo.png";

// type TitlesTypes = {
//   firstText: string;
//   secondText: string;
// };

const Cards = () => {
  return (
    <CardWrapper>
      <CardContent image={bingo}>
        <CardDetails>
          <CardTitle>
            <h4>PROJETO - COLLAB BINGO(OPEN SOURCE)</h4>
          </CardTitle>
          <span>
            Projeto feito com alguns amigos encontrado na comunidade de
            programação Rocketseat. Projeto feito com alguns amigos encontrado
            na comunidade de programação.
          </span>
          <CardButton>
            <LinkProject href="#">
              <AiOutlineLink fontSize={20} />
            </LinkProject>
          </CardButton>
        </CardDetails>
      </CardContent>
    </CardWrapper>
  );
};

export default Cards;
