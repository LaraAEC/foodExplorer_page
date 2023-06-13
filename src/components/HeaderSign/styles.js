import styled from 'styled-components';

export const Container = styled.header`

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 11px;

  padding: 0px;
  
  width: 380px;
  height: 44px;

  font-family: ${({ theme }) => theme.FONTS.FONT_SECONDARY};
  font-weight: 700;
  font-size: 25px;
  line-height: 44px;
  `;