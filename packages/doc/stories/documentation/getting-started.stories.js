import { storiesOf } from "@storybook/html";
import welcome from "./welcome.md";
import gettingStarted from "./getting-started.md";
import contributing from "./contributing.md";
import fonts from "./fonts.md";
import icons from "./icons.md";
import theme from "./theme.md";

storiesOf("Começando/Introdução", module)
  .addParameters({
    options: {
      isToolshown: false,
      showPanel: false,
    }
  })
  .add(
    "Bem Vindo", () => `
    <div class="markdown-container">
      <zero-md>
        <template>
          <xmp>${welcome}</xmp>
        </template>
      </zero-md>
    </div>
    `,
  )
  .add("Como Começar", () => `
    <div class="markdown-container">
      <zero-md>
        <template>
          <xmp>${gettingStarted}</xmp>
        </template>
      </zero-md>
    </div>
    `,
  )
  .add("Como Contribuir", () => `
    <div class="markdown-container">
      <zero-md>
        <template>
          <xmp>${contributing}</xmp>
        </template>
      </zero-md>
    </div>
    `,
  )
  .add("Fontes", () => `
    <div class="markdown-container">
      <zero-md>
        <template>
          <xmp>${fonts}</xmp>
        </template>
      </zero-md>
    </div>
    `,
  )
