import { Component, h } from '@stencil/core';

@Component({
  tag: 'lego-button',
  styleUrl: 'lego-button.css',
  shadow: true,
})
export class LegoButton {

  render() {
    return (
      <button class="lego-button">Its a button Guys</button>
    );
  }

}
