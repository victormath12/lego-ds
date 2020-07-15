import { storiesOf } from "@storybook/html";
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { withPreview, previewTemplate } from "storybook-addon-preview";
import { withActions } from '@storybook/addon-actions';
import { addReadme } from 'storybook-readme/html';

import { React, Vue, AngularModule, AngularComponent } from './templates';
import ButtonReadme from './readme.md';

storiesOf("Components/Button", module)
  .addDecorator(withKnobs)
  .addDecorator(withPreview)
  .addDecorator(addReadme)
  .addDecorator(withActions('buttonClick', 'buttonClick'))
  .addParameters({
    readme: {
      content: ButtonReadme,
      sidebar: ButtonReadme,
      codeTheme: 'atom-dark',
      theme: {
        bodyColor: '#FFF',
      }
    },
  })
  .add(
    "Base", () => `
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
    {
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
      ]
    }
  )

