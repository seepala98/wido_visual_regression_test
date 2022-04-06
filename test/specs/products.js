// save full screen to screenshot.png 
describe("product", () => {
    it("save screenshots", async () => {
        await browser.url("https://www.tangerine.ca/en/products#all");
        await browser.saveFullPageScreen('products_all', { /* some options */ });
        await browser.url("https://www.tangerine.ca/en/products/saving/savings-accounts/")
        await browser.saveFullPageScreen('savings_page', { /* some options */ });
    });
    it("should compare successful with baseline", async () => {
        await browser.url("https://www.tangerine.ca/en/products#all");
        await expect(await browser.checkFullPageScreen('products_all', { /* some options */ })).toEqual(0);
        await browser.url("https://www.tangerine.ca/en/products/saving/savings-accounts/");
        await expect(await browser.checkFullPageScreen('savings_page', { /* some options */ })).toEqual(0);
    });
});