
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.2rem;
    
    p {
        margin: 0;
        padding: 0;
        color: ${({theme}) => theme.colors.white};
        font-size: 1.5rem;
        font-weight: 500;
    }
`