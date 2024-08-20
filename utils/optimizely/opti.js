/**
 * @file Optimizely Utility functions
 * @category Optimizely Utils
 * @module OptimizelyUtils
 */

/**
 * Sends a metric to Optimizely
 * @function sendOptimizelyMetric
 * @param {string} eventName
 */
export const sendOptimizelyMetric = (eventName) => {
  window.optimizely = window.optimizely || [];
  window["optimizely"].push({
    type: "event",
    eventName: eventName,
  });
};
