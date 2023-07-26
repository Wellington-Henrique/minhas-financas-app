import styled from 'styled-components';

export const Container = styled.main`
  display: flex;

  overflow: hidden;

  flex: 1;

  @media (max-width: 720px) {
    flex-direction: column;
  }
`