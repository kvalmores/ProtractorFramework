let homepage = require('../pages/homepage');

describe('demo calculator tests', function () {

    it('addition test', function () {

        homepage.get('http://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber('4');

        homepage.enterSecondNumber('3');

        homepage.clickGo();

        homepage.verifyResult('7');

        browser.sleep(2000);

    });

    it('addition2 test', function () {

        homepage.get('http://juliemr.github.io/protractor-demo/');

        homepage.enterFirstNumber('5');

        homepage.enterSecondNumber('5');

        homepage.clickGo();

        homepage.verifyResult('10');

        browser.sleep(3000);

    });


});