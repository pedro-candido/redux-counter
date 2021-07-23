import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        background-color: #9c4ada;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }

    body {
        display: flex;
        justify-content: center;
    }
`

export const Container = styled.div`
    background-color: #9c4ada;
`