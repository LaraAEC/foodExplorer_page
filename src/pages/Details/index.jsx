import { Container } from './styles';


import { NavBar } from '../../components/NavBar';

import { Button } from '../../components/Button';

export function Details() {
  return (
    <Container>
       <NavBar />
      
      <Button title="incluir" loading />
    </Container>
  )
}