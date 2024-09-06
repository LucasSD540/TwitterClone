import people_icon from "../../assets/images/people_icon.png";
import * as S from "./styles";

interface PostProps {
  author: string;
  textContent: string;
  imageUrl?: string;
}

export const Post = ({ author, textContent, imageUrl }: PostProps) => {
  return (
    <S.PostDiv>
      <S.PostDivUserInfo>
        <img src={people_icon} alt="Foto do usuário" />
        <p>{author}</p>
      </S.PostDivUserInfo>
      <S.PostDivContent>
        <p>{textContent}</p>
        {imageUrl && <img src={imageUrl} alt="Imagem do Post" />}
      </S.PostDivContent>
    </S.PostDiv>
  );
};

export default Post;
