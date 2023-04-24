describe("suite - coffee cart demo", function () {
it("tests - coffee cart demo", function (browser) {
  browser.windowRect({width: 826, height: 667})
  .navigateTo("https://coffee-cart.netlify.app/")
  .click("[data-test='Espresso']")
  .click("[data-test='Espresso_Macchiato']")
  .click("[data-test='Cappuccino']")
  .click("button.yes")
  .click("li:nth-of-type(2) > a")
  .click("[data-test='checkout']")
  .setValue("#name", "henry")
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
  .setValue("#email", "henry@example.com")
  .click("#submit-payment")
  .end();
  });
});
