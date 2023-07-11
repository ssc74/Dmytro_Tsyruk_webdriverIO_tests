import MainPage from '../pageobjects/mainPage.js';
import LoginPage from '../pageobjects/loginPage.js';

describe('Test Login form with empty credentials', () => {
  it('Should open Spotify', async () => {
    await MainPage.open();
  });

  it('Should enter email and password in the fields', async () => {
    await LoginPage.typeEmail('randomEmail');
    await LoginPage.typePassword('randomPassword');
  });

  it('Should clear input fields', async () => {
    await LoginPage.clearInputData();
  });

  it('Should verify  that errors are displayed', async () => {
    await LoginPage.isEmailErrorMessageDisplayed();
    await LoginPage.isPasswordErrorMessageDisplayed();
  });
});
