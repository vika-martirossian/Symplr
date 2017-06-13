var login = require('../pages/login.js');

describe('Symplr login with invalid credentials', function () {
    beforeEach(function () {
        browser.get('http://104.131.91.120:3000/#/signin');
    });

    it('should display error message while login with unregistered email', function () {
        login.login('aaa@aaa.com', '1111111');
        expect(login.error.isDisplayed()).toBe(true);
        expect(login.error.getText()).toEqual('Not found.');
    });

    it('should display error message while login valid email and invalid password', function () {
        login.login('aa@aa.ss', '111');
        expect(login.error.isDisplayed()).toBe(true);
        expect(login.error.getText()).toEqual('Not found.');
    });

    it('should display error message while login with regestered email and inncorrect password', function () {
        login.login('drako@malfoi.com', '1111111');
        expect(login.error.isDisplayed()).toBe(true);
        expect(login.error.getText()).toEqual('Not found.');
    });

    it('should not allow to login without filling in email and password fields', function () {
        login.login('', '');
        expect(login.isEmailRequired.isDisplayed()).toBeTruthy();
        expect(login.isEmailRequiredMessage.getText()).toEqual('Email is required');
        expect(login.isPassRequired.isDisplayed()).toBeTruthy();
        expect(login.isPassRequiredMessage.getText()).toEqual('Password is required');
    });

    it('should not allow to login without filling in email field and entering invalid password', function () {
        login.login('', 'aa');
        expect(login.isEmailRequired.isDisplayed()).toBeTruthy();
        expect(login.isEmailRequiredMessage.getText()).toEqual('Email is required');
    });

    it('should not allow to login without filling in email field and entering valid password', function () {
        login.login('', 'aaaaaa');
        expect(login.isEmailRequired.isDisplayed()).toBeTruthy();
        expect(login.isEmailRequiredMessage.getText()).toEqual('Email is required');
    });

    it('should not allow to login with invalid email and leaving password field blank', function () {
        login.login('aaa', '');
        expect(login.isPassRequired.isDisplayed()).toBeTruthy();
        expect(login.isPassRequiredMessage.getText()).toEqual('Password is required');
    });

    it('should not allow to login with valid email and leaving password field blank', function () {
        login.login('aaa@aa.com', '');
        expect(login.isPassRequired.isDisplayed()).toBeTruthy();
        expect(login.isPassRequiredMessage.getText()).toEqual('Password is required');
    });

    it('should not allow to login with invalid email and invalid password', function () {
        login.login('aaa@', 'aaa');
        expect(login.isEmailRequired.isDisplayed()).toBeTruthy();
        expect(login.isPassRequired.isDisplayed()).toBeTruthy();
    });
});

/*
describe('Symplr login with valid credentials', function () {
    beforeEach(function () {
        browser.get('http://104.131.91.120:3000/#/signin');
    });

    it('should login successfully and lead to the main dashboard', function () {
        login.login('drako@malfoi.com', '123456');
        expect(browser.getCurrentUrl()).toContain('dashboard');
    });
});
*/