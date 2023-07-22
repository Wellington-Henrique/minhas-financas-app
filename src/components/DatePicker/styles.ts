import styled, { css } from "styled-components";

interface ContainerProps {
    inLine: boolean
}

export const Container = styled.div<ContainerProps>`
    display: flex;
    align-items: center;
    
    input {
        height: 35px;
        padding: 5px;
        transition: ease-in 0.1s;
        border: none;
        border-bottom: 1px solid ${({ theme }) => theme.colors.gray300};

        &:focus {
            border-bottom: 1px solid ${({ theme }) => theme.colors.indigo};
            outline: none;
        }
    }

    ${({inLine}) =>  
        inLine ? 
        css`
            flex-direction: row;
            background-color: ${({ theme }) => theme.colors.gray800};
            padding: 0;
            
            border: 1px solid ${({ theme }) => theme.colors.gray700};
            border-radius: 4px;

            overflow: hidden;

            label {
                margin: 0 10px;
                gap: 0.4rem;
                margin-right: 0.4rem;
            }
        ` 
        : css`
            flex-direction: column;
            label {
                color: ${({ theme }) => theme.colors.gray900};
                background-color: none;
                border: none;
            }
        `
    }
`