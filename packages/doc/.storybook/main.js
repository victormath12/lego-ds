const useStencil = require('./useStencil');

module.exports = {
  stories: [
    '../stories/components/**/*.stories.(js|md)',
  ],
  addons: [
    '@storybook/addon-knobs/register',
    '@storybook/addon-actions/register',
    '@storybook/addon-backgrounds/register',
    'storybook-readme/register',
    'storybook-addon-preview/register'
  ],
  webpackFinal: async(config) => useStencil(config)
};
