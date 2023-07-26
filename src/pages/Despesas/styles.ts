import styled from 'styled-components';

export const Container = styled.div`
    flex: 1;

    background: ${({theme}) => theme.colors.gray800};

    display: flex;
    flex-direction: column;

    .content {
        display: flex;
        flex-direction: column;

        flex: 1;

        margin: 5px;
        padding: 10px;
        background: ${({theme}) => theme.colors.gray900};
        
        border-radius: 5px;
        

        span {
            color: ${({theme}) => theme.colors.white};
        }
    }

    .search {
        display: flex;
        align-items: end;

        color: ${({theme}) => theme.colors.white};
        padding: 10px;

        border-bottom: 1px solid ${({ theme }) => theme.colors.gray700};
        margin-bottom: 10px;

        flex: 0;

        gap: 0.5rem;

        > div {
            display: flex;
            gap: 0.4rem;
        }

        label {
            color: ${({ theme }) => theme.colors.white};
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

    @media (max-width: 720px) {
        .search {
            align-items: center;
            flex-wrap: wrap;
        }

        .content {
            height: 100%;
        }

        .table-container {
            width: 100%;
        }

        .table-totals {
            flex-direction: column;
            width: 100%;
        }
    }
`