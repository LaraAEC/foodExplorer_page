import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: stretch;

  width:100%;
  height: 100%;

  max-width: 42.8rem;

  margin: 0 auto;

  > .closeMenu {
    display: flex;
    gap: 1.6rem;

    align-items: center;
    padding: 5.6rem 2.8rem 2.4rem 2.8rem;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
 
    > .buttonCloseMenu {
      border: none;
      background: none;
      cursor: pointer;

      > img {
        width: 1.8rem;
        height: 1.8rem;
      }
    }

    > span {
    font-weight: 300;
    font-size: 2.4rem;
    line-height: 140%;

    color: ${({ theme }) => theme.COLORS.WHITE_300};

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_1000};
   }
   
  }

  .page {
    width: 100%;
    height: 100vh;

    padding: 3.6rem 2.8rem 1.3rem 2.8rem;
    margin: 0 auto;

    display: flex;
    flex-direction: column;

    gap: 3.6rem;

    > .buttonSignOut {
      border: none;
      background: none;
      cursor: pointer;

      font-weight: 300;
      font-size: 2.4rem;
      line-height: 140%;

      text-align: start;

      color: ${({ theme }) => theme.COLORS.WHITE_300};

      border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_1000};
   }

    > .dish-list{
      display: flex;
      justify-content: center;
      
      > ul {
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }  
    }  
  }
`;
