var GAPlugin = {};

var exec = require('cordova/exec');

/**
 * Initialize google analytics with an account ID and the min number of seconds
 * between posting
 *
 * @param {string} id - The GA account ID of the form 'UA-00000000-0'
 * @param {number} period - The minimum interval for transmitting tracking
 *                          events if any exist in the queue
 */
GAPlugin.prototype.init = function(success, fail, id, period) {
  return exec(success, fail, 'GAPlugin', 'initGA', [id, period]);
};

/**
 * Log an event
 *
 * @param {string} category - The event category.
 * @param {string} eventAction - The event action.
 * @param {string} [eventLabel] - The event label.
 * @param {number} eventValue - The event value. This parameter may be -1 to
 *                              indicate no value.
 */
GAPlugin.prototype.trackEvent = function(success, fail, category, eventAction, eventLabel, eventValue) {
  return exec(success, fail, 'GAPlugin', 'trackEvent', [category, eventAction, eventLabel, eventValue]);
};


/**
 * Log a page view
 *
 * @param {string} pageURL - The URL of the page view
 */
GAPlugin.prototype.trackPage = function(success, fail, pageURL) {
  return exec(success, fail, 'GAPlugin', 'trackPage', [pageURL]);
};

/**
 * Set a custom variable. The variable set is included with the next event only.
 * If there is an existing custom variable at the specified index, it will be
 * overwritten by this one.
 *
 * @param {string} value - The value of the variable you are logging
 * @param {number} index - The numerical index of the dimension to which this
 *                         variable will be assigned (1 - 20)
 *                         Standard accounts support up to 20 custom dimensions.
 */
GAPlugin.prototype.setVariable = function(success, fail, index, value) {
  return exec(success, fail, 'GAPlugin', 'setVariable', [index, value]);
};

GAPlugin.prototype.exit = function(success, fail) {
  return exec(success, fail, 'GAPlugin', 'exitGA', []);
};

module.exports = GAPlugin;
