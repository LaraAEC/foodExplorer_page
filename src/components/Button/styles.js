import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 4.8rem;

  background-color: ${({ theme }) => theme.COLORS.RED_100};
  color: ${({ theme }) => theme.COLORS.WHITE_100};

  padding: 0rem auto;

  font-size: 1.4rem;
  font-weight: 500;

  margin-top: 3.2rem;
 
  border: 0;
  border-radius: 0.5rem;

 
  &:disabled {
    opacity: 0.5;
  }
`;