import MainPage from '../pageobjects/mainPage.js';
import LoginPage from '../pageobjects/loginPage.js';

describe('Spotify Login Test', () => {
  it('Should open Spotify', async () => {
    await MainPage.open();
  });

  it('Should enter correct email and password in the fields', async () => {
    await LoginPage.typeEmail('testEmail312@gmail.com');
    await LoginPage.typePassword('testPasword');
  });

  it('Should click on Log In button', async () => {
    await LoginPage.login();
  });

  it('Should verify the user name', async () => {
    await LoginPage.verifyUserName('Logged in as TestName.');
  });
});
