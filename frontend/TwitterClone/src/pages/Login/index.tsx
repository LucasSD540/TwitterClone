import { Btn } from "../../components/Button/styles";
import Input from "../../components/Input";
import * as S from "./styles";
import close_icon from "../../assets/images/close_icon.png";
import { useState } from "react";
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";

const Login = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const showModal = () => {
    setModalIsVisible(true);
  };

  const closeModal = () => {
    setModalIsVisible(false);
  };

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
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          username: values.username,
          email: values.email,
          password: values.password,
        }),
      });

      if (response.ok) {
        alert("Usuário criado com sucesso!");
      } else {
        const error = await response.json();
        alert("Erro ao criar usuário: " + error.detail);
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {modalIsVisible ? (
        <>
          <S.ModalLogin>
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
            >
              {({ isSubmitting, validateForm, setFieldValue }) => {
                const updateButtonState = async () => {
                  const validationErrors = await validateForm();
                  setIsButtonDisabled(
                    Object.keys(validationErrors).length > 0 || isSubmitting
                  );
                };

                return (
                  <Form>
                    <Field
                      name="name"
                      placeholder="Seu nome"
                      as={S.StyledInput}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setFieldValue("name", e.target.value);
                        updateButtonState();
                      }}
                      onBlur={() => updateButtonState()}
                    />
                    <ErrorMessage name="name" component="div" />

                    <Field
                      name="username"
                      placeholder="Nome de usuário"
                      as={S.StyledInput}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setFieldValue("username", e.target.value);
                        updateButtonState();
                      }}
                      onBlur={() => updateButtonState()}
                    />
                    <ErrorMessage name="username" component="div" />

                    <Field
                      name="email"
                      placeholder="Email"
                      type="email"
                      as={S.StyledInput}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setFieldValue("email", e.target.value);
                        updateButtonState();
                      }}
                      onBlur={() => updateButtonState()}
                    />
                    <ErrorMessage name="email" component="div" />

                    <Field
                      name="password"
                      placeholder="Senha"
                      type="password"
                      as={S.StyledInput}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setFieldValue("password", e.target.value);
                        updateButtonState();
                      }}
                      onBlur={() => updateButtonState()}
                    />
                    <ErrorMessage name="password" component="div" />

                    <Field
                      name="confirmPassword"
                      placeholder="Confirmar senha"
                      type="password"
                      as={S.StyledInput}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setFieldValue("confirmPassword", e.target.value);
                        updateButtonState();
                      }}
                      onBlur={() => updateButtonState()}
                    />
                    <ErrorMessage name="confirmPassword" component="div" />

                    <S.ModalLoginButton
                      type="submit"
                      isDisabled={isButtonDisabled}
                      disabled={isButtonDisabled}
                    >
                      {isSubmitting ? "Enviando..." : "Avançar"}
                    </S.ModalLoginButton>
                  </Form>
                );
              }}
            </Formik>
          </S.ModalLogin>
        </>
      ) : (
        <S.MainDiv modalIsVisible={modalIsVisible}>
          <S.DivContainer className="container">
            <S.TitleLogo>TwitterClone</S.TitleLogo>
            <div>
              <S.Title>Acontecendo agora</S.Title>
              <S.BigParagraph>Inscreva-se hoje</S.BigParagraph>
              <Input place="Email ou usuário" />
              <Input place="Senha" />
              <Btn BtnHeight="40px" BtnWidth="300px" BtnColor="#1DF044">
                Entrar
              </Btn>
              <S.LineDisplay>
                <S.Line></S.Line>
                <S.SmallParagraph>ou</S.SmallParagraph>
                <S.Line></S.Line>
              </S.LineDisplay>
              <Btn
                onClick={showModal}
                BtnHeight="40px"
                BtnWidth="300px"
                BtnColor="#1D9BF0"
              >
                Criar conta
              </Btn>
            </div>
          </S.DivContainer>
        </S.MainDiv>
      )}
    </>
  );
};

export default Login;
