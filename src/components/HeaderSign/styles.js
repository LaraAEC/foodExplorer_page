import styled from 'styled-components';

export const Container = styled.header`

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 1.1rem;
  
  max-width: 38.0rem;
  height: 4.4rem;

  font-family: ${({ theme }) => theme.FONTS.FONT_SECONDARY};
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 2rem;

  img {
      width: 2.5rem;
      height: 2.5rem;
    
      @media (min-width: 768px) {
        width: 4.5rem;
        height: 4.5rem;

        font-size: 1.6rem;
        line-height: 3rem;
      }
  } 


  `;