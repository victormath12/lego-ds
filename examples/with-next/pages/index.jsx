import React from 'react';
import styled from 'styled-components';

import { LegodsButton } from '@lego-ds/react';

const Spacing = styled.div`
  display: block;
  margin-top: 10px;
`;

export default function Home() {
  const handleClick = (event) => {
    console.log(event)
  }

  return (
    <>
      <h1>React</h1>
      <hr/>
      <section>
        
      <LegodsButton />
      </section>
    </>
  )
}
