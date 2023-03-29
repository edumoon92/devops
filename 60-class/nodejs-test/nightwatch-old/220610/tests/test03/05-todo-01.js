const url = 'http://todomvc.com/examples/react/#/';

module.exports = {
    '@disabled': false, // This will prevent the test module from running.
    '@tags': ['apiTodo'],

    'Active filter shows non-completed items'(client) {
      client
        .url(`${url}active'`)
        .waitForElementVisible('.header h1')
        .setValue('.new-todo', 'My new task')
        .setValue('.new-todo', client.Keys.ENTER)
        .assert.containsText('.todo-list li:first-child label', 'My new task')
        .pause()
        .end();
    }
  };