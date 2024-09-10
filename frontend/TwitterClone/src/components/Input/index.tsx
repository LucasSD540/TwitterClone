import * as S from "./styles";

export type Props = {
  place: string;
};

const Input = ({ place }: Props) => (
  <S.InputStyle type="text" placeholder={place} />
);

export default Input;
