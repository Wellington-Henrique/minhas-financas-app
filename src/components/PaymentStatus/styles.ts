import styled, { css } from 'styled-components'

interface PaymentStatusProps {
    status: number
}

export const Container = styled.div<PaymentStatusProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;

    font-weight: 700;

    width: 100px;
    margin: 0 auto;
    border-radius: 4px;
    
    ${({status}) =>  
        status === 0 ? 
        css`
            color: #fca130;
            border: 1px solid #fca130;
            background-color: #fbf1e6;
        ` 
        : css`
            color: #49cc90;
            border: 1px solid #49cc90;
            background-color: #e8f6f0;
        `
  }
`