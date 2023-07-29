import styled, { css } from "styled-components";

interface ContainerProps {
    isIncome: boolean
}

export const Container = styled.div<ContainerProps>`
    width: 350px;
    height: 200px;

    display: flex;
    align-items: center;
    justify-content: center;

    a {
        width: 95%;
        height: 95%;

        display: flex;
        align-items: center;
        justify-content: center;

        flex-direction: column;
        padding: 10px;

        border-radius: 4px;
        border: solid 1px ${({ theme }) => theme.colors.gray700};

        background-color: ${({ theme }) => theme.colors.gray800};

        transition: ease-in 0.1s;

        &:hover {
            width: 100%;
            height: 100%;
            background-color: ${({ theme }) => theme.colors.gray700};
    
            div:last-child {
                span {
                    font-size: 2.5rem;
        
                    ${({isIncome}) =>  
                        isIncome ? 
                        css`color: ${({ theme }) => theme.colors.success};`
                        : css`color: ${({ theme }) => theme.colors.red};`
                    }   
                }
            }
        }

        > div {
            display: flex;
            justify-content: center;
    
            span {
                font-size: 1.4rem;
                font-weight: 700;
                color: ${({ theme }) => theme.colors.white};
            }
        }
    
        div:last-child {
            span {
                font-size: 2rem;
                transition: ease-in 0.1s;

                ${({isIncome}) =>  
                    isIncome ? 
                    css`color: ${({ theme }) => theme.colors.success};`
                    : css`color: ${({ theme }) => theme.colors.red};`
                }   
            }
        }
    }
    
`