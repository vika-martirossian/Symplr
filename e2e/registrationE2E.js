var reg = require('../pages/registration.js');

describe('Navigate to the Sign up page', function () {
    beforeEach(function () {
        browser.get('http://104.131.91.120:3000/#/signin');
    });

    it('should navigate to the sign up page', function () {
        reg.signupLink.click();
        expect(browser.getCurrentUrl()).toContain('signup');
        expect(element(by.tagName('h2')).isDisplayed()).toBeTruthy();
    });
});

describe('Registration with invalid credentials', function () {
    beforeEach(function () {
        browser.get('http://104.131.91.120:3000/#/signup');
    });

    it('should not allow to register without filling in first name field', function () {
        reg.reg('', 'ass', 'aa@mm.com', '123456', '123456');
        reg.termsCheckbox.click();
        reg.signupButton.click();
        expect(browser.getCurrentUrl()).toContain('signup');
        expect(reg.isEmailRequired.isDisplayed()).toBeTruthy();
    });

    it('should warn that the name is too short', function () {
        reg.reg('aa', 'ass', 'aa@mm.com', '123456', '123456');
        reg.termsCheckbox.click();
        reg.signupButton.click();
        expect(browser.getCurrentUrl()).toContain('signup');
        expect(reg.isNameRequired.isDisplayed()).toBeTruthy();
        expect(reg.isNameTooShortMessage.isDisplayed()).toBeTruthy();
        expect(reg.isNameTooShortMessage.getText()).toEqual('That\'s too short!');
    });

    it('should warn that the surname is too short', function () {
        reg.reg('aaa', 'as', 'aa@mm.com', '123456', '123456');
        reg.termsCheckbox.click();
        reg.signupButton.click();
        expect(browser.getCurrentUrl()).toContain('signup');
        expect(reg.isLastNameTooShortMessage.isDisplayed()).toBeTruthy();
        expect(reg.isLastNameTooShortMessage.getText()).toEqual('That\'s too short!');
    });

    it('should not allow to register without filling in email field', function () {
        reg.reg('aaa', 'ass', '', '123456', '123456');
        reg.termsCheckbox.click();
        reg.signupButton.click();
        expect(browser.getCurrentUrl()).toContain('signup');
        expect(reg.isEmailRequired.isDisplayed()).toBeTruthy();
    });

    it('should display error message that email is invalid', function () {
        reg.reg('aaa', 'ass', 'aaa', '123456', '123456');
        reg.termsCheckbox.click();
        reg.signupButton.click();
        expect(browser.getCurrentUrl()).toContain('signup');
        expect(reg.isEmailRequired.isDisplayed()).toBeTruthy();
        expect(reg.isEmailInvalidMessage.isDisplayed()).toBeTruthy();
        expect(reg.isEmailInvalidMessage.getText()).toEqual('Invalid email address!');
    });

    it('should display error message that the name and last name are too short and the email is invalid', function () {
        reg.reg('aa', 'as', 'aaa', '123456', '123456');
        reg.termsCheckbox.click();
        reg.signupButton.click();
        expect(browser.getCurrentUrl()).toContain('signup');
        expect(reg.isNameRequired.isDisplayed()).toBeTruthy();
        expect(reg.isNameTooShortMessage.isDisplayed()).toBeTruthy();
        expect(reg.isNameTooShortMessage.getText()).toEqual('That\'s too short!');
        expect(reg.isLastNameTooShortMessage.isDisplayed()).toBeTruthy();
        expect(reg.isLastNameTooShortMessage.getText()).toEqual('That\'s too short!');
        expect(reg.isEmailRequired.isDisplayed()).toBeTruthy();
        expect(reg.isEmailInvalidMessage.isDisplayed()).toBeTruthy();
        expect(reg.isEmailInvalidMessage.getText()).toEqual('Invalid email address!');
    });

    it('should display error message that the name, last name and the password are too short and the email is invalid', function () {
        reg.reg('aa', 'as', 'aaa', '1231', '123456');
        reg.termsCheckbox.click();
        reg.signupButton.click();
        expect(browser.getCurrentUrl()).toContain('signup');
        expect(reg.isNameRequired.isDisplayed()).toBeTruthy();
        expect(reg.isNameTooShortMessage.isDisplayed()).toBeTruthy();
        expect(reg.isNameTooShortMessage.getText()).toEqual('That\'s too short!');
        expect(reg.isLastNameTooShortMessage.isDisplayed()).toBeTruthy();
        expect(reg.isLastNameTooShortMessage.getText()).toEqual('That\'s too short!');
        expect(reg.isEmailRequired.isDisplayed()).toBeTruthy();
        expect(reg.isEmailInvalidMessage.isDisplayed()).toBeTruthy();
        expect(reg.isEmailInvalidMessage.getText()).toEqual('Invalid email address!');
        expect(reg.isPassRequired.isDisplayed()).toBeTruthy();
        expect(reg.isPassTooShortMessage.isDisplayed()).toBeTruthy();
        expect(reg.isPassTooShortMessage.getText()).toEqual('That\'s too short!');
    });

    it('should display error message that passwords don\'t match', function () {
        reg.reg('aaa', 'asa', 'aaa@aa.com', '123412', '123456');
        reg.termsCheckbox.click();
        reg.signupButton.click();
        expect(reg.isRePassRequired.isDisplayed()).toBeTruthy();
    });

    it('should display error message sign up without checking terms and condintions checkbox', function () {
        reg.reg('aaa', 'asa', 'aaa@aa.com', '123412', '123456');
        reg.signupButton.click();
        expect(reg.isCheckRequired.isDisplayed()).toBeTruthy();
    });

    it('should not allow to sign up without filling in password field', function () {
        reg.reg('aaa', 'asa', 'aaa@aa.com', '', '123456');
        reg.termsCheckbox.click();
        reg.signupButton.click();
        expect(reg.isPassRequired.isDisplayed()).toBeTruthy();
        expect(reg.isRePassRequired.isDisplayed()).toBeTruthy();
    });

    it('should not allow to sign up without filling in password and confirm password fields', function () {
        reg.reg('aaa', 'asa', 'aaa@aa.com', '', '');
        reg.termsCheckbox.click();
        reg.signupButton.click();
        expect(reg.isPassRequired.isDisplayed()).toBeTruthy();
        expect(reg.isRePassRequired.isDisplayed()).toBeTruthy();
    });

    it('should not allow to sign up with already registered email', function () {
        reg.reg('aaa', 'asa', 'drako@malfoi.com', '123456', '123456');
        reg.termsCheckbox.click();
        reg.signupButton.click();
        expect(reg.registredUser.isDisplayed()).toBeTruthy();
    });
});