var shell = require("shelljs");

function runDocumentation() {
  shell.exec('yarn dev:core', { async: true });
  shell.exec(`cd packages/doc && yarn dev`, { async: true });
};

runDocumentation();