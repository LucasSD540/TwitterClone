import * as S from "./styles";

export type Props = {
  BtnName: string;
  BtnColor: string;
};

export const Button = ({ BtnName, BtnColor }: Props) => (
  <S.Btn BtnColor={BtnColor}>{BtnName}</S.Btn>
);

export default Button;
