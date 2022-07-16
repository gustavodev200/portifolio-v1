import { BiMenu } from "react-icons/bi";
import InputFile from "../../components/Form/InputFile";
import { FieldValues, useForm } from "react-hook-form";
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
import useAuth from "../../utils/authUser";
import { ChangeEvent, useState } from "react";

type ImageUpload = {
  preview: string;
  raw: any;
};

const Dashboard = () => {
  const [image, setImage] = useState({} as ImageUpload);
  const { register, handleSubmit } = useForm<FieldValues>();
  const { projectsAdd } = useAuth();

  const handleInputFile = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const file = target.files?.[0];
    if (file) {
      setImage({ preview: URL.createObjectURL(file), raw: file });
    } else {
      return null;
    }
  };

  const onSubmit = handleSubmit(async (data) => {
    const formData = new FormData();

    formData.append("image", image.raw);
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("tag", data.tag);
    formData.append("link", data.link);
    projectsAdd(formData);
  });

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
            name="image"
            placeholder="Esolha um arquivo"
            register={register}
            onChange={handleInputFile}
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

          <Input
            type="text"
            name="link"
            placeholder="LINK DO SITE AQUI..."
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
