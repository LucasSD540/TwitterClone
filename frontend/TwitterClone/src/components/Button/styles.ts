import styled from "styled-components";

export const Btn = styled.button<{ BtnColor: string }>`
  max-width: 300px;
  width: 100%;
  height: 40px;
  font-size: 15px;
  font-weight: bold;
  background-color: ${(props) => props.BtnColor};
  color: #fff;
  border: none;
  border-radius: 15px;
  cursor: pointer;
`;
