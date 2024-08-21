# cro-utils

A versatile utility package tailored for Conversion Rate Optimization (CRO) developers, offering a diverse set of tools to enhance your development workflow.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Available Functions](#available-functions)
- [Contributing](#contributing)
- [License](#license)

## Installation

To add cro-utils to your project, simply run:

```bash
npm install cro-utils
```

## Usage

Import and utilize the functions provided by cro-utils in your JavaScript or TypeScript projects.

### Example:

```javascript
// Import necessary functions
const { fetchApi, waitForElement, sendOptimizelyMetric } = require("cro-utils");

// Using fetchApi to make an API request
fetchApi("https://api.example.com/data")
  .then((data) => console.log("API response:", data))
  .catch((error) => console.error("Error fetching data:", error));

// Waiting for an element to be present in the DOM
waitForElement("#myElement", () => {
  console.log('Element with ID "myElement" is now in the DOM!');
});

// Sending a metric to Optimizely
sendOptimizelyMetric("myMetric", 1);
```

## Available Functions

cro-utils offers a comprehensive set of functions to streamline your CRO development:

- **fetchApi**: A wrapper around the Fetch API for simplified AJAX requests.
- **interceptAjaxResponse**: Intercepts AJAX responses and allows modifications.
- **getUUID**: Generates a unique UUID.
- **getCookie, setCookie, deleteCookie**: Functions to manage browser cookies.
- **handleError**: Custom error handling and logging utility.
- **toPascalCase**: Converts a string to PascalCase.
- **injectScript**: Injects a JavaScript script into the DOM.
- **mutationObserverOnURL**: Observes URL changes using MutationObserver.
- **observeForExitIntent**: Detects user exit intent.
- **waitForAngularRootElements**: Waits for Angular root elements to be present.
- **waitForElement, waitForElementWithFallback, waitForElementSendAlert**: Variants of waitFor functions, offering different behaviors.
- **waitForElements, waitForLocalStorageItem, waitForSessionStorageItem, waitForWindowProperty**: Utilities to wait for specific conditions.
- **getEventFromDataLayer**: Retrieves an event from the data layer.
- **setupMobileSwipeGestures**: Sets up mobile swipe gestures.
- **setupMouseWheelEvents**: Handles mouse wheel events.
- **sendOptimizelyMetric**: Sends metrics to Optimizely.
- **withTryCatch, withTryCatchHandleError**: Functions for safe execution with error handling.

For detailed documentation on each function, including parameters and return values, refer to the [API Documentation](https://chris-crodeveloper.github.io/cro-utils/).

## Contributing

Contributions are welcome! Feel free to suggest new functions or improvements by opening a pull request or creating an issue on the GitHub repository.
