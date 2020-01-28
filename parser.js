const fs = require('fs');
const { getRequestId, testAttempt, testSuccess, testFailure } = require('./utils');
const { REQUEST_ATTEMPT, REQUEST_SUCCESS, REQUEST_FAILURE } = require('./constants')

function updateFile (path) {
  let content = fs.readFileSync(path, 'utf-8');

  const requestActions = content.match(new RegExp(`(${REQUEST_ATTEMPT}|${REQUEST_SUCCESS}|${REQUEST_FAILURE})\\(\\w*\\)`, 'g'))
    .filter(str => testAttempt(str) || testSuccess(str) || testFailure(str));
  console.log('All data:', requestActions);

  let requestId = null;
  requestActions.forEach(item => {
    console.log('item:', item);
    if (testAttempt(item)) {
      requestId = getRequestId(item);
      console.log(`New requestId: ${requestId}`);
    } else if (testSuccess(item)) {
      const newContent = content.replace(item, `${REQUEST_SUCCESS}(${requestId})`);
      fs.writeFileSync(path, newContent, 'utf-8');
      content = fs.readFileSync(path, 'utf-8')
      console.log(`${REQUEST_SUCCESS} value updated`)
    } else if (testFailure(item)) {
      const newContent = content.replace(item, `${REQUEST_FAILURE}(${requestId}, error)`)
      fs.writeFileSync(path, newContent, 'utf-8');
      content = fs.readFileSync(path, 'utf-8')
      console.log(`${REQUEST_FAILURE} value updated`)
    }
  })
}

module.exports = updateFile;
