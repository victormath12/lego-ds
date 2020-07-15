import { addons } from '@storybook/addons';
import registerWithPanelTitle from 'storybook-readme/registerWithPanelTitle';
import theme from './theme';

addons.setConfig({
  panelPosition: 'right',
  theme: theme,
});

registerWithPanelTitle('Documentation');