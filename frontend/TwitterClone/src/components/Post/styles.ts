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
  padding: 24px 0 16px 24px;

  img {
    margin-right: 12px;
  }
`;

export const PostDivContent = styled.div`
  padding: 0 0 24px 24px;

  p {
    margin-bottom: 36px;
  }
`;
