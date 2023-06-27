import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
  height: 100vh;

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  
  max-width: 76.7rem;

  background: ${({ theme }) => theme.COLORS.DARK_200};

  @media (min-width: 1024px) {
    max-width: 144.0rem;
  }

  > main {
    padding-top: 4.4rem;
    overflow-y: scroll;
    
    ::-webkit-scrollbar-track {
        background-color: red;
    }

    ::-webkit-scrollbar {
        background: blue;
        width: 80px;    
    }

    ::-webkit-scrollbar-thumb {
        background: green;
        
        -webkit-border-radius: 10px;
        border-radius: 10px;
    }
   }
`;

export const Content = styled.div`
  max-width: 100%;
  background: black;
  
  #Banner {
    margin: 0 auto;

    display: flex;
    align-items: end;
  
    width: 38rem;
    height: 12.0rem; 

    background: linear-gradient(180deg, #091E26 0%, #00131C 100%);

    border-radius: 3px;
  
    @media (min-width: 768px) {
      width: 69.5rem;
      height: 15.0rem;

      gap: 9rem;
    }

    @media (min-width: 1024px) {
      width: 95.6rem;
      height: 20.0rem;

      gap: 18rem;
    }

    @media (min-width: 1300px) {
      width: 128.8rem;

      gap: 26rem;
    }


    > img {  
      margin-left: -3rem;  

      @media (min-width: 768px) {
        width: 25.0rem;
      }

      @media (min-width: 1024px) {
        width: 32.0rem;
      }
    }

    > .wrapperBanner {
      margin-bottom: 2.2rem;

      > h2 {
        font-weight: 600;
        font-size: 1.8rem;
        line-height: 140%;

        color: ${({ theme }) => theme.COLORS.WHITE_300};

        @media (min-width: 768px) {
          font-weight: 500;
          font-size: 3rem;
        }

        @media (min-width: 1024px) {
          font-size: 4rem;
        }

        @media (min-width: 1300px) {
          font-size: 6rem;
        }
      }
      
      > p {
        font-weight: 400;
        font-size: 1.2rem;
        line-height: 140%;

        color: ${({ theme }) => theme.COLORS.WHITE_300};

        @media (min-width: 768px) {
          font-weight: 400;
          font-size: 1.4rem;
          line-height: 100%; 

          font-family: ${({ theme }) => theme.FONTS.FONT_SECONDARY};
        }

         @media (min-width: 1300px) {
          font-size: 1.6rem;
        }
    }
   }
  }
`;

