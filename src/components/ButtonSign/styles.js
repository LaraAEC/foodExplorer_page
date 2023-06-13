import styled from 'styled-components';

export const Container = styled.button`
  width: 316px;
  height: 48px;

  background-color: ${({ theme }) => theme.COLORS.RED_100};
  color: ${({ theme }) => theme.COLORS.WHITE_100};
  padding: 12px 24px;

  font-size: 14px;
  font-weight: 500;
 
  border: 0;
  border-radius: 5px;
 
  &:disabled {
    opacity: 0.5;
  }
`;