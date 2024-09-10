import styled from "styled-components";

export const Btn = styled.button<{
  BtnColor: string;
  BtnHeight: string;
  BtnWidth: string;
}>`
  max-width: ${(props) => props.BtnWidth};
  width: 100%;
  height: ${(props) => props.BtnHeight};
  font-size: 15px;
  font-weight: bold;
  background-color: ${(props) => props.BtnColor};
  color: #fff;
  border: none;
  border-radius: 15px;
  cursor: pointer;
`;
