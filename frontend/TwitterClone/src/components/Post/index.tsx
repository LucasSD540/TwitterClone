import { useEffect, useState } from "react";
import people_icon from "../../assets/images/people_icon.png";
import delete_icon from "../../assets/images/delete_icon.png";
import * as S from "./styles";
import axiosInstance from "../axiosInstance";

interface PostProps {
  id: number;
  author: string;
  textContent: string;
  imageUrl?: string;
  loggedInUser: string;
  onDelete: (id: number) => void;
}

export const Post = ({
  id,
  author,
  textContent,
  imageUrl,
  loggedInUser,
  onDelete,
}: PostProps) => {
  const [isAuthor, setIsAuthor] = useState(false);

  useEffect(() => {
    setIsAuthor(author === loggedInUser);
  }, [author, loggedInUser]);

  const removePost = async () => {
    try {
      await axiosInstance.delete(`/posts/${id}/`);
      onDelete(id);
    } catch (error) {
      console.error("Erro ao deletar o post:", error);
    }
  };

  return (
    <S.PostDiv>
      <S.PostDivUserInfo>
        <div>
          <img src={people_icon} alt="Foto do usuário" />
          <p>{author}</p>
        </div>
        {isAuthor && (
          <S.RemoveBtn type="button" onClick={removePost}>
            <img src={delete_icon} alt="Ícone de lixeira" />
          </S.RemoveBtn>
        )}
      </S.PostDivUserInfo>
      <S.PostDivContent>
        <p>{textContent}</p>
        {imageUrl && <img src={imageUrl} alt="Imagem do Post" />}
      </S.PostDivContent>
    </S.PostDiv>
  );
};

export default Post;
