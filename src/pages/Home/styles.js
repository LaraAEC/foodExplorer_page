import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  
  max-width: 42.8rem;

  @media (min-width: 768px) {
    background: pink;
  }

`;
