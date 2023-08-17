import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
  height: 100vh;

  margin: 0 auto;

  display: grid;
  grid-template-rows: 1fr auto 1fr;
  grid-template-areas:
  "header"
  "main"
  "footer";

  overflow-y: hidden;

  > main { 
    grid-area: main;
   
    margin: 0 auto;
   
    overflow-x: hidden;
    overflow-y: auto;

    scrollbar-color: transparent transparent; 

    &::-webkit-scrollbar {
        background: transparent;
    }

    display: flex;
    flex-direction: column;

    gap: 1.6rem;

    width: 100%;
    padding-bottom: 0;
   
    align-items: center;
    justify-content: center;
     
  }

  > header {
    grid-area: header;
    width: 100%;
  }

  > footer {
    grid-area: footer;
    width: 100%;
  }
`;

export const Content = styled.div`
  max-width: 100%;
  height:100vh;

  padding: 2rem;

  @media (min-width: 820px) {
    display: grid;
    grid-template-columns: 2fr  3fr;
    grid-template-rows: 2vh auto;
    grid-template-areas:
    "back back"
    "one two";

    gap: 4rem;
  }

  > .wrapperBack {
    grid-area: back;
    display: flex;
    align-items: start;
    justify-content: start;
    
    padding-top: 8rem;

    @media (max-width: 280px) and (max-height: 653px) {
      padding-top: 1rem;
    }

    @media (min-width: 360px) {
      padding-top: 1rem;
    }
  
    @media (min-width: 375px) and (min-height: 532px) {
      padding-top: 8rem;  
    }

    @media (min-width: 375px) and (min-height: 667px) {
      padding-top: 1rem;
   
    }

    @media (min-width: 820px) {
      padding: 1rem;
    }
  }
   
  > .versionDesktopColumnOne {
    display: flex;
    flex-direction: column;

    gap: 1.6rem;

    align-items: center;
    justify-content: center; 

    grid-area: one;

    @media (min-width: 1024px) {
      gap: 6rem;
    }

    > .photoDish {
      width: 18rem;
      height: 18rem;
      padding: 2rem;

      border-radius: 50%; 

      @media (min-width: 412px) {
        width: 26.4rem;
        height: 22.4rem;
      }

      @media (min-width: 1024px) {
        width: 36.0rem;
        height: 32.9rem;
      }
    }
  }

  > .versionDesktopColumnTwo {
    display: flex;
    flex-direction: column;  
    
    justify-content: center; 

    grid-area: two;  
  
    > .details {
    display: flex;
    flex-direction: column;

    align-items: center; 
    
    gap: 1rem;
  
    @media (min-width: 412px) {
      align-items: start;
      gap: 1rem;
    }

    > h2 {
      font-size: 2rem;
      font-weight: 500;
      line-height: 100%;

      padding-top: 1rem;
      
      padding-left: 1.5rem;

      color: ${({ theme}) => theme.COLORS.WHITE_300};

      @media (min-width: 412px) {
        font-size: 2.8rem;
        font-weight: 500;
        line-height: 140%;       
      }
    }

    > textarea {
      text-align: start; 

      padding-left: 1.5rem;

      font-size: 1.2rem; 

      @media (min-width: 412px) {
        font-size: 2rem;      
      }
    }

    > .wrapperTags {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;

      padding-left: 1.5rem;
      
      margin-bottom: 2rem;

      @media (min-width: 820px) {
        margin-bottom: 3rem;     
      }    
    }
  }
  
    > .order {
    display: flex;
  
    align-items: center;
    justify-content: start;
    gap: 1rem;


    > .counter {
      display: flex;

      button {
      border: none;
      background: transparent;

      > img {
        width: 2rem;
        height: 2rem;      
      }
    }

    > input {
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

  > .wrapperButton {
        display: flex;
        justify-content: center;
        align-items: center; 

        gap: 0.8rem;
       
        padding: 1.2rem 2rem;
        
        font-size: 1.2rem;
        font-weight: 500;

        line-height: 2px;

        border-radius: 5px;

        background-color: ${({ theme }) => theme.COLORS.RED_100};
        color: ${({ theme }) => theme.COLORS.WHITE_100};
        display: flex;

        @media (min-width: 768px) {
          max-width: 22.8rem;
          height: 1.39rem;

          padding: 2rem 3rem;
        }

        > .receipt {
          max-width: 1.6rem;
          height: 1.6rem;

          @media (min-width: 370px) {
          font-size: 1.2rem;
          line-height: 2px;
        }
        
        @media (min-width: 425px) {
          max-width: 2rem;
          height: 2rem;
        }
        }

        > button {
        text-align: center;
        font-size: 10px;        
        font-weight: 500;

        line-height: 2.6px;
      
        white-space: wrap;

        @media (max-width: 306px) {
          line-height: 12px;
        }

        @media (min-width: 370px) {
          font-size: 1.2rem;
        }

        @media (min-width: 425px) {
          font-size: 1.6rem;
        }

      }
    }
 }    
} 
`;

