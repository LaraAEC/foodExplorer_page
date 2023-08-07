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
    width:100%;

    margin: 0 auto;

    padding: 4.4rem;
    
    overflow-x: hidden;
    overflow-y: auto;

    scrollbar-color: transparent transparent; 
    &::-webkit-scrollbar {
        background: transparent;
    }
    
    @media (min-width: 768px) {
      padding-top: 7rem;
    }

    @media (min-width: 1024px) {
      padding-top: 10rem;
    }

    @media (min-width: 1300px) {
      padding-top: 14.5rem;
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
  height: 100vh;

  > .page {
    display: grid;
    grid-template-rows: 0.1fr auto auto 1fr;
    grid-template-areas:
    "back"
    "title"
    "section"
    "footerButton";
    
    overflow-y: hidden;

    max-width: 100%;
    height: 100vh;

    color: ${({ theme }) => theme.COLORS.WHITE_300};

    > .wrapperBack {
      grid-area: back;
      width: 31.6rem;
    
      display: flex;
      justify-content: start;
      }
  
    > .pageTitle {
      grid-area: title;
      width: 100%;
      > h1 {
        font-size: 3.2rem;
        font-weight: 500;
        line-height: 140%;  
      }
    }

    > section {
      grid-area: section;
      width: 100%;
      
      overflow-x: hidden;
      overflow-y: auto;

      scrollbar-color: transparent transparent; 

      &::-webkit-scrollbar {
        background: transparent;
      } 
     
      > .request {

        > p {
          font-size: 2rem;
          font-weight: 500;
          line-height: 160%;
        }

        > h2 {
          padding: 2rem;
        }
      }
    }

    > .footerButton {
      grid-area: footerButton;
      width: 100%;

      display: flex;
      align-items: end;
      justify-content: end;

    
      > .buttonNext {
      width: 20rem;
      height: 5rem;
      }

    }  
  }  
`;

