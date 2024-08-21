// index.js inside the lib folder

// Import your functions using ES6 import syntax
import { fetchApi, interceptAjaxResponse, getUUID } from "./utils/ajax/ajax";
import {
  getCookie,
  setCookie,
  deleteCookie,
} from "./utils/generic-functions/cookies";
import { handleError } from "./utils/generic-functions/errorHandling";
import {
  toPascalCase,
  injectScript,
  mutationObserverOnURL,
  observeForExitIntent,
  waitForAngularRootElements,
} from "./utils/generic-functions/common";
import {
  waitForElement,
  waitForElementWithFallback,
  waitForElementSendAlert,
  waitForElements,
  waitForLocalStorageItem,
  waitForSessionStorageItem,
  waitForWindowProperty,
  getEventFromDataLayer,
} from "./utils/generic-functions/waitFor";
import { setupMobileSwipeGestures } from "./utils/gestures/mobileSwipes";
import { setupMouseWheelEvents } from "./utils/gestures/mouseWheel";
import { sendOptimizelyMetric } from "./utils/optimizely/opti";
import {
  withTryCatch,
  withTryCatchHandleError,
} from "./utils/safe-functions/utils";

// Export the functions using ES6 export syntax
export {
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
