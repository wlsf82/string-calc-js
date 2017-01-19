"use strict";

const Helper = require("./helper.js");
const shortid = require("shortid");

describe("appear.in hands on e2e tests on gocd", () => {
    const helper = new Helper();

    beforeEach(() => {
        const randomRoomName = shortid.generate();

        browser.get(randomRoomName);
        helper.waitABit();
    });

    it("should open camera and microphone configuration", () => {
        const camMicButton = element(by.css('div[ng-click="openMediaSelectorModal()"]'));
        const cameraAndMicModal = element(by.css(".camera-preview-wrapper"));

        camMicButton.click();
        helper.waitABit();

        expect(cameraAndMicModal.isDisplayed()).toBe(true);
    });
});
