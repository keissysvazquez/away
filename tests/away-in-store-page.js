const { expect } = require('@playwright/test');

exports.AwayinStorePage = class AwayinStorePage {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
    }

    async goToStorePage(storeUrl) {
        await this.page.goto(`https://www.awaytravel.com/stores/${storeUrl}`);
    }

    async verifyInStoresPage() {
        await expect(this.page).toHaveURL(this.storesURL);
        await expect(this.visitOurSite).toBeVisible()
    }
    async verifyStores() {
        await expect(this.storeObjects).toContainText(this.storesList)
    }
    async scrollThroughSite() {
        await this.page.mouse.wheel(0, 9000)
    }

    async selectStoreLocation() {
        await this.selectStore3.click({ force: true })
        await expect(this.page).toHaveURL(this.nycStoreURL);
    }
    async validateTitleAwayIn(cityName) {
        await expect(this.page.locator('[itemprop="name"]')).toBeVisible()
        await expect(this.page.locator('[itemprop="name"]')).toContainText(`Away in ${cityName}`)
    }
    async validateDescription() {
        await expect(this.page.locator('[itemprop="description"]')).toBeVisible()
        await expect(this.page.locator('[href="tel:6466493191"]')).toBeVisible()
        await expect(this.page.locator('[href="mailto:bond@awaytravel.com"]')).toBeVisible()
    }

    async validateAdditionalStoreInformation() {
        //TODO: Validate icons. 
        await expect(this.page.locator('h2', { hasText: 'Additional store information' })).toBeVisible()
        await expect(this.page.locator('div.component-messages:has-text("Sanitizing stations")')).toBeVisible()
        await expect(this.page.locator('div.component-messages:has-text("Payment Options")')).toBeVisible()
        await expect(this.page.locator('div.component-messages:has-text("Curbside pickup")')).toBeVisible()
    }

    async imageGallery() {
        await this.page.locator('div.swiper-slide-active').scrollIntoViewIfNeeded()
        await expect(this.page.locator('div.swiper-slide-active')).toBeVisible()
        await expect(this.page.locator('div.swiper-slide-active:has(img)')).toBeVisible()
    }
    async gallerySlide() {
        await expect(this.page.locator('[aria-label="previous slide"]')).toBeVisible()
        await expect(this.page.locator('[aria-label="next slide"]')).toBeVisible()
        await this.page.locator('[aria-label="previous slide"]').click()
        await expect(this.page.locator('div.swiper-slide-active:has(img)')).toBeVisible()
        await this.page.locator('[aria-label="next slide"]').click()
        await expect(this.page.locator('div.swiper-slide-active:has(img)')).toBeVisible()
    }

    async mapSection() {
        await this.page.locator('div.gm-style').scrollIntoViewIfNeeded()
        await expect(this.page.locator('div.gm-style>>[aria-label="Away in New York City: NoHo"]')).toBeVisible()
        //TODO: actual drag and drop functionality. This part isnt working. 
        await this.page.dragAndDrop('[aria-label="Map"]', '[aria-label="Map"]', {
            sourcePosition: { x: 0, y: 7 },
            targetPosition: { x: 80, y: 500 },
        });
        await expect(this.page.locator('[itemprop="address"]')).toContainText('10 Bond St.New York,NY 10012')
        await expect(this.page.locator('div.store_location_info_label__THM1_:has-text("Hours")')).toBeVisible()
        await this.page.locator('[aria-label="Zoom out"]').click()
        await this.page.locator('[aria-label="Zoom in"]').click()
        
    }
}