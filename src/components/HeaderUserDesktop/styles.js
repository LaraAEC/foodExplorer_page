import styled from 'styled-components';

export const Container = styled.header`
  grid-area: header; 

  height: 11.4rem;

  padding: 5.6rem 2.8rem 2.4rem 2.8rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  
  #box {
    display: flex;
    flex-direction: row;
    
    align-items: center;
    
    height: 3.4rem;

    gap: 3.2rem;

    margin: 0 auto;
  
    justify-content: center;

  .Search {
    display: flex;
    align-items: center;
    gap: 1.4rem;

    justify-content: center;

    height: 4.5rem;
    width: 45%;

    padding: 1.2rem 1.4rem;
    

    color: ${({ theme }) => theme.COLORS.GRAY_300};
    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    border: 0;

    border-radius: 0.5rem;
  }

  #title {
    display: flex;
    flex-direction: row;

    gap: 0.8rem;

    align-items: center;

    font-family: ${({ theme }) => theme.FONTS.FONT_SECONDARY};
    font-style: normal;
    font-weight: 700;
    font-size: 2.4rem;
    line-height: 2rem; 

    @media (max-width: 1024px) {
      font-size: 1.4rem;
    }

    > img {
      width: 3.0rem;
      height: 3.0rem;
    }

  }

  .OrderButton {
    display: flex;
    align-items: center;

    gap: 12px;

    padding: 1.2rem 3.2rem;

    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.COLORS.RED_100};
  }

  button {
    background-color: ${({ theme }) => theme.COLORS.RED_100};
    color: ${({ theme }) => theme.COLORS.WHITE_100};

    padding: 0rem auto;

    font-size: 1.4rem;
    font-weight: 500;

    border: none; 
  }
}
`;

 
export const Search = styled.input`
  width: 45%;

  font-size: 1.6rem;
  font-family: ${({ theme }) => theme.FONTS.FONT_SECONDARY};
  line-height: 100%;
  
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  border: 0;

  &:placeholder {
    color:  ${({ theme }) => theme.COLORS.GRAY_300};
  }
`;