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

  

  @media (min-width: 768px) {
    flex-direction: row;
  }

`;
export const Form = styled.form `
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  text-align: center;

  padding: 7.3rem 1.6rem;

  > .wrap {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 8px;
  }

  > .wrap span {
    font-family: ${({ theme }) => theme.FONTS.FONT_SECONDARY};
    font-weight: 400;
    font-size: 1.2rem;

    color: ${({ theme }) => theme.COLORS.GRAY_400}

    margin-bottom: 8px;
  }

  > a {
    font-family:  font-family: ${({ theme }) => theme.FONTS.FONT_PRIMARY};
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2rem;

    margin-top: 3.2rem;
    color:  ${({ theme }) => theme.COLORS.WHITE_100};
    
  }
`;