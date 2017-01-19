"use strict";

module.exports.config = {
    directConnect: true,
    baseUrl: "http://appear.in/",
    specs: ["*.spec.js"],
    capabilities: {
        "browserName": "chrome",
        "chromeOptions": {
            "args": [
                "--use-fake-ui-for-media-stream",
                "--use-fake-device-for-media-stream"
            ]
        },
        "shardTestFiles": true,
        "maxInstances": 3
    },
    onPrepare() {
        browser.driver.manage().window().maximize();
        browser.ignoreSynchronization = true;
    },
    jasmineNodeOpts: {
        onComplete: null,
        isVerbose: false,
        showColors: true,
        includeStackTrace: true
    }
};
