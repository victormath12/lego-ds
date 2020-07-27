import { Host, Element, Prop, Component, h } from '@stencil/core';

@Component({
  tag: 'legods-input',
  styleUrl: 'legods-input.scss',
  shadow: true,
})
export class LegoInput {
  @Element() el: any;

  @Prop() label: string;
  @Prop() value: string;
  @Prop() inputId: string;
  @Prop() name: string;
  @Prop() disabled: boolean = false;

  render() {
    // const { label, value, disabled, inputId } = this;
    return (
      <Host> 
        <h1>Hey</h1>
      </Host>
    );
  }
}