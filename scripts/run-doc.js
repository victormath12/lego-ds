var shell = require("shelljs");

function runDocumentation() {
  shell.exec(`cd packages/doc && yarn dev`, { async: true });
};

runDocumentation();