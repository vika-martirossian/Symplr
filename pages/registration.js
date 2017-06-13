var RegistrationPage = function () {

   	this.signupLink = element(by.css('a[href="#/signup"]'));
   	this.firstNameField = element(by.css('#name'));
    this.lastNameField = element(by.id('surname'));
    this.emailField = element(by.id('email'));
    this.passwordField = element(by.id('password'));
    this.confirmPassField = element(by.id('re-password'));
    this.termsCheckbox = element(by.className('md-container'));
    this.signupButton = element(by.className('md-button'));
    this.isNameRequired = element(by.xpath('//*[@id="name"]'));
    this.isNameTooShortMessage = element(by.xpath('//*[@id="main-view-loader"]/main/div/form/div/md-input-container[1]/div[2]/div'));
    this.isLastNameTooShortMessage = element(by.xpath('//*[@id="main-view-loader"]/main/div/form/div/md-input-container[2]/div[2]/div'));
    this.isEmailRequired = element(by.xpath('//*[@id="email"]'));
    this.isEmailInvalidMessage = element(by.xpath('//*[@id="main-view-loader"]/main/div/form/div/md-input-container[3]/div[2]/div'));
    this.isPassRequired = element(by.xpath('//*[@id="password"]'));
    this.isPassTooShortMessage = element(by.xpath('//*[@id="main-view-loader"]/main/div/form/div/md-input-container[4]/div[2]/div'));
    this.isRePassRequired = element(by.xpath('//*[@id="re-password"]'));
    this.isCheckRequired = element(by.xpath('//*[@id="main-view-loader"]/main/div/form/div/md-input-container[5]/div[3]/div/p'));
    this.registredUser = element(by.xpath('//*[@id="main-view-loader"]/main/div/form/div/p'));
};

RegistrationPage.prototype.reg = function (firstName, lastName, email, password, confirmPass) {
    this.firstNameField.sendKeys(firstName);
    this.lastNameField.sendKeys(lastName);
    this.emailField.sendKeys(email);
    this.passwordField.sendKeys(password);
    this.confirmPassField.sendKeys(confirmPass);
    this.signupButton.click();
};

module.exports = new RegistrationPage();