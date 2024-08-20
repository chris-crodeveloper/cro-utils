// index.js inside the lib folder

// Import your functions
const {
  fetchApi,
  interceptAjaxResponse,
  getUUID,
} = require("./utils/ajax/ajax");
const {
  getCookie,
  setCookie,
  deleteCookie,
} = require("./utils/generic-functions/cookies");
const { handleError } = require("./utils/generic-functions/errorHandling");
const {
  toPascalCase,
  injectScript,
  mutationObserverOnURL,
  observeForExitIntent,
  waitForAngularRootElements,
} = require("./utils/generic-functions/common");
const {
  waitForElement,
  waitForElementWithFallback,
  waitForElementSendAlert,
  waitForElements,
  waitForLocalStorageItem,
  waitForSessionStorageItem,
  waitForWindowProperty,
  getEventFromDataLayer,
} = require("./utils/generic-functions/waitFor");
const { setupMobileSwipeGestures } = require("./utils/gestures/mobileSwipes");
const { setupMouseWheelEvents } = require("./utils/gestures/mouseWheel");
const { sendOptimizelyMetric } = require("./utils/optimizely/opti");
const {
  withTryCatch,
  withTryCatchHandleError,
} = require("./utils/safe-functions/utils");

// Export the functions to make them accessible to users of your package
module.exports = {
  fetchApi,
  interceptAjaxResponse,
  getUUID,
  getCookie,
  setCookie,
  deleteCookie,
  handleError,
  toPascalCase,
  injectScript,
  mutationObserverOnURL,
  observeForExitIntent,
  waitForAngularRootElements,
  waitForElement,
  waitForElementWithFallback,
  waitForElementSendAlert,
  waitForElements,
  waitForLocalStorageItem,
  waitForSessionStorageItem,
  waitForWindowProperty,
  getEventFromDataLayer,
  setupMobileSwipeGestures,
  setupMouseWheelEvents,
  sendOptimizelyMetric,
  withTryCatch,
  withTryCatchHandleError,
  // Add more functions here as you expand your package
};
