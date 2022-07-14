import { BiMenu } from "react-icons/bi";
import InputFile from "../../components/Form/InputFile";
import { useForm } from "react-hook-form";

import {
  ButtonStyles,
  DashboardWrapper,
  FormDashboard,
  MainDashboard,
  MenuMobileDash,
  NavBarDashboard,
  NavgationDash,
  Profile,
  TitleDash,
} from "./style";
import Input from "../../components/Form/Input";
import TextArea from "../../components/Form/TextArea";
import ButtonSubmit from "../../components/Form/ButtonSubmit";

const Dashboard = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <DashboardWrapper>
      <MenuMobileDash>
        <BiMenu color="#fff" fontSize={50} />
      </MenuMobileDash>
      <NavBarDashboard>
        <Profile></Profile>
        <NavgationDash></NavgationDash>
      </NavBarDashboard>

      <MainDashboard>
        <TitleDash>
          <h4>ADICIONAR NOVO PROJETO</h4>
        </TitleDash>
        <FormDashboard onSubmit={onSubmit}>
          <InputFile
            type="file"
            name="file"
            placeholder="Esolha um arquivo"
            register={register}
          />
          <Input
            type="text"
            name="title"
            placeholder="DIGITE O TÍTULO DO PROJETO"
            register={register}
          />
          <Input
            type="text"
            name="tag"
            placeholder="DIGITE A TAG"
            register={register}
          />

          <TextArea
            name="description"
            placeholder="DESCRIÇÃO DO PROJETO"
            register={register}
          />

          <ButtonStyles>
            <ButtonSubmit type="submit" text="ADICIONAR" />
          </ButtonStyles>
        </FormDashboard>
      </MainDashboard>
    </DashboardWrapper>
  );
};

export default Dashboard;
