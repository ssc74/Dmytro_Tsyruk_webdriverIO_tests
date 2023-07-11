import { equal } from 'assert';

class LoginPage {
  get inputEmail() {
    return $('#login-username');
  }

  get inputPassword() {
    return $('#login-password');
  }

  get loginButton() {
    return $('span[class="ButtonInner-sc-14ud5tc-0 cJdEzG encore-bright-accent-set"]');
  }

  get emailErrorMessage() {
    return $('p[class="Type__TypeElement-sc-goli3j-0 gkqrGP sc-bqWxrE iJlXnD"]');
  }

  get passwordErrorMessage() {
    const elements = $$('span[class="Text-sc-g5kv67-0 jYLjty"]');
    return elements[1];
  }

  get usernameText() {
    return $('p[class="Type__TypeElement-sc-goli3j-0 gkqrGP sc-kMjNwy gGIfiR"]');
  }

  get incorrectNameOrPasswordError() {
    return $('div[data-encore-id="banner"]');
  }

  async typeEmail(email) {
    await this.inputEmail.setValue(email);
  }

  async typePassword(password) {
    await this.inputPassword.setValue(password);
  }

  async clearInputData() {
    await this.inputEmail.click();
    const emailValue = await this.inputEmail.getValue();
    for (let i = 0; i < emailValue.length; i++) {
      await browser.keys('Backspace');
    }

    await this.inputPassword.click();
    const passwordValue = await this.inputPassword.getValue();
    for (let i = 0; i < passwordValue.length; i++) {
      await browser.keys('Backspace');
    }
  }

  async login() {
    return this.loginButton.click();
  }

  async isEmailErrorMessageDisplayed() {
    const errorIsDisplayed = await this.emailErrorMessage.isDisplayed();
    equal(errorIsDisplayed, true, 'the error message is not displayed');
    const errorText = await this.emailErrorMessage.getText();
    equal(errorText, 'Please enter your Spotify username or email address.', 'the error message is not displayed');
  }

  async isPasswordErrorMessageDisplayed() {
    const errorIsDisplayed = await this.passwordErrorMessage.isDisplayed();
    equal(errorIsDisplayed, true, 'the error message is not displayed');
    const errorText = await this.passwordErrorMessage.getText();
    equal(errorText, 'Please enter your password.', 'the error message is not displayed');
  }

  async checkErrorLoginMessage() {
    await browser.pause(500);
    const errorIsDisplayed = await this.incorrectNameOrPasswordError.isDisplayed();
    equal(errorIsDisplayed, true, 'the error message is not displayed');
    const errorText = await this.incorrectNameOrPasswordError.getText();
    equal(errorText, 'Incorrect username or password.', 'the error message is not displayed');
  }

  async verifyUserName(expectedName) {
    const name = await this.usernameText.getText();
    equal(name, expectedName, 'wrong user name');
  }
}

export default new LoginPage();
