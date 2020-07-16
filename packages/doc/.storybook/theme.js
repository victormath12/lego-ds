import { create } from '@storybook/theming/create';
import legodsLogo from './lego.png';
import somaLogo from './soma.png';

export default create({
    base: 'dark',
    colorPrimary: '#FFC709',
    colorSecondary: '#b88d00',

    // UI
    appBorderColor: '#212121',
    appBorderRadius: 10,

    // Typography
    fontBase: '"Roboto Slab", sans-serif',
    fontCode: 'monospace',

    // Text colors
    textColor: '#fff',
    textInverseColor: 'rgba(255,255,255,0.9)',

    // Toolbar default and active colors
    barTextColor: '#ffffff',
    barSelectedColor: '#FFC709',

    // Form colors
    inputBg: '#ffffff',
    inputBorder: '#212121',
    inputTextColor: '#121212',
    inputBorderRadius: 8,

    brandTitle: 'LEGO DS',
    brandUrl: '/',
    brandImage: somaLogo,
});
