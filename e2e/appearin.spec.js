"use strict";

const shortid = require("shortid");

describe("appear.in hands on e2e tests on gocd", () => {
    beforeEach(() => {
        const randomRoomName = shortid.generate();

        browser.get(randomRoomName);
        waitABit();
    });

    it("should show the text you sent on chat when you say hello through it", () => {
        const openChatButton = element(by.css(".chat-open-button"));
        const chatField = element(by.css(".chat-text-input"));
        const chatMessages = element(by.css(".messages"));
        const text = "Hello!";

        openChatButton.click();
        chatField.sendKeys(text);
        chatField.sendKeys(protractor.Key.ENTER);
        waitABit();

        expect(chatMessages.getText()).toContain(text);
    });

    it("should leave the room", () => {
        const leaveButton = element(by.css(".jstest-leave-room"));
        const thankYouMessage = element(by.css(".thank-you-message"));
        const returnToRoomLink = element(by.css('a[ng-click="returnToRoom()"]'));
        const rate = element(by.css(".questionnaire"));

        leaveButton.click();
        waitABit();

        expect(thankYouMessage.isDisplayed()).toBe(true);
        expect(returnToRoomLink.isDisplayed()).toBe(true);
        expect(rate.isDisplayed()).toBe(true);
    });
});

function waitABit() {
    browser.sleep(2000);
}
