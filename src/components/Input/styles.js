import styled from 'styled-components';

export const Container = styled.div `
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  margin-top: 0.8rem;
  margin-bottom: 2.8rem;

  border-radius: 0.8rem;

  > input {
    height: 4.8rem;
    width: 100%;

    padding: 1.2rem 1.4rem;
    
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    background: transparent;
    border: 0;

    &::placeholder {
      font-family: ${({ theme }) => theme.FONTS.FONT_SECONDARY};
      font-weight: 400;
      font-size: 1.2rem;

      color: ${({ theme }) => theme.COLORS.GRAY_500};

      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }
  }

  > svg {
    margin-left: 1.6rem;
  }
`;

//width:100% me dá uma largura de 100% de onde o elemento estiver, ele ocupa 100% da onde ele está.
//Colocamos o background do input transparente para aproveitar o background que colocamos no Container.
//Colocamos a borda do input zero para dar a sensação de que o ícone (que está ao lado) é parte dele.
//estilizamos o placeholder desse input com &: (para acessar a propriedade placeholder)