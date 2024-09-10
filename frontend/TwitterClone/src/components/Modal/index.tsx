import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import close_icon from "../../assets/images/close_icon.png";
import axios from "axios";
import * as S from "./styles";

interface ModalProps {
  closeModal: () => void;
}

export const Modal = ({ closeModal }: ModalProps) => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Nome é obrigatório"),
    username: Yup.string()
      .min(4, "Nome de usuário deve ter no mínimo 4 caracteres")
      .required("Nome de usuário é obrigatório"),
    email: Yup.string().email("Email inválido").required("Email é obrigatório"),
    password: Yup.string()
      .min(8, "A senha deve ter no mínimo 8 caracteres")
      .required("Senha é obrigatória"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "As senhas não coincidem")
      .required("Confirmação de senha é obrigatória"),
  });

  interface FormValues {
    name: string;
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
  }

  const handleSubmit = async (
    values: FormValues,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    try {
      const response = await axios.post("api/user/", {
        name: values.name,
        username: values.username,
        email: values.email,
        password: values.password,
      });

      if (response.status === 201) {
        closeModal();
      } else {
        alert("Erro ao criar usuário: " + response.data.detail);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(
          "Erro ao criar usuário: " +
            (error.response?.data?.detail || "Erro desconhecido")
        );
      } else {
        console.error("Erro na requisição:", error);
        alert("Erro ao conectar ao servidor.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <S.ModalLogin modalIsVisible>
      <div>
        <button onClick={closeModal}>
          <img src={close_icon} alt="Ícone de fechar" />
        </button>
        <h3>TwitterClone</h3>
        <span></span>
      </div>
      <p>Criar sua conta</p>
      <Formik
        initialValues={{
          name: "",
          username: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        validateOnChange={true}
        validateOnBlur={true}
        validateOnMount={true}
      >
        {({ isSubmitting, isValid }) => (
          <Form>
            <Field name="name" placeholder="Seu nome" as={S.StyledInput} />
            <ErrorMessage name="name" component="div" />

            <Field
              name="username"
              placeholder="Nome de usuário"
              as={S.StyledInput}
            />
            <ErrorMessage name="username" component="div" />

            <Field
              name="email"
              placeholder="Email"
              type="email"
              as={S.StyledInput}
            />
            <ErrorMessage name="email" component="div" />

            <Field
              name="password"
              placeholder="Senha"
              type="password"
              as={S.StyledInput}
            />
            <ErrorMessage name="password" component="div" />

            <Field
              name="confirmPassword"
              placeholder="Confirmar senha"
              type="password"
              as={S.StyledInput}
            />
            <ErrorMessage name="confirmPassword" component="div" />

            <S.ModalLoginButton
              type="submit"
              disabled={!isValid || isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar"}
            </S.ModalLoginButton>
          </Form>
        )}
      </Formik>
    </S.ModalLogin>
  );
};

export default Modal;
