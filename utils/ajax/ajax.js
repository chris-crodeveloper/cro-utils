/**
 * @file Ajax Utility functions
 * @category Ajax Utils
 * @module AjaxUtils
 */

/**
 * Make HTTP Fetch API call returning the JSON in the promise resolve
 * @function fetchApi
 * @param {string} httpMethod - GET, POST
 * @param {string} url - URL
 * @param {object} payload - body
 * @param {object} headers - HTTP Headers
 * @returns {object} promise
 */
export const fetchApi = (httpMethod, url, payload, headers) => {
  let httpHeaders = new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
  });
  if (headers) {
    headers.forEach((value, key) => {
      httpHeaders.append(key, value);
    });
  }
  return new Promise((resolve, reject) => {
    let options = { method: httpMethod, headers: httpHeaders };
    if ((httpMethod === "POST" || httpMethod === "PATCH") && payload) {
      options = { ...options, body: JSON.stringify(payload) };
    }

    fetch(url, options)
      .then((response) => {
        if (response) {
          if (response.ok) {
            return response.json();
          }
          return response.json().then((error) => {
            console.log(error);
            reject(error);
          });
        }
      })
      .then((jsonData) => {
        console.log(`${httpMethod}: ${url}`, jsonData);

        resolve(jsonData);
      })
      .catch((error) => {
        console.log(`${httpMethod}: ${url}`, error);
        reject(error);
      });
  });
};

/**
 * This callback is displayed as a global member.
 * @callback interceptAjaxResponseCallback
 * @param {string} responseURL - Ajax Response URL
 * @param {string} responseText - Ajax response Text
 */

/**
 * Intercepts AJAX requests by overwriting the XMLHttpRequest prototype.
 * @function interceptAjaxResponse
 * @param {string} pageUrl - The page URL that this function is required on. This is important as the function should be restricted as much as possible
 * @param {string} responseURL - The specific AJAX response URL the data is required from
 * @param {boolean} pageURLsubstringMatch - If true - the pageURL can be matched as a substring. If false, the pageURL is matched as an absolute match
 * @param {boolean} responseURLsubstringMatch - If true - the responseURL can be matched as a substring. If false, the responseURL is matched as an absolute match
 * @param {interceptAjaxResponseCallback} cb - callback. returning the RepsonseURL and the RepsonseText
 */
export const interceptAjaxResponse = (
  pageUrl,
  responseURL,
  pageURLsubstringMatch,
  responseURLsubstringMatch,
  cb
) => {
  // Check if the URL is a match
  if (pageURLsubstringMatch) {
    if (document.location.href.indexOf(pageUrl) === -1) {
      return;
    }
  } else {
    if (document.location.href !== pageUrl) {
      return;
    }
  }

  // Update the AJAX prototype
  const send = XMLHttpRequest.prototype.send;

  XMLHttpRequest.prototype.send = function () {
    this.addEventListener("load", function () {
      try {
        if (this && this.responseURL && this.responseText) {
          // Look for responseURL before changing code
          if (responseURLsubstringMatch) {
            if (this.responseURL.indexOf(responseURL) > -1) {
              const responseURL = this.responseURL;
              const responseText = this.responseText;
              cb(responseURL, responseText);
            }
          } else {
            if (this.responseURL === responseURL) {
              const responseURL = this.responseURL;
              const responseText = this.responseText;
              cb(responseURL, responseText);
            }
          }
        }
      } catch (error) {
        console.log("interceptAjaxResponse Error: " + error);
      }
    });

    return send.apply(this, arguments);
  };
};

/**
 * Generate UUID for creating AJAX requests
 * @function getUUID
 * @returns {string} returns random 16 char length string
 */
export const getUUID = () => {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
};
