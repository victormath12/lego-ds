import { css } from '@lego-ds/js-css';

export default css`
  :host(.soma-text-field) {
    display: block;
  }

  label {
    font-size: ${props => props.theme.font.size.xxs};
    transform: translateY(-14px);
    color: ${props => props.theme.color.neutral.dark['1']};
    display: block;
    font-family: ${props => props.theme.font.family.base};
    font-weight: ${props => props.theme.font.weight.regular};
    left: 16px;
    position: absolute;
    transition: all 0.3s;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    cursor: text;
    text-align: left;
  }

  :host(.soma-text-field:hover) label {
    color: ${props => props.theme.color.neutral.dark['3']};
  }

  :host(.soma-text-field:hover) label.disabled {
    color: ${props => props.theme.color.neutral.light['2']};
  }

  label.disabled {
    cursor: default;
    color: ${props => props.theme.color.neutral.light['2']};
  }

  .control {
    background: ${props => props.theme.color.neutral.light['1']};
    border-radius: ${props => props.theme.border.radius.default};
    overflow: hidden;
    position: relative;
    width: 100%;
  }

  .bar {
    border-bottom: 2px solid ${props => props.theme.color.neutral.dark.pure};
    bottom: 0;
    content: "";
    display: block;
    left: 0;
    margin: 0 auto;
    position: absolute;
    right: 0;
    transition: all 0.3s;
    width: 0px;
  }

  .bar.success {
    border-bottom: 2px solid ${props => props.theme.color.feedback.success};
  }

  .bar.error {
    border-bottom: 2px solid ${props => props.theme.color.feedback.error};
  }

  input {
    appearance: none;
    background: transparent;
    border: none;
    border-bottom: 2px solid transparent;
    color: ${props => props.theme.color.neutral.dark['2']};
    display: block;
    font-size: ${props => props.theme.font.size.xxs};
    outline: 0;
    padding: 26px 16px 10px 16px;
    width: 100%;
    height: 64px;
    box-sizing: border-box;
    -webkit-transition: all 0.1s ease-out;
    transition: all 0.1s ease-out;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance:textfield;
  }

  input:visited {
    background-color: ${props => props.theme.color.neutral.dark['2']};
  }

  input:active {
    background-color: ${props => props.theme.color.neutral.light['1']};
  }

  input:disabled {
    background-color: ${props => props.theme.color.neutral.light['1']};
    color: ${props => props.theme.color.neutral.light['2']};
  }

  input:-ms-input-placeholder ~ label {
    font-size: ${props => props.theme.font.size.xxs};
    color: ${props => props.theme.color.neutral.dark['1']};
    transform: translateY(0);
  }

  input:hover:-ms-input-placeholder ~ label {
    color: ${props => props.theme.color.neutral.dark['3']};
  }

  input::-ms-clear {
    display: none;
  }

  :host(.soma-text-field.filled) input ~ label {
    font-size: ${props => props.theme.font.size.us};
    transform: translateY(-20px);
    color: ${props => props.theme.color.neutral.dark['2']};
  }

  :host(.soma-text-field.filled) input ~ label.success {
    color: ${props => props.theme.color.feedback.success};
  }

  :host(.soma-text-field.filled) input ~ label.error {
    color: ${props => props.theme.color.feedback.error};
  }

  input:focus ~ .bar,
  .bar.focus {
    width: 100%;
  }

  input:disabled:-ms-input-placeholder ~ label {
    color: ${props => props.theme.color.neutral.light['2']};
  }

  input:disabled:placeholder-shown ~ label {
    color: ${props => props.theme.color.neutral.light['2']};
  }

  .feedback {
    font-family: "Roboto";
    font-size: ${props => props.theme.font.size.us};
  }

  .feedback.error {
    color: ${props => props.theme.color.feedback.error};
  }

  .feedback.success {
    color: ${props => props.theme.color.feedback.success};
  }

  .soma-text-field.error {
    display: block;
    margin-bottom: ${props => props.theme.spacing.stack.xs};
  }

  :host(.soma-text-field.error) input:placeholder-shown ~ label {
    color: ${props => props.theme.color.feedback.error};
  }

  :host(.soma-text-field.error) input {
    border-bottom: 2px solid ${props => props.theme.color.feedback.error};
  }

  :host(.soma-text-field.error) input:focus ~ label {
    color: ${props => props.theme.color.feedback.error};
    color: ${props => props.theme.color.feedback.error};
  }

  .control.icon label {
    left: 56px;
  }

  .control.icon input{
    padding-left: 56px;
  }

  .icon-field {
    position: absolute;
    width: 24px;
    height: 24px;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
`
