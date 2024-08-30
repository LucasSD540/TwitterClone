import { Btn } from "../../components/Button/styles";
import Input from "../../components/Input";
import * as S from "./styles";

const Login = () => {
  return (
    <S.MainDiv>
      <S.DivContainer className="container">
        <S.TitleLogo>TwitterClone</S.TitleLogo>
        <div>
          <S.Title>Acontecendo agora</S.Title>
          <S.BigParagraph>Inscreva-se hoje</S.BigParagraph>
          <Input place="Email ou usuário" />
          <Input place="Senha" />
          <Btn BtnColor="#1DF044">Entrar</Btn>
          <S.SmallParagraph>ou</S.SmallParagraph>
          <Btn BtnColor="#1D9BF0">Criar conta</Btn>
        </div>
      </S.DivContainer>
    </S.MainDiv>
  );
};

export default Login;
