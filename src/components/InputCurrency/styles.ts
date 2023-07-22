import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    label {
        color: ${({ theme }) => theme.colors.gray900};
    }

    input {
        height: 35px;
        padding: 5px 10px;
        transition: ease-in 0.1s;
        border: none;
        border-bottom: 1px solid ${({ theme }) => theme.colors.gray300};
        text-align: end;

        &:focus {
            border-bottom: 1px solid ${({ theme }) => theme.colors.indigo};
            outline: none;
        }
    }
`