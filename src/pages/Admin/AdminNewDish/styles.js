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
    padding: 3.6rem;
    padding-bottom: 1rem;
  }

  @media (min-width: 1280px) {
    padding: 1rem;
  }

  @media (min-width: 1400px) {
    padding: 0rem;
  }

  > .box {
    display: flex;
    flex-direction: column;
   
    @media (min-width: 320px) {
      width:24rem;

      gap: 1.6rem;

      align-items: center;
      justify-content: center;
    }

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
      display: flex;
      flex-direction: row;

      justify-content: space-between;
      align-items: center;
      padding: 2rem 2rem;

      width: 100rem;
      height: 48rem;
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
        margin-bottom: 3rem;
        padding-left: 0rem;
    }

    }

    > .buttonEdit {
      padding-bottom: 4rem;
      
      > button {
        text-align: center;
        font-size: 1.4rem;
        font-weight: 500;

        line-height: 2.4px;

        padding: 2.4rem;

        @media (min-width: 1024px) {
          width: 13.6rem;
          height: 4rem;
          padding: 2.4rem;
        }
      }
    } 
} 
`;

export const Avatar = styled.div`
  position: relative;
  margin: -124px auto 32px;

  width: 186px;
  height: 186px;

  > img {
    width: 186px;
    height: 186px;

    border-radius: 50%;
  }

  > label {
    width: 48px;
    height: 48px;

    background-color: ${({ theme }) => theme.COLORS.SALMON};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.COLORS.SMOKE};
    }
  }
  
`;

