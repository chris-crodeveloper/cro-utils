/**
 * @file Mobile Swipes
 * @category Global Gestures
 * @module Gestures
 */

/**
 * This callback is executed when a mobile swipe gesture occurs
 * @callback mobileGestureCallback
 * @param {string} direction - returns 'up' or 'down' or 'left' or 'right
 */

/**
 * This callback is used to cancel the gesture, return true or false
 * @callback mobileGestureCallback
 */

/**
 * Setup mobile function gestures on swipe
 * @function setupMobileSwipeGestures
 * @param {string} gestureZone - CSS selector for the zone to apply the gestures to
 * @param {mobileGestureCallback} gestureCallback - callback to run on swipe
 */
export const setupMobileSwipeGestures = (
    gestureZone,
    gestureCallback,
    cancelCallback = () => {
      return false;
    }
  ) => {
    let startX = 0;
    let startY = 0;
  
    const gesuredZone = document.querySelector(gestureZone);
  
    gesuredZone.addEventListener("touchstart", handleTouchStart, false);
  
    gesuredZone.addEventListener("touchend", handleTouchEnd, false);
  
    function handleTouchStart(e) {
      startX = e.changedTouches[0].screenX;
      startY = e.changedTouches[0].screenY;
    }
  
    function handleTouchEnd(e) {
      if (cancelCallback()) return;
  
      const diffX = e.changedTouches[0].screenX - startX;
      const diffY = e.changedTouches[0].screenY - startY;
      const ratioX = Math.abs(diffX / diffY);
      const ratioY = Math.abs(diffY / diffX);
      const absDiff = Math.abs(ratioX > ratioY ? diffX : diffY);
  
      // Ignore small movements.
      if (absDiff < 50) {
        return;
      }
  
      if (ratioX > ratioY) {
        if (diffX >= 0) {
          gestureCallback("right");
        } else {
          gestureCallback("left");
        }
      } else {
        if (diffY >= 0) {
          gestureCallback("down");
        } else {
          gestureCallback("up");
        }
      }
    }
  };
  