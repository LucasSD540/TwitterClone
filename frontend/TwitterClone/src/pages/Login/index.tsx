import { Btn } from "../../components/Button/styles";
import * as S from "./styles";
import { useState } from "react";
import { fetchToken } from "../../components/axiosInstance";
import Modal from "../../components/Modal";
import { Field, Form, Formik } from "formik";
import { InputStyle } from "../../components/Input/styles";

const Login = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const showModal = () => {
    setModalIsVisible(true);
  };

  const closeModal = () => {
    setModalIsVisible(false);
  };

  const handleLogin = async (
    values: { username: string; password: string },
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    try {
      await fetchToken(values.username, values.password);
      alert("Login bem-sucedido!");
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("Erro ao fazer login.");
    }
    setSubmitting(false);
  };

  return (
    <>
      {modalIsVisible && <Modal closeModal={closeModal} />}
      <S.Overlay modalIsVisible={modalIsVisible} onClick={closeModal} />
      <S.MainDiv modalIsVisible={modalIsVisible}>
        <S.DivContainer className="container">
          <S.TitleLogo>TwitterClone</S.TitleLogo>
          <div>
            <S.Title>Acontecendo agora</S.Title>
            <S.BigParagraph>Inscreva-se hoje</S.BigParagraph>
            <Formik
              initialValues={{
                username: "",
                password: "",
              }}
              onSubmit={handleLogin}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Field
                    name="username"
                    placeholder="Nome de usuário"
                    as={InputStyle}
                  />
                  <Field
                    name="password"
                    type="password"
                    placeholder="Senha"
                    as={InputStyle}
                  />
                  <Btn
                    BtnColor="#1DF044"
                    BtnHeight="40px"
                    BtnWidth="300px"
                    type="submit"
                  >
                    {isSubmitting ? "Entrando..." : "Entrar"}
                  </Btn>
                </Form>
              )}
            </Formik>
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
    </>
  );
};

export default Login;
