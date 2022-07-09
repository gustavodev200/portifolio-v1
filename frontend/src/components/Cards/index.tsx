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
        {/* <img src={bingo} alt="#" /> */}
        <CardDetails>
          <CardTitle>
            <h4>PROJETO - COLLAB BINGO(OPEN SOURCE)</h4>
          </CardTitle>
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
