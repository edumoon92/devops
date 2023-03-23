module.exports = {
  '@tags': ['addTodo'],

  'On page load, it sets focus on the input field'(client) {
    client
      .url('http://todomvc.com/examples/react/#/')
      .waitForElementVisible('.header h1')
      .assert.elementPresent('.header .new-todo:focus')
      .end();
  }
}