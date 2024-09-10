import styled from "styled-components";

export const PostDiv = styled.div`
  width: 100%;
  color: #fff;
  margin-top: 8px;
  border-top: 1px solid #5f6368;
  border-bottom: 1px solid #5f6368;
`;

export const PostDivUserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0 16px 24px;

  img {
    margin-right: 24px;
  }

  div {
    display: flex;
    align-items: center;
  }
`;

export const PostDivContent = styled.div`
  padding: 0 0 24px 24px;

  p {
    margin-bottom: 36px;
  }

  img {
    max-width: 625px;
    width: 100%;
    height: 300px;
  }
`;

export const RemoveBtn = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;
