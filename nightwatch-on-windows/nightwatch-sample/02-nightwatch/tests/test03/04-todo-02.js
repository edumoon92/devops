module.exports = {
  '@disabled': false, // This will prevent the test module from running.
  '@tags': ['removeTodo'],

  'Clear all completed tasks'(client) {
    client
      .url('http://todomvc.com/examples/react/#/')
      .waitForElementVisible('.header h1', 1000)
      .setValue('.new-todo', 'My new task')
      .setValue('.new-todo', client.Keys.ENTER)
      .setValue('.new-todo', 'My other new task')
      .setValue('.new-todo', client.Keys.ENTER)
      .click('.todo-list li:nth-child(2) .toggle')
      .click('.clear-completed')
      .assert.containsText('.todo-count', '1 item left')
      .assert.containsText('.todo-list li:first-child', 'My new task')
      .end();
  }
};