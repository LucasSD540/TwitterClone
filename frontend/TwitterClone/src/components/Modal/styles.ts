import styled from "styled-components";

export const ModalLogin = styled.div<{ modalIsVisible: boolean }>`
  display: ${({ modalIsVisible }) => (modalIsVisible ? "flex" : "none")};
  max-width: 630px;
  width: 100%;
  height: 500px;
  background-color: #000;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  border: 1px solid #2f3336;
  padding: 35px;
  flex-direction: column;
  color: #fff;
  z-index: 1000;
  
  form {
    text-align: center;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;

    button {
      background: none;
      border: none;
      cursor: pointer;
      max-width: 30px;
      width: 100%;
      height: 30px;
      margin: 0;
    }

    h3 {
      font-size: 30px;
    }
  }

  p {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 24px;
  }
}
`;

export const StyledInput = styled.input`
  font-size: 15px;
  font-weight: bold;
  max-width: 435px;
  width: 100%;
  height: 40px;
  background-color: #000;
  border: 1px solid #2f3336;
  border-radius: 5px;
  margin: 0 auto 20px auto;
  padding-left: 24px;
  color: #fff;
`;

export const ModalLoginButton = styled.button`
  height: 50px;
  max-width: 440px;
  width: 100%;
  margin: 0 auto;
  font-size: 15px;
  font-weight: bold;
  border: none;
  border-radius: 15px;
  color: ${({ disabled }) => (disabled ? "#000" : "#fff")};
  background-color: ${({ disabled }) => (disabled ? "#2f3336" : "#1D9BF0")};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;
