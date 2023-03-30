module.exports = {
  '@tags': ['addTodo'],

  'Marks a todo item as completed by striking through it'(client) {
    client
      .url('http://todomvc.com/examples/react/#/')
      .waitForElementVisible('.header h1')
      .setValue('.new-todo', 'New task')
      //.keys(client.Keys.ENTER)
      .setValue('.new-todo', client.Keys.ENTER)
      .click('.todo-list li:first-child .toggle')
      .assert.cssClassPresent('.todo-list li:first-child', 'completed')
      .end();
  }
}