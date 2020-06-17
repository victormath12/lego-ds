const { resolve } = require('path');
const { writeFileSync } = require('fs');
const [, , buildFolder] = process.argv;

function postbuild(buildFolder) {
  const packageFile = require(resolve('./package.json'));
  const { publishConfig, scripts, main, ...jsonFile } = packageFile;

  Object.assign(jsonFile, {
    main: './dist/cjs',
    module: './dist/esm',
  });

  writeFileSync(`${buildFolder}/package.json`, JSON.stringify(jsonFile));
}

postbuild(buildFolder);