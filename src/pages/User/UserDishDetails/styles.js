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
      height: 525px;
    }

    @media (min-width: 1300px) {
      max-width: 140.0rem;
      height: 438px;
    }

    @media (min-width: 1400px) {
      max-width: 140.0rem;
      height: 735px;
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
  display: flex;
  flex-direction: column;

  gap: 1.6rem;

  align-items: center;
  justify-content: center;

  max-width: 100%;

  padding: 3.6rem 5.6rem;


  @media (min-width: 1024px) {
    width: 110rem;

    flex-direction: row;
    justify-content: space-between;

    padding: 3.6rem 2rem;
  }

  @media (min-width: 1300px) {
      max-width: 142.4rem; 
  }

  @media (min-width: 1370px) {
    padding: 18rem 5.6rem;
    }

  > .versionDesktopColumnOne {
    display: flex;
    flex-direction: column;

    gap: 1.6rem;

    align-items: center;

    @media (min-width: 1024px) {
      gap: 2rem;
    }

    > .wrapperBack {
    width: 31.6rem;
   
    display: flex;
    justify-content: start;
    }

    > .photoDish {
      width: 26.4rem;
      height: 26.4rem;

      @media (min-width: 1024px) {
        width: 36.0rem;
        height: 32.9rem;
    }
    }
  }

  > .versionDesktopColumnTwo {
    display: flex;
    flex-direction: column;
    
    width: 31.6rem;
    height: 32.0rem;

    @media (min-width: 1024px) {
      width: 58.7rem;
      height: 30.0rem;
    }

    > .details {
    display: flex;
    flex-direction: column;

    align-items: center;
    
    gap: 2.4rem;
   
    @media (min-width: 1024px) {
      align-items: start;
    }

    @media (min-width: 1300px) {
      width: 60rem;
      height: 40.0rem; 

      gap: 0rem;
  }

    > h2 {
      font-size: 2.7rem;
      font-weight: 500;
      line-height: 140%;

      color: ${({ theme}) => theme.COLORS.WHITE_300};
     
      @media (min-width: 1300px) {
        margin-bottom: 2rem;
    }
    }

    > .wrapperTags {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;

      padding-left: 1.5rem;
      
      margin-bottom: 4.8rem;

      @media (min-width: 1024px) {
        padding-left: 0rem;
    }

    }
  }
  > .order {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 1.6rem;

    @media (min-width: 768px) {
      align-self: center;
    }

    @media (min-width: 1024px) {
      align-self: start;
    }

    > .wrapperButton {
      display: flex;
      justify-content: center;
      align-items: center; 

      gap: 0.8rem;

      padding: 1.2rem 3rem;
      
      font-size: 1.2rem;
      font-weight: 500;

      line-height: 2px;

      border-radius: 5px;

      background-color: ${({ theme }) => theme.COLORS.RED_100};
      color: ${({ theme }) => theme.COLORS.WHITE_100};
      

      @media (min-width: 768px) {
        width: 22.8rem;
        height: 1.39rem;
        padding: 2rem 3rem;
      }

      > .receipt {
        width: 2.1rem;
        height: 2.1rem;
      }

      > button {
      text-align: center;
      font-size: 1.2rem;
      
      font-weight: 500;

      line-height: 2px;
    }
  }
}
} 
`;

