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
    console.log('Before open the NAVER URL');
    driver.get('https://www.naver.com').then(function(res) {
      driver
        .findElement(By.id('query'))
        .sendKeys('mocha')
        //.then(() => driver.findElement(By.id('query')).sendKeys(driver.Key.ENTER))
        .then(() => driver.findElement(By.id('search_btn')).click())
        .then(() => {
          driver.wait(until.elementLocated(By.id('wrap'))).then(() => {
            done();
          });
        });
    });
  });

  it('can read result', () => {
    console.log('Ready to read result');
    return expect(driver.findElement(By.id('wrap')).getAttribute('innerHTML'))
    .to.eventually.contain('mocha');
  });
});