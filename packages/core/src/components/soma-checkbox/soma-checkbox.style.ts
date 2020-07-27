import { css } from '@lego-ds/js-css';

export default css`
  :host(.soma-checkbox) {
    display: block;
  }
  :host(.soma-checkbox) label {
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    font-family: ${props => props.theme.font.family.base};
    font-weight: ${props => props.theme.font.weight.regular};
    font-size: ${props => props.theme.font.size.xxs};
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    color: ${props => props.theme.color.neutral.dark.pure};
    width: fit-content;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    -webkit-focus-ring-color: rgba(255, 255, 255, 0);
    outline: none;
  }
  :host(.soma-checkbox) input {
    position: absolute;
    opacity: 0;
    height: 0;
    width: 0;
  }
  :host(.soma-checkbox.inverse) {
    color: ${props => props.theme.color.neutral.light['1']};
  }
  :host(.soma-checkbox) span {
    margin-left: ${props => props.theme.spacing.inset.md};
  }
  :host(.soma-checkbox) .checkmark {
    flex-shrink: 0;
    display: inline-block;
    height: 24px;
    width: 24px;
    background-color: ${props => props.theme.color.neutral.light.pure};
    border-style: ${props => props.theme.border.style.default};
    border-width: ${props => props.theme.border.width.thick};
    border-color: ${props => props.theme.color.neutral.dark['2']};
    box-sizing: border-box;
    transition: 0.1s;
  }
  :host(.soma-checkbox.inverse) .checkmark {
    background-color: ${props => props.theme.color.neutral.dark.pure};
    border-color: ${props => props.theme.color.neutral.dark['1']};
  }
  :host(.soma-checkbox.inverse:hover) input ~ .checkmark {
    border-color: ${props => props.theme.color.neutral.light.pure};
  }
  :host(.soma-checkbox.inverse) input:checked ~ .checkmark {
    background-color: ${props => props.theme.color.neutral.light.pure};
    border-color: ${props => props.theme.color.neutral.light.pure};
  }
  :host(.soma-checkbox:hover) input ~ .checkmark {
    border-color: ${props => props.theme.color.neutral.dark.pure};
  }
  :host(.soma-checkbox.inverse:hover) input ~ .checkmark {
    border-color: ${props => props.theme.color.neutral.light.pure};
  }
  :host(.soma-checkbox) input:checked ~ .checkmark {
    background-color: ${props => props.theme.color.neutral.dark.pure};
    border-color: ${props => props.theme.color.neutral.dark.pure};
  }
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }
  :host(.soma-checkbox) input:checked ~ .checkmark::after {
    display: block;
  }
  :host(.soma-checkbox) .checkmark::after {
    left: 9px;
    top: calc(50% - 7px);
    transform: translateY(-50%);
    width: 5px;
    height: 10px;
    border: solid ${props => props.theme.color.neutral.light.pure};
    border-width: 0 1.5px 1.5px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  :host(.soma-checkbox.inverse) .checkmark::after {
    border: solid ${props => props.theme.color.neutral.dark.pure};
    border-width: 0 1.5px 1.5px 0;
  }
  :host(.soma-checkbox.disabled) {
    color: ${props => props.theme.color.neutral.light['2']};
  }
  :host(.soma-checkbox.disabled) label {
    cursor: default;
  }
  :host(.soma-checkbox.inverse.disabled) {
    color: ${props => props.theme.color.neutral.dark['2']};
  }
  :host(.soma-checkbox.disabled) .checkmark {
    background-color: ${props => props.theme.color.neutral.light['1']};
    border-color: ${props => props.theme.color.neutral.light['2']};
  }
  :host(.soma-checkbox.disabled:hover) input ~ .checkmark {
    background-color: ${props => props.theme.color.neutral.light['1']};
    border-color: ${props => props.theme.color.neutral.light['2']};
  }
  :host(.soma-checkbox.inverse.disabled) .checkmark {
    background-color: ${props => props.theme.color.neutral.dark['3']};
    border-color: ${props => props.theme.color.neutral.dark['2']};
  }
  :host(.soma-checkbox.inverse.disabled:hover) input ~ .checkmark {
    background-color: ${props => props.theme.color.neutral.dark['3']};
    border-color: ${props => props.theme.color.neutral.dark['2']};
  }
  :host(.soma-checkbox.disabled) input:checked ~ .checkmark {
    background-color: ${props => props.theme.color.neutral.light['2']};
    border-color: ${props => props.theme.color.neutral.light['2']};
  }
  :host(.soma-checkbox.inverse.disabled) input:checked ~ .checkmark {
    background-color: ${props => props.theme.color.neutral.dark['2']};
    border-color: ${props => props.theme.color.neutral.dark['2']};
  }
`;
