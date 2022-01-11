This is a repro for https://github.com/cypress-io/cypress/issues/15932

`index.js` contains the main process code.

`index.html` contains the HTML that attempts to asynchronously load an iframe to trigger the bug.