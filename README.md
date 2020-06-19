<p align="center">
  <img src=".github/lego.png" width="100px" />
</p>

Lego.ds is an open-source Design System project based on building blocks to create an amazing cross-platform digital experiences.

## Documentation 🚧 (Under Construction)

Lego.ds is documented at [Lego.ds Documentation](https://github.com/victormath12/lego-ds).


## Architecture

Our codebase is a monorepo and individually versioned libraries.
Here's an overview of our packages:

| Package | Version | Size |
| - | - | - |
| [`@lego-ds/core`](/packages/core) | [![npm version](https://badgen.net/npm/v/@lego-ds/core)](https://www.npmjs.com/package/@lego-ds/core) | [![Bundle size](https://badgen.net/bundlephobia/minzip/@lego-ds/core)](https://bundlephobia.com/result?p=@lego-ds/core) |
| [`@lego-ds/react`](/packages/react) | [![npm version](https://badgen.net/npm/v/@lego-ds/react)](https://www.npmjs.com/package/@lego-ds/react) | [![Bundle size](https://badgen.net/bundlephobia/minzip/@lego-ds/react)](https://bundlephobia.com/result?p=@lego-ds/react) |
| [`@lego-ds/tokens`](/packages/tokens) | [![npm version](https://badgen.net/npm/v/@lego-ds/tokens)](https://www.npmjs.com/package/@lego-ds/tokens) | [![Bundle size](https://badgen.net/bundlephobia/minzip/@lego-ds/tokens)](https://bundlephobia.com/result?p=@lego-ds/tokens) |


## Bootstraping

```sh
git clone [project]
yarn bootstrap
```

## Staring and lauching all example-apps

```sh
yarn dev
```

This command will launch all lab-apps (Stencil, Angular, Vue, React) in development mode with **hot-reloading enabled**, then you can open in your web browser and start the development, all changes in the **packages/components** will reflect automatcally in all lab-apps. 🚀

| App | Package | Host |
| - | - | - |
| Stencil | packages/core | http://localhost:3003/ |
| React | packages/examples/with-react | http://localhost:3000/ |
| Vue | packages/examples/with-vue | http://localhost:3001/ |
| Angular | packages/examples/with-angular | http://localhost:3002/ |
