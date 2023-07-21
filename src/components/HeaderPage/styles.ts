import styled from "styled-components";

export const Container = styled.header`
    height: 50px;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 5px 10px;

    background: ${({theme}) => theme.colors.gray900};
    border-bottom: solid 1px ${({ theme }) => theme.colors.gray700};

    span {
        font-size: 1.6rem;
        color: ${({theme}) => theme.colors.gray400};
        
        text-transform: uppercase;
        font-weight: 700;
    }
`