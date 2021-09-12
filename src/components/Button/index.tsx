import { ButtonStyled } from "./style";
import { ButtonProps } from "./types";

export const Button = ({ children, ...rest }: ButtonProps): JSX.Element => (
  <ButtonStyled {...rest}>{children}</ButtonStyled>
);
