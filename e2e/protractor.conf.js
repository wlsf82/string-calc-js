"use strict";

const browserstack = require("browserstack-local");
const browserstackLocal = new browserstack.Local();

module.exports.config = {
    directConnect: false,
    seleniumAddress: "http://hub.browserstack.com/wd/hub",
    baseUrl: "http://appear.in/",

    specs: [
        "appearin.spec.js"
    ],

    capabilities: {
        "browserName": "chrome",
        "chromeOptions": {
            "args": [
                "--use-fake-ui-for-media-stream",
                "--use-fake-device-for-media-stream"
            ]
        },
        "os": "Windows",
        "os_version": "7",

        "browserstack.user": process.env.BROWSERSTACK_USERNAME,
        "browserstack.key": process.env.BROWSERSTACK_ACCESS_KEY,
        "browserstack.local": "true",

        "name": "Hands on workshop"
    },

    onPrepare() {
        browser.driver.manage().window().maximize();
        browser.ignoreSynchronization = true;
    },

    beforeLaunch() {
        return new Promise((resolve, reject) => {
            const browserstackLocalArgs = {
                "key": process.env.BROWSERSTACK_ACCESS_KEY,
                "force": "true",
                "forcelocal": "true"
            };
            browserstackLocal.start(browserstackLocalArgs, (error) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve();
            });
        });
    },

    onComplete() {
        return new Promise((resolve, reject) => {
            browserstackLocal.stop((error) => {
                if (error) {
                    reject(error);
                    return;
                }
                resolve();
            });
        });
    },

    jasmineNodeOpts: {
        onComplete: null,
        isVerbose: false,
        showColors: true,
        includeStackTrace: true
    }
};
