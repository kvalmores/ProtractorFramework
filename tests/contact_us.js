let contactpage = require('../pages/contact_us_page');

describe('contact us tests', function () {

    it('successful submission - specific data', function () {

        browser.waitForAngularEnabled(false);
        
        // browser.get('https://webdriveruniversity.com/Contact-Us/contactus.html');
        contactpage.get('https://webdriveruniversity.com/Contact-Us/contactus.html');

        // element(by.name('first_name')).sendKeys('John');
        contactpage.enterFirstName('John');

        // element(by.name('last_name')).sendKeys('Doe');
        contactpage.enterLastName('Walkins');

        // element(by.name('email')).sendKeys('johndoe@mail.com');
        contactpage.enterEmail('johnwalkins@email.com');

        // element(by.name('message')).sendKeys('This is my comment.');
        contactpage.enterComment('This is my comment.');

        // element(by.css('[type="submit"]')).click();
        contactpage.clickSubmit();

        // let result = element(by.xpath('//div[@id="contact_reply"]/h1', 'Thank You for your Message!'));
        // expect(result.getText()).toEqual('Thank You for your Message!');
        contactpage.verifyMessage('Thank You for your Message!');

        browser.sleep(2000);

    });

    it('successful submission - unique data', function () {

        browser.waitForAngularEnabled(false);
        
        // browser.get('https://webdriveruniversity.com/Contact-Us/contactus.html');
        contactpage.get('https://webdriveruniversity.com/Contact-Us/contactus.html');

        // element(by.name('first_name')).sendKeys('John');
        var randomFirstName = require("randomstring");
        contactpage.enterFirstName('AutoFN' + randomFirstName.generate(5));

        // element(by.name('last_name')).sendKeys('Doe');
        var randomLastName = require("randomstring");
        contactpage.enterLastName('AutoLN' + randomLastName.generate(5));

        // element(by.name('email')).sendKeys('johndoe@mail.com');
        var randomEmail = require("randomstring");
        contactpage.enterEmail('AutoEmail' + randomEmail.generate(10) + '@email.com');

        // element(by.name('message')).sendKeys('This is my comment.');
        var randomComment = require("randomstring");
        contactpage.enterComment('Hello World. ' + randomComment.generate(20));

        // element(by.css('[type="submit"]')).click();
        contactpage.clickSubmit();

        // let result = element(by.xpath('//div[@id="contact_reply"]/h1', 'Thank You for your Message!'));
        // expect(result.getText()).toEqual('Thank You for your Message!');
        contactpage.verifyMessage('Thank You for your Message!');

        browser.sleep(2000);

    });

});