import { addParameters } from '@storybook/html';
import { setOptions } from '@storybook/addon-options';

setOptions({
  downPanelInRight: true,
});

addParameters({
  options: {
    panelPosition: 'right',
    isToolshown: true,
    showPanel: true,
    showNav: true,
    showRoots: true,
  },
  readme: {
    codeTheme: 'atom-dark',
    theme: {
      bodyColor: '#FFF',
    }
  },
  backgrounds: [
    { name: 'White', value: '#FFFFFF', default: true},
    { name: 'Green', value: '#D6FCF7'},
    { name: 'Red', value: '#FFF3F8'},
    { name: 'Yellow', value: '#FFF4CC'}
  ],
});