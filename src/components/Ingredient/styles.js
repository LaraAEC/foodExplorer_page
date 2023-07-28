import styled from 'styled-components';

export const Container = styled.span`
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;

  padding: 4px 8px;

  border-radius: 5px;
  margin-right: 6px;

  color: ${({ theme }) => theme.COLORS.WHITE_100};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
`;

