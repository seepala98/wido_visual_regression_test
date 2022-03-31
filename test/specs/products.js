// save full screen to screenshot.png 
describe("product", () => {
    beforeEach( async () => {
        await browser.url("https://tangerine.com/en/products/#all");
    });
    it("save screenshots", async () => {
        // await browser.saveScreen('examplePaged', { /* some options */ });
        // browser.saveElement($('#element-id'), 'firstButtonElement', { /* some options */ });
        await browser.saveFullPageScreen('fullPage_test', { /* some options */ });
        // browser.saveTabbablePage('save-tabbable', { /* some options, use the same options as for saveFullPageScreen */ });
    });
    it("should compare successful with baseline", async () => {
        // await expect(await browser.checkScreen('examplePaged', { /* some options */ })).toEqual(0);
        // expect(browser.checkElement($('#element-id'), 'firstButtonElement', { /* some options */ })).toEqual(0);
        await browser.debug();
        await expect(await browser.checkFullPageScreen('fullPage_test', { /* some options */ })).toEqual(0);
        // expect(browser.checkTabbablePage('check-tabbable', { /* some options, use the same options as for checkFullPageScreen */ })).toEqual(0);
    });
});