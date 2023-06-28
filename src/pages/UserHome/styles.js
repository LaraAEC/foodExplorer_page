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

    @media (min-width: 768px) {
      padding-top: 7rem;
    }

    @media (min-width: 1024px) {
      padding-top: 10rem;
    }

    @media (min-width: 1300px) {
      padding-top: 14.5rem;
     
    }

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
      height: 16.5rem;

      gap: 5rem;
    }

    @media (min-width: 1024px) {
      width: 93rem;
      height: 21.0rem;

      gap: 6rem;
    }

    @media (min-width: 1300px) {
      width: 127.0rem;
      height: 30rem;

      gap: 8rem;
    }

    > img {  
      margin-left: -3rem;  

      @media (min-width: 768px) {
        width: 28.0rem;
      }

      @media (min-width: 1024px) {
        width: 45.0rem;
        margin-left: -5rem;
      }

      @media (min-width: 1300px) {
        width: 60.0rem;
        height: 42rem;

        margin-left: -6rem;
      }
    }

    > .wrapperBanner {
      margin-bottom: 2.2rem;

      @media (min-width: 768px) {
        margin-bottom: 4.5rem;
      }

      @media (min-width: 1024px) {
        margin-bottom: 7.5rem;
      }

      @media (min-width: 1300px) {
        margin-bottom: 10rem;
        
      }

      > h2 {
        font-weight: 600;
        font-size: 1.8rem;
        line-height: 140%;

        color: ${({ theme }) => theme.COLORS.WHITE_300};

        @media (min-width: 768px) {
          font-weight: 500;
          font-size: 3rem;

          white-space: nowrap;
        }

        @media (min-width: 1024px) {
          font-size: 4rem;
        }

        @media (min-width: 1300px) {
          font-size: 5.5rem;
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

          white-space: nowrap;

          font-family: ${({ theme }) => theme.FONTS.FONT_SECONDARY};
        }

         @media (min-width: 1300px) {
          font-size: 1.6rem;
        }
    }
   }
  }
`;

