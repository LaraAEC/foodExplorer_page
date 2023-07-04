import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  
  max-width: 76.7rem;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_200};

  @media (min-width: 1024px) {
    max-width: 144.0rem;
  }

  > main {
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: transparent transparent; 

    &::-webkit-scrollbar {
        background: transparent;
        width: 8px;    
    }
   }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.6rem;

  align-items: center;


  padding: 3.6rem 5.6rem;


  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: center;
    gap: 5rem;

  }

  > .versionDesktopColumnOne {
    display: flex;
    flex-direction: column;

    gap: 1.6rem;

    align-items: center;

    @media (min-width: 1024px) {
      gap: 4.2rem;
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
        width: 39.0rem;
        height: 38.9rem;
    }
    }
  }

  > .versionDesktopColumnTwo {
    display: flex;
    flex-direction: column;
    
    width: 31.6rem;
    height: 32.0rem;

    @media (min-width: 1024px) {
      width: 68.7rem;
      height: 30.0rem;
    }
   
    > .details {
    display: flex;
    flex-direction: column;

    align-items: center;
    
    gap: 24px;

    @media (min-width: 1024px) {
      align-items: start;
    }

    > h2 {
      font-size: 2.7rem;
      font-weight: 500;
      line-height: 140%;

      color: ${({ theme}) => theme.COLORS.WHITE_300};
    }

    > p {
      text-align: justify;

      font-size: 1.6rem;
      font-weight: 400;
      line-height: 140%;

      color: ${({ theme}) => theme.COLORS.WHITE_300};
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

