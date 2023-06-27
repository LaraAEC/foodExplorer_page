import styled from 'styled-components';

export const Container = styled.div`
width: 900px;
margin: 0 auto;

display: flex;
gap: 1.6rem;

overflow: hidden;

width: 69rem;

@media (min-width: 768px) {
  width: 69.5rem;
  height: 30.0rem;
}

@media (min-width: 1024px) {
  width: 95.6rem;
  height: 30.0rem;
}

@media (min-width: 1300px) {
  width: 128.8rem;  
}
`;