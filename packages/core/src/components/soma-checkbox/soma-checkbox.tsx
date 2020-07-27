import { Component, Element, Host, Prop, Event, EventEmitter, h } from '@stencil/core';
import { Decorators, Utils } from '@lego-ds/utils';
import Adapt from '@lego-ds/js-css';
import SomaCheckboxStyle from './soma-checkbox.style';

@Component({
  tag: 'soma-checkbox',
  shadow: true
})
export class SomaCheckbox {
  @Element() el!: HTMLElement;
  /**
    Define se está selecionado
  */
  @Prop() checked: boolean = false;
  /**
    Modifica o tema para inverse
  */
  @Prop() inverse: boolean = false;
  /**
    Desabilita o componente
  */
  @Prop() disabled: boolean = false;
  /**
    O valor do checkbox
  */
  @Prop() value?: any | null;
  /**
    Define a `label`
  */
  @Prop() label: string;
  /**
    [*] Define string de acessibilidade `aria-label`
  */
  @Prop() @Decorators.Required() ariaLabel: string;
  /**
    Emite um `CustomEvent` com `checked` quando `checked` muda
   */
  @Event({ eventName: 'soma-change' }) somaChange!: EventEmitter<boolean>;
  /**
    Emite um `CustomEvent` quando há foco
   */
  @Event({ eventName: 'soma-focus' }) somaFocus!: EventEmitter<void>;
  /**
    Emite um `CustomEvent` quando há perda de foco
   */
  @Event({ eventName: 'soma-blur' }) somaBlur!: EventEmitter<void>;

  private handleClick = (event: MouseEvent) => {
    event.preventDefault();
    if (this.disabled) return;
    this.checked = !this.checked;
    this.somaChange.emit(this.checked);
  }

  private onFocus = () => {
    this.somaFocus.emit();
  }

  private onBlur = () => {
    this.somaBlur.emit();
  }

  @Adapt({
    css: SomaCheckboxStyle
  })
  render() {
    const { inverse, disabled, value, ariaLabel, checked, label } = this;
    const className = Utils.Classes.combine({
      root: 'soma-checkbox',
      conditions: {
        inverse,
        disabled,
      }
    });

    return (
      <Host
        role="checkbox"
        class={className}
      >
        <label
          onClick={(e: MouseEvent) => {
            e.preventDefault();
            this.handleClick(e);
          }}
          aria-disabled={disabled ? 'true' : null}
          aria-checked={`${checked}`}
          aria-label={ariaLabel}
        >
          <input
            onClick={e => e.preventDefault()}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            type="checkbox"
            checked={checked}
            disabled={disabled}
            value={value}
          />
          <div class="checkmark"></div>
          {label ? <span>{label}</span> : null}
        </label>
      </Host>
    );
  }

  componentWillLoad() {}
  componentWillUpdate() {}
  connectedCallback() {}
  disconnectedCallback() {}
}
