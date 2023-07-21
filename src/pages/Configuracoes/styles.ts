import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;

    background: ${({theme}) => theme.colors.gray800};

    display: flex;
    flex-direction: column;
    
    > div {
        margin: 5px;
        padding: 10px;
        background: ${({theme}) => theme.colors.gray900};
        
        border-radius: 5px;
        flex: 1;

        h5 {
            color: ${({theme}) => theme.colors.white};
        }
    }
`