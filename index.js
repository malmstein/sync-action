const core = require('@actions/core');
const github = require('@actions/github');

try {
  console.log(`Generating account recovery code`);
  const time = (new Date()).toTimeString();
  core.setOutput("recovery-code", time);
} catch (error) {
  core.setFailed(error.message);
}