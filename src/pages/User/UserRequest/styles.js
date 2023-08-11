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

    padding: 1rem;
  
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
           
    @media (min-width: 768px) {
      padding-top: 3rem;
    }

    @media (min-width: 1024px) {
      padding-top: 3rem;
    }

    @media (min-width: 1300px) {
      padding-top: 5rem;
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
   
  display: grid;
  
  grid-template-rows: auto auto 1fr auto auto; 

  grid-template-areas: 
  "back"    
  "title"
  "section"
  "total"
  "footerButton";
  
  overflow-y: hidden;

  color: ${({ theme }) => theme.COLORS.WHITE_300};

  > .wrapperBack {
  grid-area: back;
  display: flex;
  align-items: start;
  justify-content: start;    
  }

  > .pageTitle {
    grid-area: title;
    width: 100%; 

    > h1 {
      font-size: 2.2rem;
      font-weight: 500;
      line-height: 140%; 
      
      @media (min-width: 500px) {
        font-size: 3rem;
      }
    }
  }

  > section {
    grid-area: section;
    width: 100%;
    height: 100%;
    
    overflow-x: hidden;
    overflow-y: auto;

    scrollbar-color: transparent transparent; 
      
    &::-webkit-scrollbar {
      background: transparent;
    } 

    > .request {
      display: flex;
      flex-wrap: wrap; 
      align-items: center;
      justify-content: start;

      gap: 1rem; 

      width: 100%;
      height: 60%;
      
      overflow-x: hidden;
      overflow-y: auto;

      scrollbar-color: transparent transparent; 

      &::-webkit-scrollbar {
        background: transparent;
      } 

      > p {
        font-size: 2rem;
        font-weight: 500;
        line-height: 160%;
      }
    }    
  }

  > .total {
    grid-area: total;
    font-size: 1.1rem;
    
    @media (min-width: 500px) {
      font-size: 1.4rem;
    }
  }

  > .footerButton {
    grid-area: footerButton;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    padding-bottom: 2rem;
    
    @media (min-width: 1024px) {
      align-items: end;
      justify-content: end;
    }
  
    > .buttonNext {
    width: 15rem;
    height: 3rem;
  
    @media (min-width: 500px) {
      width: 20rem;
      height: 5rem;
    }
    }
  }  
   
`;

