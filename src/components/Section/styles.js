import styled from 'styled-components';

export const Container = styled.section`
  margin: 2.8rem 2.4rem;

  h2 {
    margin-bottom: 2.4rem;

    color: ${({ theme }) => theme.COLORS.WHITE_300};
    
    font-style: normal;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 140%;
  }

  .Carousel {
    display: flex;
    gap: 1.6rem;
    overflow: hidden;
  }
`;