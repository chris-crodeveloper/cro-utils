/**
 * @file Error Handling Utility functions
 * @category Error Handling Utils
 * @module ErrorHandlingUtils
 */

/**
 * To be used in catch blocks to handle any errors that occur
 * @function handleError
 * @param {string} testId - Test ID
 * @param {string} error - Error thrown by try catch
 * @param {function} callback - Callback to run on error - useful for analytics
 */
export const handleError = (testId, error, callback) => {
  // Add error class to test when there is an error
  console.log(`${testId} Error: ${error}`);
  document.documentElement.classList.add(`${testId}-error`);
  if (callback) callback();
};
