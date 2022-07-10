import Form from "../../components/Form";
import Title from "../../components/Title";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <section>
      <Title firstText="CONTATO" secondText="GUSTAVO" />
      <div>
        {/* <Form type="text" name="username" placeholder="Nome" register="name" /> */}
      </div>
    </section>
  );
};

export default Contact;
