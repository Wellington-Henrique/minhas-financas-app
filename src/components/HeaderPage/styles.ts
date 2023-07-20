import styled from "styled-components";

export const Container = styled.header`
    height: 30px;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 1.5rem;

    background: ${({theme}) => theme.colors.gray900};

    span {
        font-size: 2rem;
        color: ${({theme}) => theme.colors.gray400};
        
        text-transform: uppercase;
        font-weight: 700;
    }
`