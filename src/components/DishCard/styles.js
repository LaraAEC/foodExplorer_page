import styled from 'styled-components';

export const Container = styled.div`
 
  width:100%;
  height: 100%;

  width: 21.0rem;
  height: 29.2rem;

  padding: 24px;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_200};

  position: relative;

  main {
    display: flex;
    align-items: ;
  
    margin: 0 auto;
  
    width: 21.0rem;
    height: 29.2rem;

    > img {
    width: 2.4rem;
    height: 2.2rem;
    background: transparent;

    position: absolute;
    left: 170px;
    top: 16px;
  }
  }
 
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
 
  gap: 1rem;

  background: ${({ theme }) => theme.COLORS.DARK_200};

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