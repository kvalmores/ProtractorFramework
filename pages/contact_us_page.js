let contactpage = function(){

    let firstName_input = element(by.name('first_name'));
    let lastName_input = element(by.name('last_name'));
    let emailAdd_input = element(by.name('email'));
    let comment_input = element(by.name('message'));
    let submitButton = element(by.css('[type="submit"]'));

    this.get = function(url){
        browser.get(url);
    };

    this.enterFirstName = function(firstName){
        firstName_input.sendKeys(firstName);
    };

    this.enterLastName = function(lastName){
        lastName_input.sendKeys(lastName);
    };

    this.enterEmail = function(email){
        emailAdd_input.sendKeys(email);
    };

    this.enterComment = function(comment){
        comment_input.sendKeys(comment);
    };

    this.clickSubmit = function(){
        submitButton.click();
    };

    this.verifyMessage = function(message){
        let result = element(by.xpath('//div[@id="contact_reply"]/h1', message));
        expect(result.getText()).toEqual(message);
    };


};

module.exports = new contactpage();

