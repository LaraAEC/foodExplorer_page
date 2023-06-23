import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  
  max-width: 42.8rem;


  @media (min-width: 768px) {
    background: pink;
  }

  
  > main {
    overflow-y: scroll;
    padding: 4.4rem 0 0 0;
    background: black;
   }

   #Banner {
    display: flex;
    align-items: end;
  
    width: 37.6rem;
    height: 12.0rem; 

    margin: 0 auto;

    background: linear-gradient(180deg, #091E26 0%, #00131C 100%);

    border-radius: 2.91696px;

    > img {  
      margin-left: -3rem;
      
    }

    > .wrapperBanner {
      margin-bottom: 2.2rem;

      > h2 {
        font-weight: 600;
        font-size: 1.8rem;
        line-height: 140%;

        color: ${({ theme }) => theme.COLORS.WHITE_300};

      }

      > p {
        font-weight: 400;
        font-size: 1.2rem;
        line-height: 140%;

        color: ${({ theme }) => theme.COLORS.WHITE_300};
      }
    }
   }
`;

export const Content = styled.div`
  max-width: 550px;
  margin: 0 auto;
`;

