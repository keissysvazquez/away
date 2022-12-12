const { expect } = require('@playwright/test');

exports.AwayinStorePage = class AwayinStorePage {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.descriptionName = page.locator('[itemprop="name"]')
        this.itempropDescription = page.locator('[itemprop="description"]')
        this.telNumber = page.locator('[href="tel:6466493191"]')
        this.emailAddress = page.locator('[href="mailto:bond@awaytravel.com"]')
        this.additionalInformationHeader = page.locator('h2', { hasText: 'Additional store information' })
        this.sanitizingStation = page.locator('div.component-messages:has-text("Sanitizing stations")')
        this.paymentOptions = page.locator('div.component-messages:has-text("Payment Options")')
        this.curbsidePickup = page.locator('div.component-messages:has-text("Curbside pickup")')
        this.swiperGallery = page.locator('div.swiper-slide-active')
        this.swiperGalleryImg = page.locator('div.swiper-slide-active:has(img)')
        this.previousSlide = page.locator('[aria-label="previous slide"]')
        this.nextSlide = page.locator('[aria-label="next slide"]')
        this.mapPin = page.locator('div.gm-style>>[aria-label="Away in New York City: NoHo"]')
        this.gmap = page.locator('div.gm-style')
        this.zoomOutClick = page.locator('[aria-label="Zoom out"]').click()
        this.zoomInClick = page.locator('[aria-label="Zoom in"]').click()
        this.itempropAddress = page.locator('[itemprop="address"]')
        this.nohoAddress = '10 Bond St.New York,NY 10012'
        this.hoursOperation = page.locator('div.store_location_info_label__THM1_:has-text("Hours")')
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
        await expect(this.descriptionName).toBeVisible()
        await expect(this.descriptionName).toContainText(`Away in ${cityName}`)
    }
    async validateDescription() {
        await expect(this.itempropDescription).toBeVisible()
        await expect(this.telNumber).toBeVisible()
        await expect(this.emailAddress).toBeVisible()
    }

    async validateAdditionalStoreInformation() {
        //TODO: Validate icons. 
        await expect(this.additionalInformationHeader).toBeVisible()
        await expect(this.sanitizingStation).toBeVisible()
        await expect(this.paymentOptions).toBeVisible()
        await expect(this.curbsidePickup).toBeVisible()
    }

    async imageGallery() {
        await this.swiperGallery.scrollIntoViewIfNeeded()
        await expect(this.swiperGallery).toBeVisible()
        await expect(this.swiperGalleryImg).toBeVisible()
    }
    async gallerySlide() {
        await expect(this.previousSlide).toBeVisible()
        await expect(this.nextSlide).toBeVisible()
        await this.previousSlide.click()
        await expect(this.swiperGalleryImg).toBeVisible()
        await this.nextSlide.click()
        await expect(this.swiperGalleryImg).toBeVisible()
    }

    async mapSection() {
        await this.gmap.scrollIntoViewIfNeeded()
        await expect(this.mapPin).toBeVisible()
        await expect(this.itempropAddress).toContainText(this.nohoAddress)
        await expect(this.hoursOperation).toBeVisible()
        await this.zoomOutClick
        await this.zoomInClick
        //TODO: actual drag and drop functionality. This part isnt working. 
        await this.page.dragAndDrop('[aria-label="Map"]', '[aria-label="Map"]', {
            sourcePosition: { x: 0, y: 7 },
            targetPosition: { x: 80, y: 500 },
        });
    }
}