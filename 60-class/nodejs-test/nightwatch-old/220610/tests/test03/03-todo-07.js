module.exports = {
  '@tags': ['addTodo'],

  'Does not add empty or blank tasks'(client) {
    client
      .url('http://todomvc.com/examples/react/#/')
      .waitForElementVisible('.header h1')
      .setValue('.new-todo', 'New task')
      //.keys(client.Keys.ENTER)
      .setValue('.new-todo', client.Keys.ENTER)
      //.keys(client.Keys.ENTER)
      .setValue('.new-todo', client.Keys.ENTER)
      .setValue('.new-todo', '  ')
      //.keys(client.Keys.ENTER)
      .setValue('.new-todo', client.Keys.ENTER)
      .assert.containsText('.todo-count', '1 item left')
      .end();
  }
}