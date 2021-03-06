import Title from "../../components/Title";
import { FieldValues, useForm, UseFormRegister } from "react-hook-form";
import Input from "../../components/Form/Input";
import ButtonSubmit from "../../components/Form/ButtonSubmit";
import TextArea from "../../components/Form/TextArea";
import { ContactForm, ContactWrapper } from "./styles";
import { useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const { register, handleSubmit } = useForm();
  const [sendEmail, setSendEmail] = useState<any[]>([]);

  const onSubmit = handleSubmit((data: any) => {
    toast.warn("Esse formulário ainda não está disponível!");
    setSendEmail(data);
  });

  return (
    <ContactWrapper id="contact">
      <Title firstText="CONTATO" secondText="GUSTAVO" />
      <ContactForm onSubmit={onSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Digite seu nome"
          register={register}
        />

        <Input
          type="email"
          name="email"
          placeholder="Digite seu e-mail"
          register={register}
        />

        <TextArea
          name="description"
          placeholder="O que deseja?"
          register={register}
        />

        <ButtonSubmit type="submit" text="ENVIAR" />
      </ContactForm>
    </ContactWrapper>
  );
};

export default Contact;
