'use strict';

// had enabled by egg
// exports.static = true;

exports.sequelize = {
  enable: true,
  package: 'egg-sequelize',
};

exports.cors = {
  enable: true,
  package: 'egg-cors',
}

exports.logger = {
  enable: true,
  package: 'egg-logger',
}

exports.security = {
  enable: false,
};