var forgotPass = require('../pages/forgotPass.js');

describe('Navigate to the forgot password page', function () {
    beforeEach(function () {
        browser.get('http://104.131.91.120:3000/#/signin');
    });

    it('should lead to the forgot password page', function () {
        forgotPass.forgotPassLink.click();
        expect(browser.getCurrentUrl()).toContain('forgot-password');

    });
});

describe('Reset password', function () {
    beforeEach(function () {
        browser.get('http://104.131.91.120:3000/#/forgot-password');
    });

    it('should display error message', function () {
        forgotPass.emailField.sendKeys('aaa@aaa.aa');
        forgotPass.resetButton.click();
        expect(forgotPass.error.isDisplayed()).toBeTruthy();
        expect(forgotPass.error.getText()).toEqual('Email not found');
    });

    it('should not allow to reset while entering invalid email', function () {
        forgotPass.emailField.sendKeys('aaa');
        forgotPass.resetButton.click();
        expect(forgotPass.isEmailRequired.isDisplayed()).toBeTruthy();
    });

    it('should not allow to reset without filling in email field', function () {
        forgotPass.emailField.sendKeys('');
        forgotPass.resetButton.click();
        expect(forgotPass.isEmailRequired.isDisplayed()).toBeTruthy();
         expect(forgotPass.isEmailRequiredMessage.isDisplayed()).toBeTruthy();
        expect(forgotPass.isEmailRequiredMessage.getText()).toEqual('Email is required!');
    });
});
