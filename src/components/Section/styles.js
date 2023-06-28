import styled from 'styled-components';

export const Container = styled.section`
  margin: 0 auto;

  h2 {
    margin: 2rem 3rem;

    color: ${({ theme }) => theme.COLORS.WHITE_300};
    
    font-style: normal;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 140%;

    @media (min-width: 768px) {
      margin: 2rem 4rem;
    }

    @media (min-width: 1440px) {
      margin: 2rem 7rem; 
    }
  }

  .Carousel {
    margin: 0 auto;

    display: flex;
    gap: 1.6rem;
    
    overflow: hidden;

    width: 38rem;
    height: 30.0rem; 

    @media (min-width: 768px) {
      width: 69.5rem;
      height: 30.0rem;
    }

    @media (min-width: 1024px) {
      width: 93rem;
      height: 30.0rem;
    }

    @media (min-width: 1300px) {
      width: 127.0rem;  
    }
  }
`;