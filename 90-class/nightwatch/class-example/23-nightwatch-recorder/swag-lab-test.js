describe("Swag Labs Test", function () {
it("tests Swag Labs Test", function (browser) {
  browser.windowRect({width: 843, height: 684})
  .navigateTo("http://192.168.56.101:3000/")
  .click("[data-test='username']")
  .setValue("[data-test='username']", "standard_user")
  .click("[data-test='password']")
  .setValue("[data-test='password']", "secret_sauce")
  .click("[data-test='login-button']")
  .click("#item_4_title_link > div")
  .click("[data-test='add-to-cart-sauce-labs-backpack']")
  .click("[data-test='back-to-products']")
  .click("[data-test='remove-sauce-labs-backpack']")
  .click("#shopping_cart_container > a")
  .click("[data-test='continue-shopping']")
  .click("[data-test='add-to-cart-sauce-labs-bike-light']")
  .click("div:nth-of-type(2) > div > div > div > div:nth-of-type(2) div.pricebar > div")
  .click("#item_1_title_link > div")
  .click("[data-test='add-to-cart-sauce-labs-bolt-t-shirt']")
  .click("#shopping_cart_container > a")
  .click("[data-test='checkout']")
  .click("[data-test='firstName']")
  .setValue("[data-test='firstName']", "henry")
  .perform(function() {
            const actions = this.actions({async: true});

            return actions
            .keyDown(this.Keys.TAB);
          })
  .perform(function() {
            const actions = this.actions({async: true});

            return actions
            .keyUp(this.Keys.TAB);
          })
  .setValue("[data-test='lastName']", "moon")
  .perform(function() {
            const actions = this.actions({async: true});

            return actions
            .keyDown(this.Keys.TAB);
          })
  .perform(function() {
            const actions = this.actions({async: true});

            return actions
            .keyUp(this.Keys.TAB);
          })
  .setValue("[data-test='postalCode']", "12345")
  .click("[data-test='continue']")
  .click("div.summary_total_label")
  .click("div.summary_tax_label")
  .click("[data-test='finish']")
  .click("[data-test='back-to-products']")
  .end();
  });
});
