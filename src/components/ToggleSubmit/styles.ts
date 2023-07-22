import styled, { css } from "styled-components";

interface ContainerProps {
    isLoading: boolean
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    align-items: center;
    justify-content: center;

    ${({isLoading}) =>  
        isLoading ? 
        css`
            pointer-events: none;
            
            svg {
                animation: spin 1s linear infinite;
            }
        ` : css`pointer-events: initial;`
    }

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`