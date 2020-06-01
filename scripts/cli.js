var shell = require("shelljs");

function createComponent() {
  const componentName = process.argv.slice(2)[0];
  console.log(`📦 Creating new component: lego-${componentName}`);
  shell.exec(`cd packages/components && yarn new lego-${componentName}`);
};

createComponent();