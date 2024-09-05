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

export const Overlay = styled.div<{ modalIsVisible: boolean }>`
  display: ${({ modalIsVisible }) => (modalIsVisible ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;
