import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  height: 5rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 2.5rem;

  padding: 2rem 1.8rem;


  background: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  #logo {
    display: flex;
    gap: 1px;
    justify-content: center;
    align-items: center;
    

    > p {
      font-family: ${({ theme }) => theme.FONTS.FONT_SECONDARY};
      font-weight: 700;
      font-size: 1rem;
      line-height: 1rem;

      color: ${({ theme }) => theme.COLORS.GRAY_700};
    }
  }

  img {
      width: 1.5rem;
      height: 1.2rem;
  } 

  #copyright {
    
    > p {
      font-family: ${({ theme }) => theme.FONTS.FONT_COPYRIGHT};
      font-weight: 400;
      font-size: 0.7rem;
      line-height: 1rem;

      color: ${({ theme }) => theme.COLORS.WHITE_200};
    }
  }

  `;