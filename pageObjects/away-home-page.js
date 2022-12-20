const { expect } = require('@playwright/test');

exports.AwayHomePage = class AwayHomePage {

  /**
   * @param {import('@playwright/test').Page} page
   */
    constructor(page) {
        this.page = page;
        this.homeTitle = '/Away | Built for modern travel/';
        this.storesURL = /.*stores/
        this.stores = page.getByRole('link', { name: 'Stores' });
        this.help = page.getByRole('link', { name: 'Help' });

    }

    async goto() {
        await this.page.goto('http://www.awaytravel.com/');
    }
    async expectTItle() {
        await expect(this.page).toHaveTitle(this.homeTitle)
    }
   
    async goToStores() {
        await this.stores.first().click();
        await expect(this.page).toHaveURL(this.storesURL);
    }
    async validateHelpisAvailable(){ 
        await expect(this.help.first()).toBeVisible()
    }
}