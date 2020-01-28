const { findSync } = require('find-in-files');
const path = require('path');

const { REQUEST_ATTEMPT } = require('./constants');
const parser = require('./parser');

findSync(new RegExp(`${REQUEST_ATTEMPT}\\(`), './').then(result => {
  const paths = Object.keys(result);
  const fullPaths = paths.map(elem => elem);
  console.log(fullPaths);
  fullPaths.forEach(parser);
}).catch(e => {
  console.error(e);
});
