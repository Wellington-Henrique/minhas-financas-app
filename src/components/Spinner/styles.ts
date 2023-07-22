import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    flex: 1;

    .spinner {
        margin: 0 auto;
        width: 120px;

        display: flex;
        align-items: center;
        justify-content: center;

        padding: 10px;
    }

    .spinner > div {
        width: 24px;
        height: 24px;
        background-color: ${({ theme }) => theme.colors.gray600};

        border-radius: 100%;
        display: inline-block;
        -webkit-animation: sk-bounce 1.4s ease-in-out 0s infinite both;
        animation: sk-bounce 1.4s ease-in-out 0s infinite both;
    }

    .spinner .spinner__bounce1 {
        -webkit-animation-delay: -0.32s;
        animation-delay: -0.32s;
    }

    .spinner .spinner__bounce2 {
        -webkit-animation-delay: -0.16s;
        animation-delay: -0.16s;
    }

    @-webkit-keyframes sk-bounce {
        0%, 80%, 100% { -webkit-transform: scale(0) }
        40% { -webkit-transform: scale(1.0) }
    }

    @keyframes sk-bounce {
        0%, 80%, 100% { 
            -webkit-transform: scale(0);
            transform: scale(0);
        } 40% { 
            -webkit-transform: scale(1.0);
            transform: scale(1.0);
        }
    }
`