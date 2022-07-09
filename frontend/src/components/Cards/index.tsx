import {
  CardButton,
  CardContent,
  CardDetails,
  CardTitle,
  CardWrapper,
  LinkProject,
} from "./style";

import { AiOutlineLink } from "react-icons/ai";

// type TitlesTypes = {
//   firstText: string;
//   secondText: string;
// };

const Cards = () => {
  return (
    <CardWrapper>
      <CardContent>
        {/* <img src="" alt="" /> */}
        <CardDetails>
          <CardTitle>
            <h4>PROJETO - COLLAB BINGO(OPEN SOURCE)</h4>
          </CardTitle>
          <CardButton>
            <LinkProject href="#">
              <AiOutlineLink />
            </LinkProject>
          </CardButton>
        </CardDetails>
      </CardContent>
    </CardWrapper>
  );
};

export default Cards;
