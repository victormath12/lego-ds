var shell = require("shelljs");

function runAllLabsApps() {
  console.log(`------------------------------------`);
  console.log(`🚀 Lauching All Labs Apps`);
  console.log(`------------------------------------`);
  
  shell.exec('yarn dev:stencil', { async: true });
  shell.exec('yarn dev:angular', { async: true });
  shell.exec('yarn dev:react', { async: true });
  shell.exec('yarn dev:vue', { async: true });
};

runAllLabsApps();