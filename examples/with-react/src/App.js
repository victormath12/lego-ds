import React, {useState} from 'react';
import styled from 'styled-components';
import { LegodsButton } from '@lego-ds/react';

// Soma DS
import { SomaButton, SomaCheckbox, SomaTextField } from '@lego-ds/reactor';
import SomaDS from '@lego-ds/design-tokens';

const Spacing = styled.span`
  margin: 10px;
`;

// Set initial theme
SomaDS.use('xp');

const App = () => {
  const initialState = {
    name: '',
    age: null,
    maroto: false
  };

  const [formResult, setFormResult] = useState(initialState);

  const handleClick = (event) => {
    console.log(event)
  }

  return (
    <div className="App">
      <img src="./logo.png" width="80px" />
      <hr />
      <section>
        <p>{JSON.stringify(formResult)}</p>
        <Spacing>
          <SomaButton onClick={() => SomaDS.use('xp')}>USAR XP</SomaButton>
        </Spacing>
        <Spacing>
          <SomaButton onClick={() => SomaDS.use('placeholder')}>USAR CLEAR</SomaButton>
        </Spacing>

        <br/><hr/><br/>

        <Spacing>
          <form>
            <SomaTextField
              label="Nome"
              ariaLabel="digite..."
              somaChange={event => setFormResult({...formResult, name: event.detail})}>  
            </SomaTextField>

            <SomaTextField
              type="number"
              label="Idade"
              ariaLabel="digite..."
              somaChange={event => setFormResult({...formResult, age: event.detail})}>  
            </SomaTextField>

            <SomaCheckbox
              label="Checkbox marotão"
              checked={formResult.maroto}
              ariaLabel=""
              somaChange={() => setFormResult({...formResult, maroto: !formResult.maroto})}></SomaCheckbox>
          </form>
         </Spacing> 

      </section>
    </div>
  );
}

export default App;
