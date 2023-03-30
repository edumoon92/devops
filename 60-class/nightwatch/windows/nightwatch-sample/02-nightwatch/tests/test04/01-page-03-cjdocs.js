module.exports = {
  'User can sign in'(client) {
    const signinPage = client.page.cjdocsSignInPage();
    const instancesPage = client.page.cjdocsResultsPage();

    const EMAIL = 'test@example.com';
    const PASSWORD = 'testtest';

    signinPage
      .navigate()
      .signin(EMAIL, PASSWORD);

    instancesPage.expect.element('@homepageWelcomeTitle').text.to.contain('Welcome to the CJDocs Home!');

    client.end();
  }
};