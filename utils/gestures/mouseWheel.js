/**
 * @file Mouse wheel
 * @category Global Gestures
 * @module Gestures
 */

/**
 * This callback is executed when any mousewheel action occurs
 * @callback mouseWheelScrollCallback
 * @param {string} direction - returns 'up' or 'down'
 */

/**
 * Setup mouse wheel gestures, returns callback when mousewheel is scrolled up or down
 * @function setupMouseWheelEvents
 * @param {number} timeoutDelay - Time in ms before the next scroll can fire
 * @param {mouseWheelScrollCallback} callback - callback to run on mouse scroll
 * @param {HTMLElement} scrollableElement - Fire callbacks only when target HTML Element is already scrolled to the top or bottom
 */
export const setupMouseWheelEvents = (
    timeoutDelay,
    callback,
    scrollableElement
  ) => {
    let isScrolling = true;
    window.addEventListener("wheel", (event) => {
      if (isScrolling) {
        if (event.deltaY > 0) {
          console.log("scrolling up");
          // down
          callback("up");
        } else {
          // up
  
          if (scrollableElement) {
            // only scroll up if the scroll depth of the current target is 0
            if (scrollableElement.scrollTop !== 0) return;
          }
  
          callback("down");
        }
  
        isScrolling = false;
  
        // reset scrolling boolean
        setTimeout(() => {
          isScrolling = true;
        }, timeoutDelay);
      }
    });
  };
  