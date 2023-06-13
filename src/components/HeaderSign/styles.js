import styled from 'styled-components';

export const Container = styled.header`

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 1.1rem;

  padding: 0rem;
  
  width: 38rem;
  height: 4.4rem;

  font-family: ${({ theme }) => theme.FONTS.FONT_SECONDARY};
  font-weight: 700;
  font-size: 2.5rem;
  line-height: 4.4rem;
  `;