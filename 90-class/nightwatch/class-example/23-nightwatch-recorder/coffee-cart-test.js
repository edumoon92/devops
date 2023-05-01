describe("coffee-cart suite", function () {
    it("coffee-cart test", function (browser) {
      browser
      //.windowRect({width: 826, height: 667})
      .url("https://coffee-cart.netlify.app/")
      .click("[data-test='Espresso']")
      .click("[data-test='Espresso_Macchiato']")
      .click("[data-test='Cappuccino']")
      .click("button.yes")
      .click("li:nth-of-type(2) > a")
      .click("[data-test='checkout']")
      .setValue("#name", "henry")
      .click("#email")
      .setValue("#email", "henry@example.com")
      .click("#submit-payment")
      .end();
      });
    });
    
