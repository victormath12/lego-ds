import { Component, Host, Prop, Element, Event, EventEmitter, h, State } from '@stencil/core';
import Adapt from '@lego-ds/js-css';
import { Decorators, Utils } from '@lego-ds/utils';
import SomaInputStyle from './soma-text-field.style';

@Component({
  tag: 'soma-text-field',
  shadow: true
})
export class SomaTextField {
  @Element() el!: HTMLElement;
  /**
    [*] Define tipo de input
  */
  @Prop() @Decorators.Required() type: string = "text";
  /**
    Define mensagem de feedback
  */
  @Prop() message: string;
  /**
    Define tipo do feedback: `error`, `success`
  */
  @Prop() feedback: string;
  /**
    Define `id` da input e `for` do label
  */
  @Prop() inputId: string;
  /**
    Define a label do componente
  */
  @Prop() label: string;
  /**
    Valor de input
  */
  @Prop() value: string;
  /**
    Desabilita o componente
  */
  @Prop() disabled: boolean = false;
  /**
   * O nome do controle que é submetido junto com form data
   */
  @Prop() name: string
  /**
    Habilita ícone no componente
  */
  @Prop() icon: string;
  /**
    [*] Define string de acessibilidade `aria-label`
  */
  @Prop() @Decorators.Required() ariaLabel: string;
   /**
    Emite um `CustomEvent` com o `value` quando há input
  */
  @Event({ eventName: 'soma-change' }) somaChange!: EventEmitter<string>;
  /**
     Emite um `CustomEvent` quando há foco
  */
  @Event({ eventName: 'soma-focus' }) somaFocus!: EventEmitter<void>;
  /**
     Emite um `CustomEvent` quando há perda de foco
  */
  @Event({ eventName: 'soma-blur' }) somaBlur!: EventEmitter<void>;
  /**
    Input Focus
  */
  @State() inputFocus: boolean;
  /**
    Input HTML element
  */
  private inputEl: HTMLElement;

  private getIconColor = (disabled: boolean) =>
    disabled ? "theme.color.neutral.light.2" : "theme.color.neutral.dark.pure";

  private handleChange = (event: Event) => {
    const input = event.target as HTMLInputElement | null;
    if (input) {
      this.value = input.value || '';
      this.somaChange.emit(input.value);
    }
  }

  private renderIcon = (icon: string, disabled: boolean) => {
    if (!icon) {
      return null;
    }
    return (
      <div class="icon-field">
        <soma-icon
          icon={icon}
          color={this.getIconColor(disabled)}
          size="md"
        />
      </div>
    );
  }

  private getLabelClass = (feedback: string, disabled: boolean) => `${feedback ? feedback : ''} ${disabled ? 'disabled' : ''}`;

  private getBarClass = (feedback: string, focus: string | undefined) => `bar ${feedback ? feedback : ''} ${focus ? 'focus' : ''}`;

  private getFeedbackClass = (feedback: string) => `feedback ${feedback ? feedback : ''}`;

  private getControlClass = (icon: string | undefined) => `control ${icon ? 'icon' :''}`;

  private onFocus = () => {
    this.inputEl?.focus();
    this.inputFocus = true;
    this.somaFocus.emit();
  }

  private onBlur = () => {
    this.inputEl?.blur();
    this.inputFocus = false;
    this.somaBlur.emit();
  }

  private getInputEl = () => {
    if (this.el.shadowRoot) {
      return this.el.shadowRoot.querySelector('input');
    }
    return this.el.querySelector('input');
  }

  componentDidRender() {
    this.inputEl = this.getInputEl();
  }

  @Adapt({
    css: SomaInputStyle
  })
  render() {
    const {
      icon,
      type,
      disabled,
      value,
      ariaLabel,
      label,
      feedback,
      message,
      name,
      inputId
    } = this;

    const className = Utils.Classes.combine({
      root: 'soma-text-field',
      conditions: {
        filled: !!value || this.inputFocus
      }
    });

    return (
      <Host class={className}>
        <div class={this.getControlClass(icon)}>
          <input
            id={inputId}
            type={type}
            placeholder=""
            disabled={disabled}
            onInput={this.handleChange}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            name={name}
            aria-disabled={disabled ? true : null}
            aria-label={ariaLabel}
            value={value}
          />
          {this.renderIcon(icon, disabled)}
          <label
            class={this.getLabelClass(feedback, disabled)}
            htmlFor={inputId}
            onClick={() => this.inputEl?.focus()}
          >
            {label}
          </label>
          <div class={this.getBarClass(feedback, value)}></div>
        </div>
        {
          feedback &&
          message &&
          <span class={this.getFeedbackClass(feedback)}>{message}</span>
        }
      </Host>
    )
  }

  componentWillLoad() {}
  componentWillUpdate() {}
  connectedCallback() {}
  disconnectedCallback() {}
}


