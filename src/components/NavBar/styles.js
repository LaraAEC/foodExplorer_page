import styled from 'styled-components';

export const Container = styled.header`
  grid-area: header; 

  height: 114px;
  width: 100%;

  padding: 56px 28px 24px 28px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  
  #box {
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 16px;

    padding: 0px;
    
    width: 372px;
    height: 34px;

    justify-content: space-between;

    > #title {
      display: flex;
      flex-direction: row;
      gap: 8px;

      font-family: ${({ theme }) => theme.FONTS.FONT_SECONDARY};
      font-weight: 700;
      font-size: 21px;
      line-height: 25px;
    
    }

  }


  `;