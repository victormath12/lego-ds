var shell = require("shelljs");

function runAllExampleApps() {
  shell.exec('yarn dev:core', { async: true });
  shell.exec(`cd examples/with-angular && yarn dev`, { async: true });
  shell.exec(`cd examples/with-react && yarn dev`, { async: true });
  shell.exec(`cd examples/with-vue && yarn dev`, { async: true });
};

runAllExampleApps();