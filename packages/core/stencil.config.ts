import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { reactOutputTarget } from '@lego-ds/react-output-target';

export const config: Config = {
  namespace: 'lego-ds',
  taskQueue: 'async',
  globalScript: 'src/globals/configure.js',
  bundles: [
    { components: ['legods-button'] }
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
    })
  ],
  hashFileNames: true,
  enableCache: true,
};
