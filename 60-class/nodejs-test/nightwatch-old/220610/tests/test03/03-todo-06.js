module.exports = {
  '@tags': ['addTodo'],

  'Shows how many items there are left'(client) {
    client
      .url('http://todomvc.com/examples/react/#/')
      .waitForElementVisible('.header h1')
      .setValue('.new-todo', 'New task')
      //.keys(client.Keys.ENTER)
      .setValue('.new-todo', client.Keys.ENTER)
      .setValue('.new-todo', 'Another task')
      //.keys(client.Keys.ENTER)
      .setValue('.new-todo', client.Keys.ENTER)
      .assert.containsText('.todo-count', '2 items left')
      .click('.todo-list li:first-child .toggle')
      .assert.containsText('.todo-count', '1 item left')
      
      //.pause()

      .end();
  }
}