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

    it("should show the text you sent on chat when you say hello through it", () => {
        const openChatButton = element(by.css(".chat-open-button"));
        const chatField = element(by.css(".chat-text-input"));
        const chatMessages = element(by.css(".messages"));
        const text = "Hello!";

        openChatButton.click();
        chatField.sendKeys(text);
        chatField.sendKeys(protractor.Key.ENTER);
        helper.waitABit();

        expect(chatMessages.getText()).toContain(text);
    });
});
