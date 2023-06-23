import styled from 'styled-components';

export const Container = styled.div`
  background: transparent;
  
  #Counter {
    display: flex;

    margin-bottom: -3rem;

    button {
    border: none;
    background: transparent;

    > img {
      width: 2rem;
      height: 2rem;
    }
  }

    input {
      color: ${({ theme }) => theme.COLORS.WHITE_300};
      font-family: ${({ theme }) => theme.FONTS.FONT_SECONDARY};
      font-weight: 400;
      font-size: 1.6rem;

      width: 4rem;
      height: 2rem;

      display: flex;
      align-items: center;

      text-align: center;

      border: none;
      background: transparent;
    }
  }
`;