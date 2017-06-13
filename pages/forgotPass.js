var ForgotPassPage = function () {

    this.forgotPassLink = element(by.className('md-body-1'));
    this.emailField = element(by.id('email'));
    this.resetButton = element(by.className('md-raised'));
    this.isEmailRequired = element(by.css('input.ng-touched'));
    this.error = element(by.className('error-message'));
    this.isEmailRequiredMessage = element(by.css('.md-input-message-animation'));
};

ForgotPassPage.prototype.forgotPass = function (email) {
    this.emailField.sendKeys(email);
    this.resetButton.click();
};

module.exports = new ForgotPassPage();