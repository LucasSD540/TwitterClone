import * as S from "./styles";

export type Props = {
  BtnColor: string;
  BtnHeight: string;
  BtnWidth: string;
};

export const Button = ({ BtnColor, BtnHeight, BtnWidth }: Props) => (
  <S.Btn BtnColor={BtnColor} BtnHeight={BtnHeight} BtnWidth={BtnWidth}></S.Btn>
);

export default Button;
