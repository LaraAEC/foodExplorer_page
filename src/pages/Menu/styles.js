import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: stretch;

  width:100%;
  height: 100%;

  max-width: 428px;

  margin-top: 14rem;


  margin: 0 auto;

  background: pink;

  > #closeMenu {
    background: green;

  }

  > .page {
    padding: 158px 47px 300px 47px;
    margin: 0 auto;
  }

`;
