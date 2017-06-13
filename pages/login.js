var LoginPage = function () {

    this.emailField = element(by.id('email'));
    this.passwordField = element(by.id('password'));
    this.error = element(by.className('error-message'));
    this.loginButton = element(by.className('md-primary'));
    this.isEmailRequired = element(by.xpath('//*[@id="email"]'));
    this.isPassRequired = element(by.xpath('//*[@id="password"]'));
    this.isEmailRequiredMessage = element(by.xpath('//*[@id="main-view-loader"]/main/div/form/div/md-input-container[1]/div[2]/div'));
    this.isPassRequiredMessage = element(by.xpath('//*[@id="main-view-loader"]/main/div/form/div/md-input-container[2]/div[2]/div'));
};

LoginPage.prototype.login = function (email, password) {
    this.emailField.sendKeys(email);
    this.passwordField.sendKeys(password);
    this.loginButton.click();
};

module.exports = new LoginPage();