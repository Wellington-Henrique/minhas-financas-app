import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: 100vw;
    height: 100vh;

    gap: 2.5rem;

    nav {
        display: flex;
        align-items: center;
        justify-content: end;
        padding: 0 20px;

        width: 100%;
        height: 50px;
        background-color: ${({theme}) => theme.colors.gray800};
        border: solid 1px ${({theme}) => theme.colors.gray700};

        ul {
            margin: 0;
            
            li {
                color: ${({theme}) => theme.colors.white};
                border-radius: 4px;
                transition: 0.3s;

                padding: 5px 10px;
                cursor: pointer;

                &:hover {
                    background-color: ${({theme}) => theme.colors.gray700};
                }
            }
        }
    }

    > div {
        display: flex;
        align-items: center;
        justify-content: center;

        gap: 3rem;
        flex: 1;
        
        > div {
            display: flex;
            flex-direction: column;
            justify-content: center;

            width: 30%;
            height: 550px;

            background-color: ${({theme}) => theme.colors.gray800};
            border: solid 1px ${({theme}) => theme.colors.gray700};
            border-radius: 15px;

            padding: 20px;

            > div {
                display: flex;
                gap: 2rem;

                svg {
                    font-size: 5rem;
                }

                > div {
                    display: flex;
                    flex-direction: column;

                    h1 {
                        font-size: 1.2rem;
                        color: ${({theme}) => theme.colors.white};
                        margin-bottom: 20px;
                    }

                    p {
                        font-size: 0.8;
                        color: ${({theme}) => theme.colors.white};
                    }
                }
            }
        }

        form {
            display: flex;
            flex-direction: column;
    
            justify-content: center;
    
            width: 20%;
            height: 300px;
    
            padding: 10px 20px;
            margin: 10px;
    
            background-color: ${({theme}) => theme.colors.gray800};
            border: solid 1px ${({theme}) => theme.colors.gray700};
            border-radius: 15px;
    
            gap: 0.5rem;
    
            label, a {
                color: ${({theme}) => theme.colors.white};
            }
    
            input {
                border-radius: 4px;
                background-color: ${({theme}) => theme.colors.gray700};
            }
    
            button {
                width: 100%;
                color: ${({theme}) => theme.colors.gray500};
                background-color: ${({theme}) => theme.colors.gray900};
                border-radius: 4px;
                border: none;
    
                padding: 10px 20px;
    
                transition: ease-in 0.3s;
    
                &:hover {
                    color: ${({theme}) => theme.colors.white};
                    background-color: ${({theme}) => theme.colors.gray700};
                }
            }
        }
    }

`