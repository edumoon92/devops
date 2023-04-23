module.exports = {
  '@tags': ['addTodo'],

  'Does not show the task list if there are no tasks'(client) {
    client
      .url('http://todomvc.com/examples/react/#/')
      .waitForElementVisible('.header h1')
      .assert.elementNotPresent('.main')
      .end();
  }
}