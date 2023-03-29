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
    driver.get('http://portal.tta.or.kr/index.do').then(function(res) {
      driver
        .findElement(By.id('loginId'))
        .sendKeys('문형철')

      driver
        .findElement(By.id('pwd'))
		.sendKeys('tta1234!@')
        .then(() => driver.findElement(By.className('login_go')).click())
		
	    .then(() => {
          driver.wait(until.elementLocated(By.className('menu06'))).then(() => {

			driver
				.findElement(By.className('menu06'))
				.then(() => driver.findElement(By.className('menu06')).click())

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