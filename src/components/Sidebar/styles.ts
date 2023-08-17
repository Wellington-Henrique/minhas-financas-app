import styled, { css } from 'styled-components'

interface ContainerProps {
    isMenuOpen: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 1px ${({ theme }) => theme.colors.gray700};
  z-index: 999;
  
  button {
    background: none;
    border: none;
    width: 100%;
    height: 40px;

    min-width: 50px;

    display: flex;
    align-items: center;
    justify-content: center;

    ${({isMenuOpen}) =>  
      isMenuOpen ? css`justify-content: end;` : css`justify-content: center;`
    }

    svg {
      font-size: 40px;
      padding: 0.4rem;
      color: ${({theme}) => theme.colors.white};
      border-radius: 50%;

      &:hover {
        background-color: ${({ theme }) => theme.colors.gray700};
      }
    }
  }

  nav {
    width: 100%;
    
    padding: 5px;

    flex: 1;

    background-color: ${({ theme }) => theme.colors.gray900};
  
    ${({isMenuOpen}) =>  
      isMenuOpen ? css`width: 250px;` : css`width: 75px;`
    }
  
    transition: width 0.3s;

    > div {
      width: 100%;

      display: flex;
      align-items: center;

      ${({isMenuOpen}) =>  
          isMenuOpen ? css`justify-content: space-between;` : css`justify-content: center;`}

      span {
        width: 100%;

        padding: 0 5px;
        font-size: 1.2rem;
        font-weight: 500;

        color: ${({ theme }) => theme.colors.white};
        transition: ease-in 10s;

        ${({isMenuOpen}) =>  
          isMenuOpen ? css`display: initial;` : css`display: none;`
        }
      }
    }
  
    ul {
      padding: 10px;

      display: flex;
      flex-direction: column;
      gap: 0.4rem;
    }

    li {
      border-radius: 4px;
      transition: ease-in 0.2s;

      border-top: 1px solid ${({ theme }) => theme.colors.gray700};
      border-bottom: 1px solid ${({ theme }) => theme.colors.gray700};

      a, > div {
        width: 100%;
        position: relative;
        
        display: flex;
        align-items: center;

        cursor: pointer;

        gap: 0.5rem;

        svg {
          font-size: 40px;
          padding: 0.4rem;
          fill: ${({ theme }) => theme.colors.white};

          transition: fill 0.3s;
        }     

        span {
          font-size: 1rem;
          font-weight: 500;
          transition: color 0.3s;

          color: ${({ theme }) => theme.colors.gray500};

          ${({isMenuOpen}) =>  
            isMenuOpen ? css`display: initial;` : css`display: none;`}
        }

        &.active {
          &::after {
            content: '';
            position: absolute;
            left: -10px;
            top: 50%;
            bottom: 0;
            transform: translateY(-50%);

            background-color: ${({ theme }) => theme.colors.white};
            
            filter: drop-shadow(1px 1px 1px rgb(0 0 0 / 0.4));
            width: 3px;
            height: 100%;
          }

          svg {
            fill: ${({ theme }) => theme.colors.white};
            filter: drop-shadow(1px 1px 1px rgb(0 0 0 / 0.4));
          }

          span {
            color: ${({ theme }) => theme.colors.white};
          }
        }
      }

      &:hover {
        background-color: ${({ theme }) => theme.colors.gray700};

        svg {
          fill: ${({ theme }) => theme.colors.white};
        }

        span {
          color: ${({ theme }) => theme.colors.white};
        }
      }
    }
  }

  @media (max-width: 720px) {
    width: 100%;

    display: flex;
    align-items: center;

    padding: 5px;

    .bg-sidebar {
      width: 100%;
      height: 100%;

      opacity: 0.6;
      background-color: ${({ theme }) => theme.colors.gray700};

      position: fixed;
      top: 0;

      transition: ease-in 0.3s;

      ${({isMenuOpen}) =>  
        isMenuOpen ? css`display: initial;` : css`display: none;`
      }
    }

    button {
      padding: 0;
      justify-content: start;
    }

    nav {
      width: 350px;
      height: 100%;

      position: fixed;
      top: 0;

      transition: ease-in 0.3s;

      ${({isMenuOpen}) =>  
        isMenuOpen ? css`left: 0;` : css`left: -350px;`
      }
    }
  }
`