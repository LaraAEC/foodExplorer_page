import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: stretch;

  width:100%;
  height: 100vh;

  max-width: 42.8rem;

  margin-top: 14rem;

  padding: 158px 47px 300px 47px;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 76.8rem;

    display: flex;
    flex-direction: row;

    margin: 0;
    padding: 3rem 3rem;

    align-items: center;
    justify-content: space-between;
  
  }

  @media (min-width: 1124px) {
    max-width: 112.4rem;
    margin: 0 auto;
  
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: space-between;
    
    padding: 15rem 8rem 14.2rem 4rem;
  }
`;

export const Form = styled.form `
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  text-align: center;

  border-radius: 1.3rem;

  background: transparent;

  @media (min-width: 768px) {
    padding: 1.5rem;
    border-radius: 1rem;
  }

  @media (min-width: 1124px) {
    padding: 3rem;
    border-radius: 1rem;
   }

  > .wrap {
    display: flex;
    flex-direction: column;

    align-items: start;

    background: transparent;

    > h2 {
      font-weight: 500;
      font-size: 32px;

      color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    @media (min-width: 768px) {
      background: ${({ theme }) => theme.COLORS.BACKGROUND_700};

      color: ${({ theme }) => theme.COLORS.WHITE_100};

      margin: 0 auto;  
  }

    @media (min-width: 1124px) {
      background: ${({ theme }) => theme.COLORS.BACKGROUND_700};

      color: ${({ theme }) => theme.COLORS.WHITE_100};
   }
  }
    > a {
      font-family:  font-family: ${({ theme }) => theme.FONTS.FONT_PRIMARY};
      font-weight: 500;
      font-size: 1.1rem;
      line-height: 1rem;
      margin: 0 auto;
      margin-top: 2.2rem;
      
      color:  ${({ theme }) => theme.COLORS.WHITE_100}; 
      
      @media (min-width: 768px) {
        margin: 0 auto;
        margin-top: 1.2rem;
    }
    }

    @media (min-width: 768px) {
      width: 18rem;
      padding: 0rem;
    }

    @media (min-width: 1124px) {
      width: 25rem;
      padding: 0rem;
    }
  }

  > .wrap span {
    font-family: ${({ theme }) => theme.FONTS.FONT_SECONDARY};
    font-weight: 400;
    font-size: 1.2rem;

    margin-bottom: 5px;
    margin-top: 2.2rem;

    color: ${({ theme }) => theme.COLORS.GRAY_400};

    @media (min-width: 768px) {
      margin-bottom: 2px;
      margin-top: 1.1rem;
    }    
  }
`;