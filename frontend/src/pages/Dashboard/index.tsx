import { BiMenu } from "react-icons/bi";
import InputFile from "../../components/Form/InputFile";
import { useForm } from "react-hook-form";
import logo from "../../assets/images/logo.svg";

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
import { NavLogo } from "../../components/layout/Navbar/styles";

const Dashboard = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <DashboardWrapper>
      <MenuMobileDash>
        <BiMenu color="#fff" fontSize={50} />
      </MenuMobileDash>
      <NavBarDashboard>
        <Profile>
          <NavLogo>
            <img src={logo} alt="Logo page" />
            <h1>GUSTAVO L.</h1>
          </NavLogo>
        </Profile>
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
