import styled, { css } from "styled-components";

interface ContainerProps {
    isLoading: boolean
}

export const Container = styled.div<ContainerProps>`
    button {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.4rem;

        ${({isLoading}) =>  
            isLoading ? css`pointer-events: none;` : css`pointer-events: initial;`
        }

        svg {
            animation: spin 1s linear infinite;
        }

        @keyframes spin {
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        }
    }
`