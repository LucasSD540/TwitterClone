import people_icon from "../../assets/images/people_icon.png";
import * as S from "./styles";

export const Post = () => {
  return (
    <S.PostDiv>
      <S.PostDivUserInfo>
        <img src={people_icon} alt="Foto do usuário" />
        <p>Nome do usuário</p>
      </S.PostDivUserInfo>
      <S.PostDivContent>
        <p>id eget vitae nec nibh vitae elit ullamcorper non.</p>
        <img src="https://placehold.co/625x300" alt="Imagem do Post" />
      </S.PostDivContent>
    </S.PostDiv>
  );
};

export default Post;
