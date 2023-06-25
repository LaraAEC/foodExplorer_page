import styled from 'styled-components';

export const Container = styled.section`
  margin: 2.8rem 2.4rem;

  @media (min-width: 768px) {
    margin: 2.8rem 0;
    }

  h2 {
    margin-bottom: 2rem;

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

    @media (min-width: 768px) {
      width: 69.5rem;
      height: 30.0rem;
    }

    @media (min-width: 1024px) {
      width: 95.6rem;
      height: 30.0rem;
    }

    @media (min-width: 1300px) {
      width: 128.8rem;  
    }
  }
`;