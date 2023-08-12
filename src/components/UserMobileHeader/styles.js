import styled from 'styled-components';

export const Container = styled.header`
  grid-area: header; 

  height: 11.4rem;

  padding: 5.6rem 2.8rem 2.4rem 2.8rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  
  .box {
    display: flex;
    flex-direction: row;
    
    align-items: center;

    gap: 1.6rem;
    
    height: 3.4rem;

    justify-content: space-between;

    > button {
      border: none;
      background: transparent;
      padding: 0; 
      cursor: pointer;
      
      position: relative;
    }

    > button:nth-child(3) {     
      position: relative;
    }

    > button .badge {
      position: absolute;
      top: -8px;
      right: -8px;
      border-radius: 50%;

      background: ${({ theme }) => theme.COLORS.RED_300};
      color: white;
     
      width: 1.6rem;
      height: 1.6rem;

      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
    }

   
    > .title {
      display: flex;
      flex-direction: row;

      gap: 0.8rem;
      
      align-items: center;

      font-family: ${({ theme }) => theme.FONTS.FONT_SECONDARY};
      font-style: normal;
      font-weight: 700;
      font-size: 1rem;
      line-height: 2rem; 
    }
  }
 `;
