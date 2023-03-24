module.exports = {
  '@tags': ['addTodo'],

  'Does not show the footer if there are no tasks'(client) {
    client
      .url('http://todomvc.com/examples/react/#/')
      .waitForElementVisible('.header h1')
      .assert.elementPresent('.footer')
      .end();
  }
}