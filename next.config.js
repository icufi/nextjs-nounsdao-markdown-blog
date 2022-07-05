const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: '',
        mongodb_password: '',
        mongodb_clusterName: '',
        mongodb_database: '',
      },
    };
  }

  // in production values
  return {
    env: {
      mongodb_username: '',
      mongodb_password: '',
      mongodb_clusterName: '',
      mongodb_database: '',
    },
  };
};
