import { useSelector } from 'react-redux'
import { CounterContainer, CounterStyle } from './style'

export const Counter = () => {
    const { contador, modal } = useSelector(state => state);

    return (
        <CounterContainer>
            <CounterStyle isClosed={modal.isClosed}>
                { contador.total }
            </CounterStyle>
        </CounterContainer>
    )
}
