import styled from "styled-components";

export const MainDiv = styled.div<{ modalIsVisible: boolean }>`
  opacity: ${({ modalIsVisible }) => (modalIsVisible ? "20%" : "100%")};
`;

export const TitleLogo = styled.h2`
  font-size: 48px;
  margin-top: 8rem;
`;

export const Title = styled.h1`
  font-size: 64px;
  margin: 60px 0 60px 0;
`;

export const BigParagraph = styled.p`
  font-size: 31px;
  margin-bottom: 32px;
`;

export const SmallParagraph = styled.p`
  font-size: 15px;
  text-align: center;
`;

export const DivContainer = styled.div`
  display: flex;
  color: #fff;
  align-items: center;
  justify-content: space-between;
`;

export const LineDisplay = styled.div`
  max-width: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 8px 0 24px 0;
`;

export const Line = styled.div`
  border-bottom: 1px solid #2f3336;
  max-width: 130px;
  width: 100%;
`;

export const ModalLogin = styled.form`
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
  display: flex;
  flex-direction: column;
  color: #fff;
  z-index: 10;

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

export const ModalLoginButton = styled.button<{ isDisabled: boolean }>`
  height: 50px;
  max-width: 440px;
  width: 100%;
  margin: 0 auto;
  font-size: 15px;
  font-weight: bold;
  border: none;
  border-radius: 15px;
  color: ${({ isDisabled }) => (isDisabled ? "#000" : "#fff")};
  background-color: ${({ isDisabled }) => (isDisabled ? "#2f3336" : "#1D9BF0")};
  cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "pointer")};
`;
