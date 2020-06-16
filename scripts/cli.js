var shell = require("shelljs");
const Listr = require('listr');
const { green, bold } = require("colorette");

function createComponent() {
  const componentName = process.argv.slice(2)[0];
  console.log(`📦 Creating new component: legods-${componentName}`);
  shell.exec(`cd packages/components && yarn new legods-${componentName}`);
  console.log(bold(green(`✅ legods-${componentName} created successfully`)));
};

createComponent();