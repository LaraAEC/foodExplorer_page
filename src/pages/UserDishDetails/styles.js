import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
  height: 100vh;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  
  max-width: 76.7rem;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_200};

  @media (min-width: 1024px) {
    max-width: 144.0rem;
  }

  > main {
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: transparent transparent; 

    &::-webkit-scrollbar {
        background: transparent;
        width: 8px;    
    }
   }
`;

export const Content = styled.div`
  max-width: 100%;
  height: 100vh;
  
  background: pink;
  
  
  
`;

