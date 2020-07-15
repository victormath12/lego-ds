const fs = require('fs');
const path = require('path');
const WriteFilePlugin = require('write-file-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const COLLECTION = 'collection/components';
const OUTPUT_DIR = '../../core/dist';
const PROJECT_NAME = 'lego-ds';

const getCollectionPath = () => path.join(__dirname, OUTPUT_DIR, COLLECTION);
const getEntryPointPath = () => path.join(__dirname, OUTPUT_DIR, `${PROJECT_NAME}.js`);
const getFilePath = (file, format) => path.join(__dirname, OUTPUT_DIR, `${COLLECTION}/${file}/${file}.${format}`);

const useStencil = async(config) => {
  config.entry.push(getEntryPointPath());

  fs.readdirSync(getCollectionPath()).map(file => {
    const jsFilesPath = getFilePath(file, 'js');
    const cssFilesPath = getFilePath(file, 'css');
    try {
      if (fs.existsSync(jsFilesPath)) {
        config.entry.push(jsFilesPath);
      }
      if (fs.existsSync(cssFilesPath)) {
        config.entry.push(cssFilesPath);
      }
    } catch (err) {
      console.error(err);
    }
  });

  config.plugins.push(
    new CopyPlugin([
      {
        from: OUTPUT_DIR,
        to: './',
        context: 'dist',
      },
    ])
  );
  config.plugins.push(new WriteFilePlugin());

  return config;
};

module.exports = useStencil;
