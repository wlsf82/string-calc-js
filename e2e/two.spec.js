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

    it("should leave the room", () => {
        const leaveButton = element(by.css(".jstest-leave-room"));
        const thankYouMessage = element(by.css(".thank-you-message"));
        const returnToRoomLink = element(by.css('a[ng-click="returnToRoom()"]'));
        const rate = element(by.css(".questionnaire"));

        leaveButton.click();
        helper.waitABit();

        expect(thankYouMessage.isDisplayed()).toBe(true);
        expect(returnToRoomLink.isDisplayed()).toBe(true);
        expect(rate.isDisplayed()).toBe(true);
    });
});
