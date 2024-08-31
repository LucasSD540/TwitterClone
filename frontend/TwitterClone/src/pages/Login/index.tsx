import { Btn } from "../../components/Button/styles";
import Input from "../../components/Input";
import * as S from "./styles";
import close_icon from "../../assets/images/close_icon.png";
import { useEffect, useState } from "react";

const Login = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  const showModal = () => {
    setModalIsVisible(true);
  };

  const closeModal = () => {
    setModalIsVisible(false);
  };

  useEffect(() => {
    if (username && email && password && confirmPassword) {
      setIsBtnDisabled(false);
    } else {
      setIsBtnDisabled(true);
    }
  }, [username, email, password, confirmPassword]);

  return (
    <>
      {modalIsVisible ? (
        <>
          <S.ModaLogin>
            <div>
              <button onClick={closeModal}>
                <img src={close_icon} alt="Ícone de fechar" />
              </button>
              <h3>TwitterClone</h3>
              <span></span>
            </div>
            <p>Criar sua conta</p>
            <input
              type="text"
              placeholder="Nome de usuário"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Confirmar senha"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <S.ModaLoginButton isDisabled={isBtnDisabled}>
              Avançar
            </S.ModaLoginButton>
          </S.ModaLogin>
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
