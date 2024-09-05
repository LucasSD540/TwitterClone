import * as S from "./styles";

export type Props = {
  BtnColor: string;
  BtnHeight: string;
  BtnWidth: string;
  children: React.ReactNode;
};

export const Button = ({ BtnColor, BtnHeight, BtnWidth, children }: Props) => (
  <S.Btn BtnColor={BtnColor} BtnHeight={BtnHeight} BtnWidth={BtnWidth}>
    {children}
  </S.Btn>
);

export default Button;
