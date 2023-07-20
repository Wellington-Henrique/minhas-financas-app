import styled, { css } from 'styled-components'

interface ContainerProps {
    isMenuOpen: boolean
}

export const Container = styled.aside<ContainerProps>`
  background-color: ${({ theme }) => theme.colors.gray900};

  ${({isMenuOpen}) =>  
    isMenuOpen ? css`width: 250px;` : css`width: 70px;`
  }

  overflow: hidden;
  padding: 5px;
  
  display: flex;
  flex-direction: column;
  align-items: center;

  transition: width 0.3s;

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
      font-size: 35px;
      padding: 0.4rem;
      color: ${({theme}) => theme.colors.white};

      &:hover {
        background-color: ${({ theme }) => theme.colors.gray700};
        border-radius: 50%;
        font-size: 40px;
      }
    }
  }

  nav {
    margin-top: 0.5rem;
    flex: 1;
    width: 100%;
    height: 100%;

    ul {
      padding: 10px;
      height: 100%;

      display: flex;
      flex-direction: column;
      gap: 0.4rem;
    }

    li {
      border-radius: 4px;
      
      a {
        width: 100%;
        position: relative;
        
        display: flex;
        align-items: center;

        gap: 0.5rem;

        svg {
          font-size: 35px;
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
`