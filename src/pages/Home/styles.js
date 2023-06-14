import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.4rem auto;
  grid-template-areas:
  "header"
  "content";
  
  max-width: 42.8rem;

  @media (min-width: 768px) {
    background: pink;
  }

`;
