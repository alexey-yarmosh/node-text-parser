const { REQUEST_ATTEMPT, REQUEST_SUCCESS, REQUEST_FAILURE } = require('./constants')

exports.getRequestId = dirtyRequestId => dirtyRequestId.substring(REQUEST_ATTEMPT.length + 1, dirtyRequestId.length - 1);

exports.testAttempt = str => new RegExp(`^${REQUEST_ATTEMPT}\\(\\w+\\)$`).test(str);

exports.testSuccess = str => str === `${REQUEST_SUCCESS}()`;

exports.testFailure = str => str === `${REQUEST_FAILURE}(error)`;
