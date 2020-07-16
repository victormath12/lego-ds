import { storiesOf } from "@storybook/html";
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { withPreview, previewTemplate } from "storybook-addon-preview";
import { withActions } from '@storybook/addon-actions';
import figmaDecorator from 'storybook-addon-figma';
import { addReadme } from 'storybook-readme/html';

import { React, Vue, AngularModule, AngularComponent } from './templates';
import ButtonReadme from './readme.md';

storiesOf("Componentes/Button", module)
  .addDecorator(addReadme)
  .addDecorator(withKnobs)
  .addDecorator(withPreview)
  .addDecorator(withActions('buttonClick', 'buttonClick'))
  .addDecorator(figmaDecorator({
    url: 'https://www.figma.com/file/KaBWI7Bdi6npuOjPDmhBTm/Design-System?node-id=155%3A8949',
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
    "Default", () => `
      <div style="height: 100vh; display: flex; justify-content: center; align-items: center;">
        <legods-button
          flat="${boolean("flat", false)}"
          full="${boolean("full", false)}"
          variant="${select("variant", ["default", "primary", "secondary", "tertiary", "dark"], "default")}"
          disabled="${boolean("disabled", false)}"
        >
          ${text("label", "Lego Button")}
        </legods-button>
      </div>
    `,
  )
  .add(
    "Flat", () => `
      <div style="height: 100vh; display: flex; justify-content: center; align-items: center;">
        <legods-button
          flat="${boolean("flat", true)}"
          full="${boolean("full", false)}"
          variant="${select("variant", ["default", "primary", "secondary", "tertiary", "dark"], "default")}"
          disabled="${boolean("disabled", false)}"
        >
          ${text("label", "Lego Button")}
        </legods-button>
      </div>
    `,
  )
  .add(
    "Full", () => `
      <div style="height: 100vh; display: flex; justify-content: center; align-items: center;">
        <legods-button
          flat="${boolean("flat", false)}"
          full="${boolean("full", true)}"
          variant="${select("variant", ["default", "primary", "secondary", "tertiary", "dark"], "default")}"
          disabled="${boolean("disabled", false)}"
        >
          ${text("label", "Lego Button")}
        </legods-button>
      </div>
    `,
  )
