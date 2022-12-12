// example.spec.js
const { test, expect } = require('@playwright/test');
const { AwayHomePage } = require('../pageObjects/away-home-page');
const { AwayStoresPage } = require('../pageObjects/away-stores-page');
const { AwayinStorePage } = require('../pageObjects/away-in-store-page');


test('Navigating to home page', async ({ page }) => {
    const awayHomePage = new AwayHomePage(page);
    await awayHomePage.goto();
    await awayHomePage.goToStores()
});
test('Validate Stores page', async ({ page }) => {
    // TODO: make this dynamic, to be able to run through all stores in one test. 
    const awayStoresPage = new AwayStoresPage(page);
    await awayStoresPage.goToStoresPage()
    await awayStoresPage.hoverAnimationArrow()
    await awayStoresPage.verifyInStoresPage()
    await awayStoresPage.scrollThroughSite()
    await awayStoresPage.verifyStores()
    await awayStoresPage.selectStoreLocation('NYC: NoHo', /.*newyork/)
});

test('Select NYC:Noho Store page', async ({ page }) => {
    // TODO: make this dynamic, to be able to run through all stores in one test. 
    const awayStoresPage = new AwayStoresPage(page);
    await awayStoresPage.goToStoresPage()
    await awayStoresPage.selectStoreLocation('NYC: NoHo', /.*newyork/)
});


test('Validate Store Details', async ({ page }) => {
    const awayInStorePage = new AwayinStorePage(page);
    await awayInStorePage.goToStorePage(/newyork/)
    await awayInStorePage.validateTitleAwayIn('New York City: NoHo')
    await awayInStorePage.validateDescription()
    await awayInStorePage.validateAdditionalStoreInformation()
});


test('Validate Gallery Details', async ({ page }) => {
    const awayInStorePage = new AwayinStorePage(page);
    await awayInStorePage.goToStorePage(/newyork/)
    await awayInStorePage.imageGallery()
    await awayInStorePage.gallerySlide()
});

test.only('Validate Map section', async ({ page }) => {
    const awayInStorePage = new AwayinStorePage(page);
    await awayInStorePage.goToStorePage(/newyork/)
    await awayInStorePage.mapInteraction()
    await awayInStorePage.mapSection()
});