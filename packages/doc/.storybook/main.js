const useStencil = require('./useStencil');

module.exports = {
  stories: [
    '../stories/**/**/*.stories.@(js|mdx)',
  ],
  addons: [
    'storybook-readme/register',
    '@storybook/addon-knobs/register',
    'storybook-addon-root-attribute/register',
    '@storybook/addon-actions/register',
    '@storybook/addon-backgrounds/register',
    'storybook-addon-preview/register',
    '@storybook/addon-viewport/register',
    '@storybook/addon-a11y/register',
    'storybook-addon-figma/register',
    '@storybook/addon-options/register',
    '@storybook/addon-links/register'
  ],
  webpackFinal: async(config) => useStencil(config)
};