import { ButtonStyled } from './style'

export const Button = ({children, ...rest}) => {
    return (
        <ButtonStyled {...rest}>
            { children }
        </ButtonStyled>
    )
}