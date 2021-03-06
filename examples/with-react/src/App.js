import React from 'react';
import styled from 'styled-components';
import { LegodsButton } from '@lego-ds/react';

const Spacing = styled.span`
  margin: 10px;
`;

function App() {
  const handleClick = (event) => {
    console.log(event)
  }

  return (
    <div className="App">
      <img src="./logo.png" width="80px" />
      <hr />
      <section>
        <Spacing>
          <LegodsButton onButtonClick={event => handleClick(event.detail)}>Default</LegodsButton>
        </Spacing>
        <Spacing>
          <LegodsButton variant="primary" onButtonClick={event => handleClick(event.detail)}>Primary</LegodsButton>
        </Spacing>
        <Spacing>
          <LegodsButton variant="secondary" onButtonClick={event => handleClick(event.detail)}>Secondary</LegodsButton>
        </Spacing>
        <Spacing>
          <LegodsButton variant="tertiary" onButtonClick={event => handleClick(event.detail)}>Tertiary</LegodsButton>
        </Spacing>
        <Spacing>
          <LegodsButton variant="dark" onButtonClick={event => handleClick(event.detail)}>Dark</LegodsButton>
        </Spacing>
      </section>

      <h3>Flat Buttons</h3>
      <section>
        <Spacing>
          <LegodsButton flat onButtonClick={event => handleClick(event.detail)}>Default</LegodsButton>
        </Spacing>
        <Spacing>
          <LegodsButton flat variant="primary" onButtonClick={event => handleClick(event.detail)}>Primary</LegodsButton>
        </Spacing>
        <Spacing>
          <LegodsButton flat variant="secondary" onButtonClick={event => handleClick(event.detail)}>Secondary</LegodsButton>
        </Spacing>
        <Spacing>
          <LegodsButton flat variant="tertiary" onButtonClick={event => handleClick(event.detail)}>Tertiary</LegodsButton>
        </Spacing>
        <Spacing>
          <LegodsButton flat variant="dark" onButtonClick={event => handleClick(event.detail)}>Dark</LegodsButton>
        </Spacing>
      </section>

      <h3>Disabled Button</h3>
      <section>
        <Spacing>
          <LegodsButton flat variant="primary" disabled onButtonClick={event => handleClick(event.detail)}>disabled flat button</LegodsButton>
        </Spacing>
        <Spacing>
          <LegodsButton variant="primary" disabled onButtonClick={event => handleClick(event.detail)}>disabled button</LegodsButton>
        </Spacing>
      </section>

      <h3>Full Width Button</h3>
      <section>
        <Spacing>
          <LegodsButton flat full onButtonClick={event => handleClick(event.detail)}>Full width flat button</LegodsButton>
        </Spacing>
        <Spacing>
          <LegodsButton full onButtonClick={event => handleClick(event.detail)}>Full with button</LegodsButton>
        </Spacing>
      </section>

      <h3>Styled Button</h3>
      <section>
        <Spacing>
          <LegodsButton
            variant='secondary'
            aria-label="teste de a11y"
            styles={{ 
              width: '200px',
              height: '80px',
              backgroundColor: '#ff57ac'
            }}
            onButtonClick={event => handleClick(event.detail)}>
              Styled Button
          </LegodsButton>
        </Spacing>
      </section>
    </div>
  );
}

export default App;
