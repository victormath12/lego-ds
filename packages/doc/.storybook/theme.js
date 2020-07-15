import { create } from '@storybook/theming/create';
import legodsLogo from './lego.png'

export default create({
    base: 'dark',
    colorPrimary: '#FFC709',
    colorSecondary: '#b88d00',

    // UI
    appBorderColor: 'grey',
    appBorderRadius: 4,

    // Typography
    fontBase: '"Roboto", sans-serif',
    fontCode: 'monospace',

    // Text colors
    textColor: '#fff',
    textInverseColor: 'rgba(255,255,255,0.9)',

    // Toolbar default and active colors
    barTextColor: '#ffffff',
    barSelectedColor: '#FFC709',

    // Form colors
    inputBg: '#ffffff',
    inputBorder: 'silver',
    inputTextColor: '#121212',
    inputBorderRadius: 10,

    brandTitle: 'LEGO DS',
    brandUrl: '/',
    brandImage: legodsLogo,
});
