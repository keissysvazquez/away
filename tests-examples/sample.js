// @ts-check
const { test, expect } = require('@playwright/test');

test('homepage has title and links to intro page', async ({ page }) => {
    await page.goto('http://www.awaytravel.com/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Away | Built for modern travel/);

    // create a locator
    const Stores = page.getByRole('link', { name: 'Stores' });

    // Click the get started link.
    await Stores.click();

    // Expects the URL to contain intro.
    await expect(page).toHaveURL(/.*stores/);
    await page.pause()
    await page.getByRole('heading', { name: 'Visit us IRL' }).click();

});

test('homepage has title and links to intro page', async ({ page }) => {

    let stores = [
        {
            "storeName": "Austin",
            "storeAddress": "11701 Domain Blvd. Suite 120 Austin, TX 78758",
        },
        {
            "storeName": "Boston",
            "storeAddress": "50 Seaport Blvd. Boston, MA 02210",
        },
        {
            "storeName": "Chicago",
            "storeAddress": "1121 N State St. Chicago, IL 60610",
        },
        {
            "storeName": "Dallas",
            "storeAddress": "3109 Knox St. Dallas, TX 75205",
        },
        {
            "storeName": "Houston",
            "storeAddress": "4033 Westheimer Rd. Houston, TX 77027",
        },
        {
            "storeName": "LA: Venice Beach",
            "storeAddress": "1103 Abbot Kinney Blvd. Unit #2 Venice, CA 90291",
        },
        {
            "storeName": "LA: West Hollywood",
            "storeAddress": "8400 Melrose Ave. Los Angeles, CA 90069",
        },
        {
            "storeName": "London",
            "storeAddress": "9 Earlham St. London WC2H 9LL, UK",
        },
        {
            "storeName": "NY: SoHo",
            "storeAddress": "10 Bond St. New York, NY 10012",
        },
        {
            "storeName": "NY: Williamsburg",
            "storeAddress": "111 N 3rd St. Brooklyn, NY 11249",
        },
        {
            "storeName": "San Francisco",
            "storeAddress": "371 Hayes St. San Francisco, CA 94102",
        },
        {
            "storeName": "Seattle",
            "storeAddress": "2645 NE 46th St. Seattle, WA 98105",
        },
        {
            "storeName": "Toronto",
            "storeAddress": "3401 Dufferin St. Unit 533 Toronto, ON M6A 2T9",
        },


    ]


    let firstNumberAboveTen = stores.find(function (store) {
        return store > 10;
    });
    console.log(firstNumberAboveTen); // 14

});
