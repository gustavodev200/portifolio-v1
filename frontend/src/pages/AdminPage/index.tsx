import Input from "../../components/Form/Input";
import GlobalStyle from "../../styles/globalStyles";
import { useForm } from "react-hook-form";
import { Container } from "../../styles/styles";
import pixelToRem from "../../utils/pxToRem";
import {
  AdminForm,
  AdminHeader,
  AdminLogo,
  AdminMain,
  AdminPageWrapper,
} from "./style";
import ButtonSubmit from "../../components/Form/ButtonSubmit";

import page_admin from "../../assets/images/page_admin.svg";

const AdminPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <>
      <GlobalStyle />
      <Container flex="column" margin={pixelToRem(24, 112, 50)}>
        <AdminPageWrapper>
          <AdminLogo>
            <img src={page_admin} alt="Logo Admin" />
          </AdminLogo>
          <AdminForm>
            <AdminHeader>
              <h2>ENTRAR NA DASHBOARD</h2>
            </AdminHeader>
            <AdminMain>
              <form onSubmit={onSubmit}>
                <Input
                  type="email"
                  name="email"
                  placeholder="Digite seu e-mail"
                  register={register}
                />

                <Input
                  type="password"
                  name="password"
                  placeholder="Digite sua senha"
                  register={register}
                />
                <ButtonSubmit type="submit" text="ENTRAR" />
              </form>
            </AdminMain>
          </AdminForm>
        </AdminPageWrapper>
      </Container>
    </>
  );
};

export default AdminPage;
