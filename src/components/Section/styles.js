import styled from 'styled-components';

export const Container = styled.section`
  margin: 0 auto;

  padding: 0 2rem;

  h2 {
    margin: 2rem 0;

    color: ${({ theme }) => theme.COLORS.WHITE_300};
    
    font-style: normal;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 140%;
  }
`;