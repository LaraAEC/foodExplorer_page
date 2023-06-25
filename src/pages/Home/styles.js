import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  
  max-width: 42.8rem;

  background: ${({ theme }) => theme.COLORS.DARK_200};

  @media (min-width: 768px) {
    max-width: 76.8rem;
    margin: 0 auto;
  }

  @media (min-width: 1024px) {
    max-width: 144.0rem;
  }

  > main {
    padding-top: 4.4rem;
    overflow-y: scroll;
    background: pink;


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
  max-width: 550px;

  margin: 0 1rem 0 2rem;

  @media (min-width: 768px) {
    margin: 0 2rem 0 3rem; 
  }
 
  @media (min-width: 1024px) {
    margin: 0 2rem 0 3rem; 
  }

  @media (min-width: 1300px) {
    margin: 0 2rem 0 4.5rem; 
  }

  #Banner {
    display: flex;
    align-items: end;
  
    width: 37.6rem;
    height: 12.0rem; 

    background: linear-gradient(180deg, #091E26 0%, #00131C 100%);

    border-radius: 3px;
    background: green;

    @media (min-width: 768px) {
      width: 69.5rem;
      height: 15.0rem; 
    }

    @media (min-width: 1024px) {
      width: 95.6rem;
      height: 20.0rem;
    }

    @media (min-width: 1300px) {
      width: 128.8rem;
      height: 26.0rem;
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
          
      }

        @media (min-width: 1024px) {
       
      }
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

