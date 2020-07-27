import { addParameters, addDecorator } from '@storybook/html';
import { setOptions } from '@storybook/addon-options';
import { withRootAttribute } from "storybook-addon-root-attribute";
import { withLinks } from '@storybook/addon-links'

import { applyPolyfills, defineCustomElements } from '@lego-ds/html/loader';
import SomaDS from '@lego-ds/design-tokens';

applyPolyfills().then(() => {
  defineCustomElements();
});

setOptions({
  downPanelInRight: true,
});

addDecorator(withRootAttribute);
addDecorator(withLinks);
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
  rootAttribute: {
    root: '#root',
    attribute: 'class',
    defaultState: {
      name: "XP",
      value: "xp"
    },
    states: [
      {
        name: "Clear",
        value: "placeholder"
      }
    ]
  }
});

// Theme Changer - Observer
const preview = document.getElementById('root');
function callback(mutationsList, observer) {
  mutationsList.forEach(mutation => {
    if (mutation.attributeName === 'class' && mutation.target.className) {
      SomaDS.use(mutation.target.className);
      return;
    }
  })
};
const mutationObserver = new MutationObserver(callback);
mutationObserver.observe(preview, { attributes: true });

