import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: stretch;

  width:100%;
  height: 100vh;

  max-width: 42.8rem;

  margin-top: 14rem;

  padding: 0rem;
  background: green;

  @media (min-width: 768px) {
    max-width: 76rem;

    display: flex;
    flex-direction: row;

    margin: 0;
    padding: 3rem 3rem;
    gap: 3rem; 

  }

  @media (min-width: 1124px) {
    max-width: 112.4rem;
    margin: 0 auto;
  
    display: flex;
    flex-direction: row;

    gap: 10rem;

    padding-top: rem;
  }
`;

export const Form = styled.form `
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  text-align: center;

  padding: 7.3rem 1.6rem;

  > h2 {
    color: ${({ theme }) => theme.COLORS.DARK};

    @media (min-width: 768px) {
      color: ${({ theme }) => theme.COLORS.WHITE_100};  
  }

   @media (min-width: 1124px) {
    color: ${({ theme }) => theme.COLORS.WHITE_100};
   }
  }

  @media (min-width: 768px) {
    padding: 4rem 4rem;
  }

  @media (min-width: 1124px) {
    padding: 4rem 4rem;
   }

  > .wrap {
    display: flex;
    flex-direction: column;

    align-items: start;

    @media (min-width: 768px) {
      width: 34.8rem;
      padding: 0rem 6rem;
    }

    @media (min-width: 1124px) {
      width: 34.8rem;
      padding: 0rem 4rem;
    }
  }

  > .wrap span {
    font-family: ${({ theme }) => theme.FONTS.FONT_SECONDARY};
    font-weight: 400;
    font-size: 1.2rem;

    color: ${({ theme }) => theme.COLORS.GRAY_400}

    margin-bottom: 5px;
  }

  > a {
    font-family:  font-family: ${({ theme }) => theme.FONTS.FONT_PRIMARY};
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1rem;

    margin-top: 3rem;
    color:  ${({ theme }) => theme.COLORS.WHITE_100};  
  }
`;