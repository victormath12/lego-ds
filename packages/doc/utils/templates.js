const markdown = ({ header, content, footer }) => `
  <section class="markdown-container">
    <section class="markdown-content">
      <header>
        ${header || ''}
      </header>
      <zero-md>
        <template>
          <xmp>${content}</xmp>
        </template>
      </zero-md>
      <footer>
        ${footer || ''}
      </footer>
    </section>
  </section>
`;

const pageTitle = title => `
  <soma-typography modifier="heading-3" variant="heading">
    ${title}
  </soma-typography>
  <br />
`;

const pageSubtitle = subtitle => `
  <soma-typography modifier="subtitle-2" variant="subtitle">
    ${subtitle}
  </soma-typography>
  <br />
`;

export { markdown, pageTitle, pageSubtitle};