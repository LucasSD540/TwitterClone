import home_icon from "../../assets/images/home_icon.png";
import search_icon from "../../assets/images/search_icon.png";
import profile_icon from "../../assets/images/profile_icon.png";
import people_icon from "../../assets/images/people_icon.png";
import picture_icon from "../../assets/images/picture_icon.png";

import * as S from "./styles";
import { Btn } from "../../components/Button/styles";
import Post from "../../components/Post";
import { useState } from "react";

const Home = () => {
  const [configModal, setConfigModal] = useState(false);

  const showConfigModal = () => {
    setConfigModal(true);
  };

  const closeConfigModal = () => {
    setConfigModal(false);
  };

  return (
    <S.MainDiv className="container">
      <S.SidebarDiv>
        <h3>TwitterClone</h3>
        <S.IconDiv>
          <img src={home_icon} alt="Ícone de início" />
          <p>Home</p>
        </S.IconDiv>
        <S.IconDiv>
          <img src={search_icon} alt="Ícone de pesquisa" />
          <p>Search</p>
        </S.IconDiv>
        <S.IconDiv>
          <img src={profile_icon} alt="Ícone de perfil" />
          <p>Profile</p>
        </S.IconDiv>
        <Btn BtnColor="#1D9BF0" BtnHeight="50px" BtnWidth="220px">
          Post
        </Btn>
        {configModal ? (
          <S.ConfigModal
            onMouseEnter={showConfigModal}
            onMouseOut={closeConfigModal}
          >
            <button onMouseEnter={showConfigModal}>Fazer logout</button>
          </S.ConfigModal>
        ) : (
          <></>
        )}
        <S.UserDiv>
          <div>
            <img src={people_icon} alt="Foto do usuário" />
            <p>Nome usuário</p>
          </div>
          <button onMouseEnter={showConfigModal}>...</button>
        </S.UserDiv>
      </S.SidebarDiv>
      <S.FeedDiv>
        <S.PostDiv>
          <img src={people_icon} alt="Foto do usuário" />
          <input type="text" placeholder="What is happening?!" />
        </S.PostDiv>
        <S.BellowPostDiv>
          <img src={picture_icon} alt="Ícone de foto" />
          <Btn BtnColor="#1D9BF0" BtnHeight="36px" BtnWidth="66px">
            Post
          </Btn>
        </S.BellowPostDiv>
        <Post />
        <Post />
      </S.FeedDiv>
    </S.MainDiv>
  );
};

export default Home;
