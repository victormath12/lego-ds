import React from 'react';
import ReactDOM from 'react-dom';

const DisabledButton = () => {
  return <button disabled>Disabled Button</button>
};

ReactDOM.render(<DisabledButton />, document.getElementById('container'));

