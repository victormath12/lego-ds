import { addons } from '@storybook/addons';
import theme from './theme';

addons.setConfig({
  theme: theme,
});

setTimeout(function() {
  addons.elements.panel["REACT_STORYBOOK/readme/panel"].title = "Documentação";
  addons.elements.panel["storybook/actions/panel"].title = "Eventos";
  addons.elements.panel["storybookjs/knobs/panel"].title = "Propriedades";
  addons.elements.panel["naver/storyboook-addon-preview/panel"].title = "Snippets";
  addons.elements.panel["storybook/a11y/panel"].title = "Acessibilidade";
  addons.elements.panel["storybook-addon-figma/addon-panel"].title = "Design";
}, 0);