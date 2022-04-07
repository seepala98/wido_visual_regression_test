describe("product", () => {

    let product_saving;
    let product_spending; 
    let product_investing;
    let product_borrowing;

    let product_saving_text;
    let product_spending_text;
    let product_investing_text;
    let product_borrowing_text;

    let saving_page_link;
    let spending_page_link;
    let investing_page_link;
    let borrowing_page_link;

    beforeEach(() => {

        browser.maximizeWindow();
        browser.url("https://www.tangerine.ca/en/products#all");

        this.product_saving = $("#pp_products_saving");
        this.product_spending = $("#pp_products_spending");
        this.product_investing = $("#pp_products_investing");
        this.product_borrowing = $("#menu-borrowing");
        
        this.product_saving_text = this.product_saving.getText();
        this.product_spending_text = this.product_spending.getText();
        this.product_investing_text = this.product_investing.getText();
        this.product_borrowing_text = this.product_borrowing.getText();

        this.saving_page_link = this.product_saving.getAttribute("href");
        this.spending_page_link = this.product_spending.getAttribute("href");
        this.investing_page_link = this.product_investing.getAttribute("href");
        this.borrowing_page_link = this.product_borrowing.getAttribute("href");

     });

    it("save_screenshots", async () => {

        // get the href link under #pp_products_saving, click url and save screenshot
        await browser.url(await this.saving_page_link);
        await browser.saveFullPageScreen(await this.product_saving_text, {});

        // get the href link under #pp_products_spending, click url and save screenshot
        await browser.url(await this.spending_page_link);
        await browser.saveFullPageScreen(await this.product_spending_text, {});

        // get the href link under #pp_products_investing, click url and save screenshot
        await browser.url(await this.investing_page_link);
        await browser.saveFullPageScreen(await this.product_investing_text, {});

        // get the href link under #menu-borrowing, click url and save screenshot
        await browser.url(await this.borrowing_page_link);
        await browser.saveFullPageScreen(await this.product_borrowing_text, {});

    });

    it("should compare successful with baseline", async () => {

        await browser.url(await this.saving_page_link);
        await expect(await browser.checkFullPageScreen(await this.product_saving_text, {})).toEqual(0);

        await browser.url(await this.spending_page_link);
        await expect(await browser.checkFullPageScreen(await this.product_spending_text, {})).toEqual(0);

        await browser.url(await this.investing_page_link);
        await expect(await browser.checkFullPageScreen(await this.product_investing_text, {})).toEqual(0);

        await browser.url(await this.borrowing_page_link);
        await expect(await browser.checkFullPageScreen(await this.product_borrowing_text, {})).toEqual(0);

    });
});