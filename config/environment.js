'use strict';

module.exports = function(environment) {
  console.trace();
  let ENV = {
    modulePrefix: 'my-app',
    environment
  };

  return ENV;
};
