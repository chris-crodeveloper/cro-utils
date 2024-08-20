/**
 * @file Common Utility functions
 * @category Common Utils
 * @module Common Utils
 */

/**
 * To be used when we want to convert string to pascal case
 * @function toPascalCase
 * @param {string} str - "DAVID"
 * @returns {string} - pascal case string - David
 */
export const toPascalCase = (str) => {
  return str.replace(/(\w)(\w*)/g, function (_, first, rest) {
    return first.toUpperCase() + rest.toLowerCase();
  });
};

/**
 * Injects script into the DOM and runs a callback on load
 * @function injectScript
 * @param {string} url - url for the JS script
 * @param {function} callback - Callback to run once the script is loaded
 */

export const injectScript = (url, callback) => {
  const script = document.createElement("script");
  script.src = url;
  script.async = true;

  script.addEventListener("load", function () {
    if (typeof callback === "function") {
      callback();
    }
  });

  const head = document.head || document.getElementsByTagName("head")[0];
  head.appendChild(script);
};

/**
 * Mutation Observer on URL
 * @function mutationObserverOnURL
 * @param {HTMLElement} observerElement - HTML Node element
 * @param {string} pageUrl - The page URL on which you want the callback to execute on.
 * @param {object} options - observer options
 * @param {object} callback - callback to run once location.href contains the above pageUrl.
 */
export const mutationObserverOnURL = (
  observerElement,
  pageUrl,
  options,
  callback
) => {
  let prevUrl = "";
  new MutationObserver(() => {
    const currUrl = window.location.href;
    if (currUrl !== prevUrl) {
      prevUrl = currUrl;
      const isPreferredPage = currUrl.indexOf(pageUrl) > -1;
      if (isPreferredPage) {
        callback();
      }
    }
  }).observe(observerElement, options);
};

/**
 *  Run callback on exist intent
 * @function observeForExitIntent
 * @param {function} callback - callback to run on exit intent
 */
export const observeForExitIntent = (callback) => {
  try {
    // Desktop
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (!isMobile) {
      let count = 0;
      const maxCount = 100;

      // Wait for body elemnt in DOM
      const waitForElement = setInterval(() => {
        const bodyElement = document.querySelector("body");

        if (bodyElement) {
          clearInterval(waitForElement);

          // Replace all mouse out events on body with exit intent
          bodyElement.onmouseout = function (evt) {
            try {
              const showIntent =
                !evt.toElement && !evt.relatedTarget && evt.clientY < 10;

              if (showIntent) {
                // Stop observing mouse movements
                window.onmouseout = null;

                // Run callback
                callback();
              }
            } catch (err) {
              console.log(err.message);
            }
          };
        }

        if (count > maxCount) {
          clearInterval(waitForElement);
        }
      }, 500);
    }

    // Mobile
    if (isMobile) {
      let lastScrollPosition =
          window.pageYOffset || document.documentElement.scrollTop,
        upwardScroll = 0,
        timer;

      // Observe scrolling on mobile
      const observeScrolling = () => {
        const newScrollPosition =
          window.pageYOffset || document.documentElement.scrollTop;

        // User scrolled, restart the 8 second timer
        restartTimer();

        // Record upward movements
        if (newScrollPosition < lastScrollPosition) {
          upwardScroll++;
        }

        // Show the modal when the user makes 50 individual upward movements
        if (upwardScroll > 50) {
          clearTimeout(timer);
          window.removeEventListener("scroll", observeScrolling, true);
          callback();
        }

        // Store the new scroll position
        lastScrollPosition = newScrollPosition;
      };
      // Start an 8 second timer
      let restartTimer = () => {
        clearTimeout(timer);

        timer = setTimeout(function () {
          // activate when the user hasn't made a touch motion for 4 seconds
          clearTimeout(timer);
          window.removeEventListener("scroll", observeScrolling, true);
          callback();
        }, 4000);
      };

      // Start the timer on page load
      restartTimer();

      // Restart the 8 second timer when the user touches the screen
      window.ontouchstart = restartTimer;

      // Monitor the scrolling behaviour
      window.addEventListener("scroll", observeScrolling, true);
    }
  } catch (error) {
    console.log("observeForExitIntent Error: " + error);
  }
};

/**
 * Wait for Angular elements to be loaded
 * @function waitForAngularRootElements
 * @returns {Promise} - Resolve when angular root elements are loaded
 */
export const waitForAngularRootElements = () => {
  return new Promise((resolve, reject) => {
    const checkFunctionExists = () => {
      if (typeof getAllAngularRootElements === "function") {
        resolve();
      } else {
        setTimeout(checkFunctionExists, 100); // Check again after 100 milliseconds
      }
    };

    checkFunctionExists();
  });
};
