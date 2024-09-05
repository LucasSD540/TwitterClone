import { Btn } from "../../components/Button/styles";
import Input from "../../components/Input";
import * as S from "./styles";
import { useState } from "react";
// import { fetchToken } from "../../components/axiosInstance";
import Modal from "../../components/Modal";

const Login = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const showModal = () => {
    setModalIsVisible(true);
  };

  const closeModal = () => {
    setModalIsVisible(false);
  };

  /* const handleLogin = async (username: string, password: string) => {
    try {
      await fetchToken(username, password);
      alert("Login bem-sucedido!");
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert("Erro ao fazer login.");
    }
  }; */

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
    </>
  );
};

export default Login;
