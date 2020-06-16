import { Host, Element, Component, Prop, Listen, Event, EventEmitter, h } from '@stencil/core';
import { getProps, customEvent } from '../../utils';

@Component({
  tag: 'legods-button',
  styleUrl: 'legods-button.scss',
  shadow: true,
})
export class LegoButton {
  @Element() el: any;
  @Prop() styles: any = {};
  @Prop() variant: string = "";
  @Prop() disabled: boolean = false;
  @Prop() full: boolean = false;
  @Prop() flat: boolean = false;
  @Event() buttonClick: EventEmitter<any>;

  component = {
    name: 'legods-button',
    properties: getProps(this.el.attributes),
    styles: this.styles
  }

  @Listen('click', { capture: true })
  handleClick(event) {
    !this.disabled && this.buttonClick.emit(customEvent('buttonClick', this.component, event));
  }

  render() {
    return (
      <Host style={this.full && { width: `100%` }}>    
        <button 
          {...this.component.properties}
          class={`
            legods-button 
            ${this.variant && this.variant} 
            ${this.full && 'full'} 
            ${this.flat && 'flat'} 
          `}
          style={this.styles}
          disabled={this.disabled}>
          <slot />
        </button>
      </Host>
    );
  }
}