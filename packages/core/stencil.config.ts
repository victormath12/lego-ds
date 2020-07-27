import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { reactOutputTarget } from '@lego-ds/react-output-target';
import replace from '@rollup/plugin-replace';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

// const plugins = process.env.USE_PEER == 'true' ? [peerDepsExternal()] : []

const plugins = process.env.USE_PEER == 'true' ? [peerDepsExternal()] : [];

plugins.push(
  replace({
    TARGET_TAG: process.env.TARGET_TAG,
    delimiters: ["@", "@"]
  })
);

export const config: Config = {
  namespace: 'lego-ds',
  taskQueue: 'async',
  globalScript: 'src/globals/configure.js',
  bundles: [
    { components: ['legods-button', 'legods-input', 'soma-text-field', 'soma-checkbox'] }
  ],
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: '@lego-ds/core',
      proxiesFile: '../react/src/components.ts',
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null
    },
  ],
  plugins: [
    sass({
      injectGlobalPaths: [
        'src/globals/styles/variables.scss',
        'src/globals/styles/mixins.scss'
      ]
    }),
    ...plugins
  ],
  hashFileNames: true,
  enableCache: true,
};
