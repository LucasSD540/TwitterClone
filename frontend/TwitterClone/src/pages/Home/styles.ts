import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  border-right: 1px solid #5f6368;
`;

export const SidebarDiv = styled.div`
  max-width: 285px;
  width: 100%;
  background-color: #000;
  color: #fff;
  padding-top: 80px;
  border-right: 1px solid #5f6368;

  h3 {
    font-size: 32px;
    margin-bottom: 24px;
  }
`;

export const IconDiv = styled.div`
  display: flex;
  margin-bottom: 24px;
  cursor: pointer;

  img {
    margin-right: 20px;
  }
`;

export const UserDiv = styled.div`
  max-width: 225px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 18rem;

  div {
    display: flex;
    align-items: center;

    img {
      margin-right: 16px;
    }
  }

  p {
    font-size: 15px;
    font-weight: bold;
  }

  button {
    background-color: #000;
    color: #fff;
    border: none;
    cursor: pointer;
  }
`;

export const ConfigModal = styled.div`
  position: absolute;
  margin-top: 14rem;
  margin-left: 108px;
  max-width: 120px;
  width: 100%;
  height: 70px;
  background-color: #5f6368;
  padding: 8px;
  border-radius: 15px;

  button {
    background-color: #5f6368;
    color: #fff;
    font-size: 15px;
    border: none;
    cursor: pointer;
  }
`;

export const FeedDiv = styled.div`
  width: 100%;
`;

export const PostDiv = styled.div`
  display: flex;
  align-items: center;
  max-width: 630px;
  width: 100%;
  padding: 35px 35px 48px 35px;
  border-bottom: 1px solid #5f6368;
  margin: 0 auto;

  img {
    margin-right: 24px;
  }

  input {
    color: #fff;
    background-color: #000;
    border: none;
    font-size: 24px;
    font-weight: bold;
    width: 100%;
  }
`;

export const BellowPostDiv = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 4px 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #5f6368;

  img {
    cursor: pointer;
  }
`;

export const Overlay = styled.div<{ search: boolean }>`
  display: ${({ search }) => (search ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const SearchInput = styled.input`
  position: fixed;
  max-width: 630px;
  width: 100%;
  height: 60px;
  top: 32px;
  left: 50%;
  transform: translate(-50%);
  border-radius: 30px;
  border: none;
  color: #5f6368;
  background-color: #2f3336;
  padding-left: 48px;
  font-size: 20px;
  font-weight: bold;
  z-index: 1000;
`;
