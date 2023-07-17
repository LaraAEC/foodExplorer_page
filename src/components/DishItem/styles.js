import styled from 'styled-components';

export const Container = styled.div`
display: flex;
align-items: center;
width: 100%;

background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.GRAY_600};
color: ${({ theme }) => theme.COLORS.WHITE_100};


border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_400}` : "none"};

margin-bottom: 0.8rem;
border-radius: 1rem;
padding-right: 1.6rem;

@media (min-width: 768px) {
  width: 30%;
}

@media (min-width: 1024px) {
  width: 23%;
}

> button {
  border: none;
  background: transparent;
}

.button-delete {
  color: ${({ theme }) => theme.COLORS.WHITE_100};
}

.button-add {
  color: ${({ theme }) => theme.COLORS.GRAY_500};
}

> input {
  width: 100%;
  padding: 1rem 1.6rem;

  font-size: 14px;

  color: ${({ theme }) => theme.COLORS.WHITE_100};
  background: transparent;

  font-family: ${({ theme }) => theme.FONTS.FONT_SECONDARY};
  font-size: 16px;
  font-weight: 400;
  line-height: 100%;

  border: none;

  text-align:center;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_500};
  }
}
`;