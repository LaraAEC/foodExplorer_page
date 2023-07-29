import { Container } from './styles';

import { useState } from 'react';
import LessSvg from '../../assets/less.svg';
import MoreSvg from '../../assets/more.svg';

export function ButtonAmount() {
 let [ number, setNumber ] = useState(0);

  function Decrement(number) {
    if(number == 0) {
      setNumber(number);
    } else {
      setNumber(number - 1);
    }
  };

  function Increment(number) {
    setNumber(number + 1);
  };


  return (
    <Container>
      <div className="counter">
        <button onClick={() => Decrement(number)}>
          <img
            src={ LessSvg }
            alt="Imagem 'símbolo de subtração."
          />
        </button>
        <input readOnly value={number.toString().padStart(2, '0')} />
        <button onClick={() => Increment(number)}>
          <img
            src={ MoreSvg }
            alt="Imagem 'símbolo de adição."
            />
        </button>
      </div>
    </Container>
  );
}
