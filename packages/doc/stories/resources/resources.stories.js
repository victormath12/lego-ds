import { storiesOf } from "@storybook/html";
import analytics from "./analytics.md";

storiesOf("Recursos/Analytics", module)
  .addParameters({
    options: {
      isToolshown: false,
      showPanel: false,
    }
  })
  .add(
    "Base", () => `
    <div class="markdown-container">
      <zero-md>
        <template>
          <xmp>${analytics}</xmp>
        </template>
      </zero-md>
    </div>
    `,
  );

storiesOf("Recursos/Design Tokens", module)
  .addParameters({
    options: {
      isToolshown: false,
      showPanel: false,
    }
  })
  .add(
    "Base", () => `
    <div class="markdown-container">
      <zero-md>
        <template>
          <xmp>${analytics}</xmp>
        </template>
      </zero-md>
    </div>
    `,
  );

storiesOf("Recursos/Fontes", module)
  .addParameters({
    options: {
      isToolshown: false,
      showPanel: false,
    }
  })
  .add(
    "Base", () => `
    <div class="markdown-container">
      <zero-md>
        <template>
          <xmp>${analytics}</xmp>
        </template>
      </zero-md>
    </div>
    `,
  );

storiesOf("Recursos/Icones", module)
  .addParameters({
    options: {
      isToolshown: false,
      showPanel: false,
    }
  })
  .add(
    "Base", () => `
    <div class="markdown-container">
      <zero-md>
        <template>
          <xmp>${analytics}</xmp>
        </template>
      </zero-md>
    </div>
    `,
  );