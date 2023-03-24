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
    driver.get('https://www.coupang.com/').then(function(res) {
      driver
        .findElement(By.id('headerSearchKeyword'))
        .sendKeys("비타500")
        //.then(() => driver.findElement(By.id('headerSearchBtn')).click())
        .then(() => {
          driver
          .wait(until.elementLocated(By.className('search-product-wrap'))).then(() => {
            console.log('found element');
            done();
          });
        });

      driver
        .findElement(By.id('headerSearchKeyword'))
        .sendKeys(webdriver.Keys.Enter)

	});


  });

  
  it('can read message', () => {
    console.log('Ready to read message');
    /*
    return expect(driver.findElement(By.id('search-product-wrap')).getAttribute('innerHTML'))
    .to.eventually.contain('Wiki');
    */
  });
  
});