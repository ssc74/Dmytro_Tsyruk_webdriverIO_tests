import MainPage from '../pageobjects/mainPage.js';
import LoginPage from '../pageobjects/loginPage.js';

describe('Spotify Login Test', () => {
  it('Should open Spotify', async () => {
    await MainPage.open();
  });

  it('Should enter incorrect email and password in the fields', async () => {
    await LoginPage.typeEmail('randomEmail');
    await LoginPage.typePassword('randomPassword');
  });

  it('Should click on Log In button', async () => {
    await LoginPage.login();
  });

  it('Should verify  that errors are displayed', async () => {
    await LoginPage.checkErrorLoginMessage();
  });
});
