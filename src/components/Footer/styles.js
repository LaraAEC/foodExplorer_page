import styled from 'styled-components';

export const Container = styled.footer`
  grid-area: footer;

  width: 100%;
  height: 6.6rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 0.8rem;

  padding: 2.4rem 2.7rem;
  
  background: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  @media (min-width: 1024px) {
    justify-content: space-between;
  }   

  #logo {
    display: flex;
    gap: 0.6rem;
    justify-content: center;
    align-items: center;
    
    > p {
      font-family: ${({ theme }) => theme.FONTS.FONT_SECONDARY};
      font-weight: 700;
      font-size: 1.52rem;
      line-height: 1.4rem;

      color: ${({ theme }) => theme.COLORS.GRAY_700};
    }
  }

  img {
      width: 2.2rem;
      height: 1.8rem;
  } 

  #copyright {  
    > p {
      font-family: ${({ theme }) => theme.FONTS.FONT_COPYRIGHT};
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.4rem;

      color: ${({ theme }) => theme.COLORS.WHITE_200};
    }
  }
`;