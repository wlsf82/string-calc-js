"use strict";

const browserstack = require("browserstack-local");
const SpecReporter = require("jasmine-spec-reporter");
const browserstackLocal = new browserstack.Local();

module.exports.config = {
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

    onPrepare() {
        jasmine.getEnv().addReporter(new SpecReporter({
            displayFailuresSummary: true,
            displayFailedSpec: true,
            displaySuiteNumber: true,
            displaySpecDuration: true
        }));

        browser.driver.manage().window().maximize();

        browser.ignoreSynchronization = true;
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