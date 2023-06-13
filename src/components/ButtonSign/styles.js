import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.RED_100};
  color: ${({ theme }) => theme.COLORS.WHITE_100};

  height: 56px;
  border: 0;
  padding: 12px 24px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }
`;