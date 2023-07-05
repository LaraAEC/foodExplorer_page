import styled from 'styled-components';

export const Container = styled.textarea`
text-align: justify;
overflow-wrap: break-word;
      
width: 100%;
height: auto;

padding: 2rem;

font-size: 1.6rem;
font-weight: 400;
line-height: 140%;

border: none;
box-shadow: none;
outline: none;

resize: none;

color: ${({ theme}) => theme.COLORS.WHITE_300};
background: transparent;

overflow: hidden;

rows: 1;

pointer-events: none;
user-select: none;
cursor: default;

@media (min-width: 1024px) {
   padding: 0rem;
  }


> .visible {
  overflow: hidden;
}

> .not-visible {
  white-space: normal;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
} 
`;