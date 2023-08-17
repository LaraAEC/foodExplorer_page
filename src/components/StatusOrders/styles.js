import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  width: 100%;

  @media(max-width: 820px) {
    display: grid;
    position: relative;
    grid-template-areas: 
    "code date date"
    "details details details"
    "selectStatus selectStatus selectStatus";

    border: 2px solid ${({ theme }) => theme.COLORS.BACKGROUND_1000};
    margin-bottom: 2.4rem;
    border-radius: 1rem;

    .selectStatus {
    grid-area: selectStatus;
    border: none;
    gap: 1rem;
    display: flex;
    margin-bottom: 2rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    max-width: 31.5rem;
    margin: 0 auto;
    margin-bottom: 2rem;
    height: 5rem;
    border-radius: 0.8rem;

    p {
      position: relative;
    }

    select {
      padding: 0 3rem;
    }
  }

  .code {
    grid-area: code;
    border: none;
  }

  .details {
    grid-area: details;
    text-align: center;
    border: none;
    min-width: 5rem;
    max-width: 50rem;
    overflow-y: hidden;
    margin: 0 auto;
  }

  .date {
    grid-area: date;
    border: none;
  }
}

  > div {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 2.5rem;
    border: 2px solid ${({ theme }) => theme.COLORS.BACKGROUND_1000};
    border-top: none;
    min-width: 15rem;


    p {
      position: absolute;
      font-size: 4.3rem;
      left: 13%;

      color: ${({ value, theme }) => value === "Preparando" && theme.COLORS.ORANGE};
      color: ${({ value, theme }) => value === "Pendente" && theme.COLORS.RED_100};
      color: ${({ value, theme }) => value === "Entregue" && theme.COLORS.GREEN};
    }

    select {
      padding: 1.5rem 3rem;
      width: 100%;
      background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      color: ${({ theme }) => theme.COLORS.GRAY_400};
      border: none;
      outline: none;
      border-radius: 3px;
      font-size: 1.4rem;
      font-weight: 400;
     
      font-family: ${({ theme }) => theme.FONTS.FONT_SECONDARY};

      @media(max-width: 820px) {
        border: none;
      }

      :hover {
        cursor: pointer;
      }
    }

  }

  li:nth-child(2) {
    overflow-x: hidden;
  }

  li:nth-child(3) {
    min-width: 40rem;
    overflow-x: hidden;
  }

  li {
    display: flex;
    gap: 6rem;
    flex-direction: column;

    font-family: ${({ theme }) => theme.FONTS.FONT_SECONDARY};
    font-size: 1.5rem;
    font-weight: 400;

  }
`;