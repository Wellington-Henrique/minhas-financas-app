import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    
    display: flex;
    flex-direction: column;
    
    background: ${({theme}) => theme.colors.gray800};
    overflow: hidden;

    .content {
        padding: 5px;
        margin: 5px;

        height: 100%;
        
        display: flex;
        align-items: center;
        justify-content: center;

        flex-direction: column;
        
        border-radius: 5px;
        border: solid 1px ${({theme}) => theme.colors.gray700};
        
        background: ${({theme}) => theme.colors.gray900};
        
        overflow-y: auto;

        .session {
            width: 100%;

            padding: 10px;

            display: flex;
            flex-wrap: wrap;

            align-items: center;
            justify-content: center;

            gap: 0.5rem;

            > p {
                width: 100%;
                text-align: center;
                font-size: 1.2rem;
                font-weight: 700;
                color: white;
            }
        }
    }

    @media (max-width: 720px) {
        .content {
            justify-content: start;
        }
    }
`