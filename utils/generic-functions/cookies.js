/**
 * @file Cookies Utility functions
 * @category Cookies Utils
 * @module CookiesUtils
 */

/**
 * Checks for presence of a cookie
 * @function getCookie
 * @param {string} cname - cookie name
 * @returns {string} - empty string or cookie name
 */
export const getCookie = (cname) => {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

/**
 * Sets a cookie in the browser
 * @function setCookie
 * @param {string} cname - cookie name
 * @param {string} cvalue - cookie value
 * @param {number} exdays - days until expiry
 */
export const setCookie = (cname, cvalue, exdays) => {
  if (exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  } else {
    document.cookie = cname + "=" + cvalue + ";";
  }
};

/**
 * Sets a cookie in the browser
 * @function deleteCookie
 * @param {string} cname - cookie name
 */
export const deleteCookie = (cname) => {
  if (document.cookie.indexOf(cname) > -1) {
    document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  }
};
