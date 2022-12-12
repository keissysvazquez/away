const { expect, frame } = require('@playwright/test');

exports.AwayStoresPage = class AwayStoresPage {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.frame = frame;
        this.storesURL = /.*stores/
        this.nycStoreURL = /.*newyork/
        this.visitOurSite = page.getByRole('heading', { name: 'Visit us IRL' });
        this.storeObjects = page.getByRole('link', { name: 'See Store' })
        this.storesList = [
            "Austin11701 Domain Blvd. Suite 120, Austin, TX 78758See store",
            "Boston50 Seaport Blvd., Boston, MA 02210See store",
            "Chicago1121 N State St., Chicago, IL 60610See store",
            "Dallas3109 Knox St., Dallas, TX 75205See store",
            `Houston4033 Westheimer Rd., Houston, TX 77027

            See store`,
            "LA: Venice Beach1103 Abbot Kinney Blvd. Unit #2, Venice, CA 90291See store",
            "LA: West Hollywood8400 Melrose Ave., Los Angeles, CA 90069See store",
            "London9 Earlham St., London WC2H 9LL, UKSee store",
            "NYC: NoHo10 Bond St., New York, NY 10012See store",
            "NYC: Williamsburg111 N 3rd St., Brooklyn, NY 11249See store",
            "San Francisco371 Hayes St., San Francisco, CA 94102See store",
            "Seattle2645 NE 46th St., Seattle, WA 98105See store",
            "TorontoYorkdale Shopping Centre, 3401 Dufferin St. Unit 533, Toronto, ON M6A 2T9See store",
        ]

        this.selectStore = page
                .locator('#products')
                .getByRole('link', { name: 'See store' })
                .filter({ hasText: 'NYC: Noho' })
        this.animationClass = '.cta_light__0LlGt'
       // this.animationEnter = page.locator('.cta_animationEnter__6RXYX').first()
        this.animationExit = page.locator('.cta_lightExit__BiSes').first()
    }

    async goToStoresPage() {
        await this.page.goto('https://www.awaytravel.com/stores');
    }

    async verifyInStoresPage() {
        await expect(this.page).toHaveURL(this.storesURL);
        await expect(this.visitOurSite).toBeVisible()
    }
    async verifyStores() {
        await expect(this.storeObjects).toContainText(this.storesList)
    }
    async hoverAnimationArrow() {
       // await expect(this.page.locator('.cta_animationEnter__6RXYX')).toBeVisible()
        await this.page.hover(this.animationClass)
        await expect(this.animationExit).toBeVisible()
    }

    async scrollThroughSite() {
        await this.page.mouse.wheel(0, 9000)
    }

    async selectStoreLocation(storeName, urlName) {
        await this.selectStore.filter({ hasText: storeName }).click({ force: true })
        await expect(this.page).toHaveURL(urlName);
    }

}