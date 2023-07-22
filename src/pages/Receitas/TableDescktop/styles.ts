import styled from 'styled-components';

export const Container = styled.table`
    color: ${({ theme }) => theme.colors.white};
    border-radius: 0.4rem;

    th {
        background-color: ${({ theme }) => theme.colors.gray800}
    }

    th, td {
        padding: 5px 10px;
    }

    th, tr {
        border: solid 1px ${({ theme }) => theme.colors.gray700};
    }
    
    .action {
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        div {
            border: none;
            padding: 6px;
            border-radius: 50%;
            transition: ease-in 0.1s;

            svg {
                cursor: pointer;
                font-size: 1.2rem;    
            }

            &:hover {
                background-color: ${({ theme }) => theme.colors.gray700};
            }
        }
    }
`