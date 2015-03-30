/* jshint ignore:start */
/**
 * New Relic agent configuration.
 *
 * See lib/config.defaults.js in the agent distribution for a more complete
 * description of configuration variables and their potential values.
 */
exports.config = {
  /**
   * Array of application names.
   */
  app_name: ['tox-ccc-ui'],
  /**
   * Your New Relic license key.
   */
  license_key: 'c23b2497e1eadf6701fdb1fecf8d482a622dda0b',
  logging: {
    /**
     * Level at which to log. 'trace' is most useful to New Relic when diagnosing
     * issues with the agent, 'info' and higher will impose the least overhead on
     * production applications.
     */
    level: 'debug'
  }
};
/* jshint ignore:end */