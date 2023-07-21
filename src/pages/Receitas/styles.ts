import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;

    background: ${({theme}) => theme.colors.gray800};

    display: flex;
    flex-direction: column;
    
    .content {
        display: flex;
        flex-direction: column;

        margin: 5px;
        padding: 10px;
        background: ${({theme}) => theme.colors.gray900};
        
        border-radius: 5px;
        flex: 1;

        span {
            color: ${({theme}) => theme.colors.white};
        }
    }

    .search {
        display: flex;
        align-items: end;
        justify-content: space-between;

        color: ${({theme}) => theme.colors.white};
        padding: 10px 0px;

        border-bottom: 1px solid ${({ theme }) => theme.colors.gray700};
        margin-bottom: 10px;

        flex: 0;

        input {
            padding: 5px 10px;
            color: ${({theme}) => theme.colors.white};
            background-color: ${({theme}) => theme.colors.gray800};
            border: solid 1px ${({theme}) => theme.colors.gray700};
            border-radius: var(--bs-border-radius);
        }
    }

    .table-container {
        margin: 0 auto;
        width: 70%;

        overflow-y: auto;

        flex: 1;

        > h5 {
            font-size: 0.8rem;
            margin-bottom: 10px;
            color: ${({theme}) => theme.colors.white}
        }
    }

    .table-totals {
        margin: 0 auto;
        width: 70%;
        
        display: flex;
        justify-content: space-between;
        gap: 0.8rem;
        
        background-color: ${({theme}) => theme.colors.gray800};
        border-radius: 4px;
        padding: 10px;

        flex: 0;
    }
`