module.exports = {
  '@tags': ['addTodo'],

  'When I add a task, it shows todo items'(client) {
    client
      .url('http://todomvc.com/examples/react/#/')
      .waitForElementVisible('.header h1')
      .setValue('.new-todo', ['New task', client.Keys.ENTER])
      //.keys(client.Keys.ENTER)
      //.setValue('.new-todo', client.Keys.ENTER)
      .assert.containsText('.view > label:nth-child(2)', 'New task') // f12 copy select test
      .end();
  }
}