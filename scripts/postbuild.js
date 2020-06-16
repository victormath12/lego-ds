const { resolve } = require('path');
const { writeFileSync } = require('fs');
const [, , package, buildFolder] = process.argv;

console.log(package, buildFolder);

function core(buildFolder) {
  const packageFile = require(resolve('./package.json'));
  const { publishConfig, scripts, main, ...jsonFile } = packageFile;

  Object.assign(jsonFile, {
    main: './dist/cjs',
    module: './dist/esm',
    private: false,
  });

  writeFileSync(`${buildFolder}/package.json`, JSON.stringify(jsonFile));
}

// core();