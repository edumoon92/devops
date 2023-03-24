require('chromedriver');
const webdriver = require('selenium-webdriver');
const { By, until } = webdriver;

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
const driver = new webdriver.Builder().forBrowser('chrome').build();
const expect = chai.expect;

describe('End to End Test Suite', done => {
  before(done => {
    console.log('Before everything  to the page');
    driver.get('https://en.wikipedia.org').then(function(res) {
      driver
        .findElement(By.id('searchInput'))
        .sendKeys('wiki')
        .then(() => driver.findElement(By.id('searchButton')).click())
        .then(() => {
          driver.wait(until.elementLocated(By.id('firstHeading'))).then(() => {
            done();
          });
        });
    });
  });

  it('can read message', () => {
    console.log('Ready to read message');
    return expect(driver.findElement(By.id('firstHeading')).getAttribute('innerHTML'))
    .to.eventually.contain('Wiki');
  });
});