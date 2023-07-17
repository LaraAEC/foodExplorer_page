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

  background: ${({ theme }) => theme.COLORS.BACKGROUND_200};


  > main { 
    grid-area: main;
   
    margin: 0 auto;

    overflow-x: hidden;
    overflow-y: auto;

    scrollbar-color: transparent transparent; 

    &::-webkit-scrollbar {
        background: transparent;
    }

    @media (min-width: 1024px) {
      max-width: 102.4rem;
    }

    @media (min-width: 1300px) {
      max-width: 140.0rem;
    }
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
  
  display: flex;
  flex-direction: column;

  gap: 1.6rem;

  align-items: center;
  justify-content: center;

  padding: 3.6rem 5.6rem;
  padding-bottom: 0;

  @media (min-width: 768px) {
    padding-top: 6.6rem;
    }

  @media (min-width: 912px) {
    padding: 8.6rem;
    padding-bottom: 1rem;
  }
  
  @media (min-width: 1024px) {
    padding-top: 3.6rem;
    padding-bottom: 1rem;
  }

  @media (min-width: 1280px) {
    padding: 1rem;
  }

  @media (min-width: 1400px) {
    padding: 0rem;
  }

  > form {
    display: flex;
    flex-direction: column;

    align-items: start;
    justify-content: start;

    background: transparent;

    gap: 2.4rem;
   
    width: 100%;

    @media (min-width: 412px) {
      height:70rem;
    }

    @media (min-width: 500px) {
      align-items: start;
      justify-content: start;
    }

    @media (min-width: 768px) {
      height:100rem;
    }

    @media (min-width: 912px) {
      height:115rem;
    }

    @media (min-width: 1024px) {
      width: 100rem;
      height: 48rem;
      padding: 0rem 12rem 0rem 12rem;
    }

    @media (min-width: 1280px) {
      width: 110rem;
      height: 58rem;

      padding-top: 0;
    }

    @media (min-width: 1400px) {
      width: 120.0rem; 
      height: 77rem;

      padding: 5.6rem;

      align-items: center;
    }

    > .wrapperBack {
      width: 100%;
      > button {
        color: ${({ theme}) => theme.COLORS.WHITE_300};
        font-size: 1.6rem;
        font-weight: 500;
        line-height: 140%;
      }
    }

    > .wrapperTitle {
      width: 100%;

      > h2 {
        font-size: 2.7rem;
        font-weight: 500;
        line-height: 140%;
    
        color: ${({ theme}) => theme.COLORS.WHITE_300};
      
        @media (min-width: 1300px) {
          margin-bottom: 2rem;
        }
      }
    }
    
    > .rowVersionDesktopOne {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      gap: 2.4rem;

      width: 100%;

      @media (min-width: 1024px) {
      display: flex;
      flex-direction: row;

    }

      > .selectImg {
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
    
        > p {
          color: ${({ theme}) => theme.COLORS.GRAY_400};

          font-family: ${({ theme}) => theme.FONTS.FONT_SECONDARY};
          font-size: 1.6rem;
          font-weight: 400;
          line-height: 100%;
        } 
      }

      > .wrapperName, .wrapperCategory {
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
       
        color: ${({ theme}) => theme.COLORS.GRAY_400};

        font-family: ${({ theme}) => theme.FONTS.FONT_SECONDARY};
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 100%;

        @media (min-width: 1024px) {
          width: 33%;
        }
     }

     > .wrapperCategory {
     
      > select {
        border: none;
        text-decoration: none;

        padding: 1.6rem;
          
        color: ${({ theme}) => theme.COLORS.GRAY_400};
        background: ${({ theme}) => theme.COLORS.BACKGROUND_800};

      }
     }
    }

    > .rowVersionDesktopTwo {
      display: flex;
      flex-direction: column;

      gap: 2.4rem;

      width: 100%;

      @media (min-width: 1024px) {
      display: flex;
      flex-direction: row;
    }

    .wrapperIngredients, .wrapperPrice {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;

      color: ${({ theme}) => theme.COLORS.GRAY_400};

      font-family: ${({ theme}) => theme.FONTS.FONT_SECONDARY};
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 100%;
    }

      > .wrapperIngredients {
          > .wrapperTags {
            display: flex;
            flex-wrap: wrap;

            gap: 1rem;

            width: 100%;
            
            border-radius: 0.8rem;

            background: ${({ theme}) => theme.COLORS.BACKGROUND_800};
        
            > .span {
            
            }

            @media (min-width: 1024px) {
            margin-bottom: 3rem;
            padding-left: 0rem;
            }
        }

      } 
    }

    > .wrapperDescription  {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;

      width: 100%;

      color: ${({ theme}) => theme.COLORS.GRAY_400};
      
      font-family: ${({ theme}) => theme.FONTS.FONT_SECONDARY};
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 100%;

      > textarea {
        border-radius: 0.8rem;

        width: 100%;

        padding: 1.4rem;

        text-align: justify;

        font-family: ${({ theme}) => theme.FONTS.FONT_SECONDARY};
        line-height: 100%;
        font-size: 1.6rem;

        weight: 400;
        height: 10rem;

        border: none;
        box-shadow: none;
        outline: none;

        resize: none;
        overflow-y: auto;

        color: ${({ theme }) => theme.COLORS.WHITE_100};
        background: ${({ theme}) => theme.COLORS.BACKGROUND_800};

        overflow-y: auto;

        scrollbar-color: transparent transparent; 

        &::-webkit-scrollbar {
            background: transparent;
        }

        @media (min-width: 425px) {
          height: 12rem;
          padding: 2.4rem;
        }

        @media (min-width: 768px) {
          height: 20rem;
          padding: 2.4rem;
        }

      }
    }

    > .buttonSaveOrDelete {
      display: flex;

      gap: 2rem;

      justify-content: end;

      padding-bottom: 4rem;

      width: 100%;

      > .buttonExclude {
        background: ${({ theme}) => theme.COLORS.BACKGROUND_800};
      }
      
      > button {
        text-align: center;
        font-size: 1.4rem;
        font-weight: 500;

        line-height: 120%;

        padding: 2.4rem;

        @media (min-width: 1024px) {
          width: 23.6rem;
          padding: 2.4rem;
          text-align: center;
         
        }
      }
    } 
}
`;

export const DishImgInput = styled.div`
display: flex;

align-items: center;

gap: 0.8rem; 

height: 3.5rem;
width: 100%;

padding: 1.2rem 1.4rem;

border-radius: 0.8rem;

background: ${({ theme}) => theme.COLORS.BACKGROUND_800};

  > label {
   
    cursor: pointer;

    > .share {
      display: flex;
      flex-direction: row;
      gap: 0.8rem;

      width: 100%;
      background: transparent;

      > .share-icon {
        width: 2.4rem;
        height: 2.4rem;
      }

      > span {
        color: ${({ theme}) => theme.COLORS.WHITE_100};
        text-align: center;

        font-size: 1.4rem;
        font-weight: 500;
        line-height: 2.4rem; 
      }

    }

    > input {
      display: none;
    }

  }
  
`;
