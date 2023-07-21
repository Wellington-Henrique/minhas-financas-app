import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    
    label {
        color: ${({ theme }) => theme.colors.gray900};
    }

    select {
        height: 35px;
        padding: 5px 10px;
        transition: ease-in 0.1s;
        border: none;
        border-bottom: 1px solid ${({ theme }) => theme.colors.gray300};

        &:focus {
            border-bottom: 1px solid ${({ theme }) => theme.colors.indigo};
            outline: none;
        }
    }
`