import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 3.5rem;

  background-color: ${({ theme }) => theme.COLORS.RED_100};
  color: ${({ theme }) => theme.COLORS.WHITE_100};

  padding: 0rem auto;

  font-size: 1.1rem;
  font-weight: 500;

  margin-top: 2.2rem;
 
  border: 0;
  border-radius: 0.4rem;

 
  &:disabled {
    opacity: 0.5;
  }
`;