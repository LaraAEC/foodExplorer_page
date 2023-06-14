import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 4.8rem;

  background-color: ${({ theme }) => theme.COLORS.RED_100};
  color: ${({ theme }) => theme.COLORS.WHITE_100};
  padding: 1.2rem 2.4rem;

  font-size: 1.2rem;
  font-weight: 500;
 
  border: 0;
  border-radius: 0.5rem;
 
  &:disabled {
    opacity: 0.5;
  }
`;