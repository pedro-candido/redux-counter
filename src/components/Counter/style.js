import styled from 'styled-components';

export const CounterContainer = styled.div`
    font-size: 40px;
    color: #fff;
    display: flex;
    justify-content: center;
`

export const CounterStyle = styled.h1`
    opacity: ${({isClosed}) => isClosed === true ? 0 : 1}
`