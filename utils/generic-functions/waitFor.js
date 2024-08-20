/**
 * @file Wait For Utility functions
 * @category Wait For Utils
 * @module WaitForUtils
 */

/**
 * This callback is displayed as a global member.
 * @callback waitForElementCallback
 * @param {HTMLElement} el
 */

/**
 * Waits for an HTML element to exist in the DOM.
 * @function waitForElement
 * @param {string} element - CSS selector string for the element to wait for
 * @param {waitForElementCallback} callback - Callback to run once element is found with, the cached HTML element as a parameter
 */
export const waitForElement = (element, callback) => {
  const maxCalls = 50,
    delay = 500;
  let count = 0;
  const interval = setInterval(() => {
    try {
      const el = document.querySelector(element);

      if (el) {
        clearInterval(interval);

        callback(el);
      }

      // After trying to find the element for 6 seconds, it stops
      if (count > maxCalls) clearInterval(interval);

      // increment interval count
      count++;
    } catch (error) {
      console.error(error);
    }
  }, delay);
};

/**
 * Waits for an HTML element to exist in the DOM, if it doesn't exist run fallback
 * @function waitForElementWithFallback
 * @param {string} element - CSS selector string for the element to wait for
 * @param {waitForElementCallback} callback - Callback to run once element is found with, the cached HTML element as a parameter
 * @param {waitForElementCallback} fallback - Callback to run if element is not found
 */
export const waitForElementWithFallback = (element, callback, fallback) => {
  const maxCalls = 50,
    delay = 500;
  let count = 0;
  const interval = setInterval(() => {
    try {
      const el = document.querySelector(element);

      if (el) {
        clearInterval(interval);

        callback(el);
      }

      // After trying to find the element for 6 seconds, it stops
      if (count > maxCalls) {
        clearInterval(interval);
        fallback(element);
      }

      // increment interval count
      count++;
    } catch (error) {
      console.error(error);
    }
  }, delay);
};

/**
 * Returns a waitForElement function whilst setting up error handling
 * @function waitForElementSendAlert
 * @param {string} testId - Test ID
 * @param {function} callback - Function to send GA event
 * @returns {waitForElement} function
 */
export const waitForElementSendAlert = (testId, callback) => {
  return (element, cb) => {
    const maxCalls = 50,
      delay = 500;
    let count = 0;
    const interval = setInterval(() => {
      try {
        const el = document.querySelector(element);

        if (el) {
          clearInterval(interval);

          cb(el);
        }

        // After trying to find the element for 6 seconds, it stops
        if (count > maxCalls) {
          clearInterval(interval);
          callback(`${testId} alert`, `${element} not found`);
        }

        // increment interval count
        count++;
      } catch (error) {
        callback(`${testId} error`, `${error}`);
      }
    }, delay);
  };
};

/**
 * Waits for HTML elements (using querySelectorAll) to exist in the DOM.
 * @function waitForElements
 * @param {string} element - CSS selector string for the elements to wait for
 * @param {waitForElementCallback} callback - Callback to run once element is found with, the cached HTML DOM Element Array as a parameter
 */
export const waitForElements = (element, callback) => {
  const maxCalls = 50,
    delay = 500;
  let count = 0;
  const interval = setInterval(() => {
    try {
      const el = document.querySelectorAll(element);

      if (el.length > 0) {
        clearInterval(interval);

        callback(el);
      }

      // After trying to find the element for 6 seconds, it stops
      if (count > maxCalls) clearInterval(interval);

      // increment interval count
      count++;
    } catch (error) {
      console.error(error);
    }
  }, delay);
};

/**
 * Waits for an item to be present in local storage.
 * @function waitForLocalStorageItem
 * @param {string} itemName - Local storage item name
 * @param {function} callback - Callback to run once element is found with, the cached local storage item as a parameter
 * @param {object} intervalConfig - maxCalls and delay
 * @param {function} fallback - Fallback to run when the interval times out
 */
export const waitForLocalStorageItem = (
  itemName,
  callback,
  intervalConfig,
  fallback
) => {
  const maxCalls = intervalConfig ? intervalConfig.maxCalls : 500,
    delay = intervalConfig ? intervalConfig.delay : 50;
  let count = 0;
  const interval = setInterval(() => {
    try {
      // Add code here
      const item = window.localStorage.getItem(itemName);

      if (item && item !== "null") {
        clearInterval(interval);

        callback(JSON.parse(item));
      }

      // After trying to find the element for 6 seconds, it stops
      if (count > maxCalls) {
        clearInterval(interval);
        if (fallback) fallback();
      }

      // increment interval count
      count++;
    } catch (error) {
      console.error(error);
    }
  }, delay);
};

/**
 * Waits for an item to be present in session storage.
 * @function waitForSessionStorageItem
 * @param {string} itemName - Session storage item name
 * @param {function} callback - Callback to run once element is found, with the cached session storage item as a parameter
 * @param {object} intervalConfig - maxCalls and delay
 * @param {function} fallback - Fallback to run when the interval times out
 */
export const waitForSessionStorageItem = (
  itemName,
  callback,
  intervalConfig,
  fallback
) => {
  const maxCalls = intervalConfig ? intervalConfig.maxCalls : 500,
    delay = intervalConfig ? intervalConfig.delay : 50;
  let count = 0;
  const interval = setInterval(() => {
    try {
      // Add code here
      const item = window.sessionStorage.getItem(itemName);

      if (item && item !== "null") {
        clearInterval(interval);

        callback(item);
      }

      // After trying to find the element for 6 seconds, it stops
      if (count > maxCalls) {
        clearInterval(interval);
        if (fallback) fallback();
      }

      // increment interval count
      count++;
    } catch (error) {
      console.error(error);
    }
  }, delay);
};

/**
 * Waits for an item to be present in window
 * @function waitForWindowProperty
 * @param {string} propertyName - Window object property name
 * @param {function} callback - Callback to run once property is found, with the cached window property as a parameter
 * @param {object} intervalConfig - maxCalls and delay
 * @param {function} fallback - Fallback to run when the interval times out
 */
export const waitForWindowProperty = (
  propertyName,
  callback,
  intervalConfig,
  fallback
) => {
  const maxCalls = intervalConfig ? intervalConfig.maxCalls : 500,
    delay = intervalConfig ? intervalConfig.delay : 50;
  let count = 0;
  const interval = setInterval(() => {
    try {
      // Add code here
      const item = window[propertyName];

      if (item && item !== "null") {
        clearInterval(interval);

        callback(item);
      }

      // After trying to find the element for 6 seconds, it stops
      if (count > maxCalls) {
        clearInterval(interval);
        if (fallback) fallback();
      }

      // increment interval count
      count++;
    } catch (error) {
      console.error(error);
    }
  }, delay);
};

/**
 * Return event from data layer
 * @function getEventFromDataLayer
 * @param {string} eventName - event name property
 * @returns {object} event object
 */
export const getEventFromDataLayer = (eventName) => {
  try {
    const dataLayer = window.dataLayer || window[0].parent.dataLayer;
    let dataLayerItem;

    if (dataLayer) {
      dataLayer.forEach((item) => {
        if (item.event_name === eventName) {
          dataLayerItem = item;
        }
      });

      return dataLayerItem;
    }
  } catch (e) {
    console.log("Set to local storage error: ", e);
  }
};
