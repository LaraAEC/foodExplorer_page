import styled from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  height: 100vh;


  margin: 0 auto;

  display: flex;
  flex-direction: column;

  gap: 3rem;

  padding: 15.8rem 4.7rem 30.0rem 4.7rem;

  @media (min-width: 768px) {
  max-width: 76.8rem;

  display: flex;
  flex-direction: row;
  gap: 2.8rem;

  align-items: center;

  padding: 7rem 3rem 5rem 3rem;
}

@media (min-width: 1024px) {
  max-width: 102.4rem;
  gap: 17rem;
}

`;

export const Form = styled.form `
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  text-align: center;

  border-radius: 1.6rem;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_400};

  @media (min-width: 768px) {
    width: 37rem;
    height: 38.4rem;
    
    padding: 1.5rem;
    border-radius: 1rem;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  }

  @media (min-width: 1024px) {
    width: 47.6rem;
    height: 50.4rem;

    padding: 6.4rem;
    border-radius: 1rem;
   }

  > .wrap {
    display: flex;
    flex-direction: column;

    align-items: start;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_400};

    > a {
      font-family:  font-family: ${({ theme }) => theme.FONTS.FONT_PRIMARY};
      font-weight: 500;
      font-size: 1.4rem;
      line-height: 2.4rem;

      margin: 0 auto;
      margin-top: 3.2rem;
      
      color:  ${({ theme }) => theme.COLORS.WHITE_100}; 
      
      @media (min-width: 768px) {
        margin: 0 auto;
        margin-top: 1.2rem;
      }
    }

    @media (min-width: 768px) {
      width: 33rem;
      padding: 0rem;

      background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    }

    @media (min-width: 1024px) {
      width: 35rem;
      padding: 0rem;
    }
  }

  > .wrap #loginIn {
    margin: 0 auto;
  
    > h2 {
      font-weight: 500;
      font-size: 3.2rem;
      line-height: 140%;

      color: ${({ theme }) => theme.COLORS.BACKGROUND_400};
      background: ${({ theme }) => theme.COLORS.BACKGROUND_400};
     
    @media (min-width: 768px) {
      background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
      color: ${({ theme }) => theme.COLORS.WHITE_100}; 
      }
    }
  }

  > .wrap span {
    font-family: ${({ theme }) => theme.FONTS.FONT_SECONDARY};
    font-weight: 400;
    font-size: 1.6rem;

    margin-bottom: 0.8rem;
    margin-top: 2.2rem;

    color: ${({ theme }) => theme.COLORS.GRAY_400};

    @media (min-width: 768px) {
      margin-bottom: 2px;
      margin-top: 1.1rem;
    }    
  }
`;