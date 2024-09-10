import home_icon from "../../assets/images/home_icon.png";
import search_icon from "../../assets/images/search_icon.png";
import profile_icon from "../../assets/images/profile_icon.png";
import people_icon from "../../assets/images/people_icon.png";
import picture_icon from "../../assets/images/picture_icon.png";

import * as S from "./styles";
import { Btn } from "../../components/Button/styles";
import Post from "../../components/Post";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../components/axiosInstance";

const Home = () => {
  const [configModal, setConfigModal] = useState(false);
  const [userName, setUserName] = useState("");
  const [posts, setPosts] = useState<any[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<any[]>([]);
  const [postContent, setPostContent] = useState("");
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [search, setSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const response = await axiosInstance.get("/user/");
        setUserName(response.data.username);
      } catch (error) {
        console.error("Erro ao buscar nome do usuário:", error);
      }
    };

    const fetchPosts = async () => {
      try {
        const response = await axiosInstance.get("/posts/");
        setPosts(response.data);
        setFilteredPosts(response.data);
      } catch (error) {
        console.error("Erro ao buscar posts:", error);
      }
    };

    fetchUserName();
    fetchPosts();
  }, []);

  const handleSearchQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const filtered = posts.filter((post) =>
        post.text_content.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredPosts(filtered);
    }
  };

  const showConfigModal = () => {
    setConfigModal(true);
  };

  const closeConfigModal = () => {
    setConfigModal(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    navigate("/");
  };

  const handlePostContentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostContent(e.target.value);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const handlePostSubmit = async () => {
    if (postContent.trim() || selectedImage) {
      const formData = new FormData();
      formData.append("text_content", postContent);
      if (selectedImage) {
        formData.append("picture_content", selectedImage);
      }

      try {
        await axiosInstance.post("/posts/", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        const response = await axiosInstance.get("/posts/");
        setPosts(response.data);
        setFilteredPosts(response.data);
        setPostContent("");
        setSelectedImage(null);
      } catch (error) {
        console.error("Erro ao criar o post:", error);
      }
    }
  };

  const handleImageClick = () => {
    document.getElementById("imageInput")?.click();
  };

  const handlePostDelete = (postId: number) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
    setFilteredPosts((prevPosts) =>
      prevPosts.filter((post) => post.id !== postId)
    );
  };

  const handleFocusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const showHandleSearch = () => {
    setSearch(true);
  };

  const closeHandleSearch = () => {
    setSearch(false);
  };

  return (
    <>
      <S.Overlay search={search} onClick={closeHandleSearch} />
      <S.MainDiv className="container">
        {search && (
          <S.SearchInput
            type="text"
            placeholder="Search post"
            value={searchQuery}
            onChange={handleSearchQueryChange}
            onKeyDown={handleSearchSubmit}
          />
        )}
        <S.SidebarDiv>
          <h3>TwitterClone</h3>
          <S.IconDiv>
            <img src={home_icon} alt="Ícone de início" />
            <p>Home</p>
          </S.IconDiv>
          <S.IconDiv onClick={showHandleSearch}>
            <img src={search_icon} alt="Ícone de pesquisa" />
            <p>Search</p>
          </S.IconDiv>
          <S.IconDiv>
            <img src={profile_icon} alt="Ícone de perfil" />
            <p>Profile</p>
          </S.IconDiv>
          <Btn
            BtnColor="#1D9BF0"
            BtnHeight="50px"
            BtnWidth="220px"
            onClick={handleFocusInput}
          >
            Post
          </Btn>
          {configModal && (
            <S.ConfigModal
              onMouseEnter={showConfigModal}
              onMouseOut={closeConfigModal}
            >
              <button onMouseEnter={showConfigModal} onClick={handleLogout}>
                Fazer logout
              </button>
            </S.ConfigModal>
          )}
          <S.UserDiv>
            <div>
              <img src={people_icon} alt="Foto do usuário" />
              <p>{userName}</p>
            </div>
            <button onMouseEnter={showConfigModal}>...</button>
          </S.UserDiv>
        </S.SidebarDiv>
        <S.FeedDiv>
          <S.PostDiv>
            <img src={people_icon} alt="Foto do usuário" />
            <input
              ref={inputRef}
              type="text"
              placeholder="What is happening?!"
              value={postContent}
              onChange={handlePostContentChange}
            />
          </S.PostDiv>
          <S.BellowPostDiv>
            <img
              src={picture_icon}
              alt="Ícone de foto"
              onClick={handleImageClick}
            />
            <input
              type="file"
              id="imageInput"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
            <Btn
              BtnColor="#1D9BF0"
              BtnHeight="36px"
              BtnWidth="66px"
              onClick={handlePostSubmit}
            >
              Post
            </Btn>
          </S.BellowPostDiv>
          {filteredPosts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              author={post.author}
              textContent={post.text_content}
              imageUrl={post.picture_content}
              loggedInUser={userName}
              onDelete={handlePostDelete}
            />
          ))}
        </S.FeedDiv>
      </S.MainDiv>
    </>
  );
};

export default Home;
