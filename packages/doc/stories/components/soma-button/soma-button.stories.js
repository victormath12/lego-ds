import { storiesOf } from "@storybook/html";
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { withPreview, previewTemplate } from "storybook-addon-preview";
import { withActions } from '@storybook/addon-actions';
import withFigma from 'storybook-addon-figma';
import { addReadme } from 'storybook-readme/html';

import { React, Vue, AngularModule, AngularComponent } from './templates';
import ButtonReadme from './readme.md';

storiesOf("Componentes/Button", module)
  .addDecorator(addReadme)
  .addDecorator(withKnobs)
  .addDecorator(withPreview)
  .addDecorator(withActions('soma-click', 'soma-click'))
  .addDecorator(withFigma({
    url: 'https://www.figma.com/file/ntPZXIYMXk6hbNnQOZ5jax/Soma_Web%E2%80%93%E2%80%93XPI%E2%80%93%E2%80%93Core_Components?node-id=1208%3A462',
  }))
  .addParameters({
    readme: { sidebar: ButtonReadme },
    preview: [
      {
          tab: "React",
          template: previewTemplate`${React}`,
          language: "jsx",
          copy: true,
      },
      {
        tab: "Vue",
        template: previewTemplate`${Vue}`,
        language: "html",
        copy: true,
      },
      {
        tab: "Angular",
        description: "app.module.ts",
        template: previewTemplate`${AngularModule}`,
        language: "typescript",
      },
      {
        tab: "Angular",
        description: "app.component.ts",
        template: previewTemplate`${AngularComponent}`,
        language: "html",
      },
    ],
  })
  .add(
    "Base", () => `
      <div style="height: 100vh; display: flex; justify-content: center; align-items: center;">
        <soma-button
          size="${select("size", ["sm", "md", "lg",], "md")}"
          modifier="${select("modifier", ["primary", "secondary", "ghost"], "primary")}"
          ariaLabel="${text("aria-label", "Clique para...")}"
          disabled="${boolean("disabled", false)}"
          inverse="${boolean("inverse", false)}"
          icon="${select("icon", ["alert-triangle-fill", ""], "")}"
        >
          ${text("label", "Soma Button")}
        </soma-button>
      </div>
    `,
  )
