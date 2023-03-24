module.exports = {
  '@tags': ['addTodo'],

  'When I add a task, it shows todo items'(client) {
    client
      .url('http://todomvc.com/examples/react/#/')
      .waitForElementVisible('.header h1')
      .setValue('.new-todo', 'New task')
      //.keys(client.Keys.ENTER)
      .setValue('.new-todo', client.Keys.ENTER)
      .assert.containsText('.todo-list li:first-child label', 'New task')
      .end();
  }
}