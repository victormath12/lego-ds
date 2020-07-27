import { storiesOf } from "@storybook/html";
import core from "./core.md";
import react from "./react.md";
import html from "./html.md";
import digitalAnalytics from "./digital-analytics.md";
import ds from "./ds.md";
import tokens from "./tokens.md";
import vecchio from "./vecchio.md";
import lab from "./lab.md";
import mobile from "./mobile.md";

storiesOf("Começando/Ecossistema", module)
  .addParameters({
    options: {
      isToolshown: false,
      showPanel: false,
    }
  })
  .add(
    "Core", () => `
    <div class="markdown-container">
      <zero-md>
        <template>
          <xmp>${core}</xmp>
        </template>
      </zero-md>
    </div>
    `,
  )
  .add("Design System", () => `
    <div class="markdown-container">
      <zero-md>
        <template>
          <xmp>${ds}</xmp>
        </template>
      </zero-md>
    </div>
    `,
  )
  .add("Digital Analytics", () => `
    <div class="markdown-container">
      <zero-md>
        <template>
          <xmp>${digitalAnalytics}</xmp>
        </template>
      </zero-md>
    </div>
    `,
  )
  .add("HTML", () => `
    <div class="markdown-container">
      <zero-md>
        <template>
          <xmp>${html}</xmp>
        </template>
      </zero-md>
    </div>
    `,
  )
  .add("Lab", () => `
    <div class="markdown-container">
      <zero-md>
        <template>
          <xmp>${lab}</xmp>
        </template>
      </zero-md>
    </div>
    `,
  )
  .add("React", () => `
    <div class="markdown-container">
      <zero-md>
        <template>
          <xmp>${react}</xmp>
        </template>
      </zero-md>
    </div>
    `,
  )
  .add("Tokens", () => `
    <div class="markdown-container">
      <zero-md>
        <template>
          <xmp>${tokens}</xmp>
        </template>
      </zero-md>
    </div>
    `,
  )
  .add("Vecchio", () => `
    <div class="markdown-container">
      <zero-md>
        <template>
          <xmp>${vecchio}</xmp>
        </template>
      </zero-md>
    </div>
    `,
  )
  .add("Mobile", () => `
    <div class="markdown-container">
      <zero-md>
        <template>
          <xmp>${mobile}</xmp>
        </template>
      </zero-md>
    </div>
    `,
  )