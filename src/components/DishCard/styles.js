import styled from 'styled-components';

export const Container = styled.div`
  position: relative;

  width: 20rem;
  flex: 1;

  height: 29rem;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_200};

  .heart {
    position: absolute;
    top: 7%;
    right: 5%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
 
  gap: 1rem;
  padding: 3rem 2rem 1rem;


  img {
    width: 8.8rem;
    height: 8.8rem;
  }

  p {
    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2.4rem;

    text-align: center;

    color: ${({ theme }) => theme.COLORS.WHITE_300}; 
    svg {
      margin-right: 0;
    }
  }

  #price {
    font-family: ${({ theme }) => theme.FONTS.FONT_SECONDARY};
    color: ${({ theme }) => theme.COLORS.BLUE_100}; 
  }

  #buttonInclude {
    width: 16.2rem;
    height: 3.2rem; 
  }
`;