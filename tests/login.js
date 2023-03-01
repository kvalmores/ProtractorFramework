// let contactpage = require('../pages/contact_us_page');

describe('login tests', function () {

    it('Validate Successful login', function () {

        browser.waitForAngularEnabled(false);
        browser.get('https://webdriveruniversity.com/Login-Portal/index.html?');

        element(by.id('text')).sendKeys('webdriver');

        element(by.id('password')).sendKeys('webdriver123');

        element(by.id('login-button')).click();
        
        // browser.sleep(3000);

        let alertDialog = browser.switchTo().alert();
        expect(alertDialog.getText()).toEqual('validation succeeded');

        browser.sleep(2000);

        alertDialog.accept();
    });

    it('Validate Unsuccessful login', function () {

        browser.waitForAngularEnabled(false);
        browser.get('https://webdriveruniversity.com/Login-Portal/index.html?');

        element(by.id('text')).sendKeys('webdriver');

        element(by.id('password')).sendKeys('password123');

        element(by.id('login-button')).click();
        
        // browser.sleep(3000);

        let alertDialog = browser.switchTo().alert();
        expect(alertDialog.getText()).toEqual('validation failed');

        browser.sleep(2000);

        alertDialog.accept();
    });

});

