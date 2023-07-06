import styled from 'styled-components';

export const Container = styled.header`
  grid-area: header; 

  height: 11.4rem;

  padding: 5.6rem 2.8rem 2.4rem 2.8rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  
  .box {
    display: flex;
    flex-direction: row;
    
    align-items: center;

    gap: 1.6rem;
    
    height: 3.4rem;

    justify-content: center;

    @media (min-width: 768px) {
      gap: 30rem;
    }

  .title {
    display: flex;
    flex-direction: row;

    gap: 0.8rem;
    
    align-items: center;

    padding: 0 6.5rem;

    > .wrapper {
      display: flex;
      flex-direction: row;

      gap: 0.8rem;

      align-items: center;

      font-family: ${({ theme }) => theme.FONTS.FONT_SECONDARY};
      font-style: normal;

      line-height: 2rem;
    
      > h1 {
      font-size: 2.1rem;
      font-weight: 700;

      color: ${({ theme }) => theme.COLORS.WHITE_100};
      }

      > p {
        font-size: 1.2rem;
        font-weight: 400;
        
        line-height: 140%;

        text-align: center;

        color: ${({ theme }) => theme.COLORS.BLUE_100};
      }

    }
  }
}
 `;