/**
 * @file Safe Utility functions
 * @category Safe Utils
 * @module SafeUtils
 */

/**
 * This function returns a function with a try catch attached. Removes the requirement to add try catch to every function
 * @function withTryCatch
 * @returns function with a try catch
 */
export const withTryCatch = (childFunction) => {
  return function () {
    try {
      return childFunction.apply(this, arguments);
    } catch (error) {
      // Send error to GA
      console.log("Error caught:", error);
      // Send error to GA using the appropriate tracking code
    }
  };
};

/**
 * This function returns a function with a try catch attached, with GA error handling. Removes the requirement to add try catch to every function
 * @function withTryCatchHandleError
 * @returns function with a try catch
 */

export const withTryCatchHandleError = (testId) => {
  return (childFunction) => {
    return function () {
      try {
        return childFunction.apply(this, arguments);
      } catch (error) {
        console.log(`${testId} Error: ${error}`);
        document.documentElement.classList.add(`${testId}-error`);
      }
    };
  };
};
