const url = 'http://todomvc.com/examples/react/#/';

module.exports = {
    '@disabled': false, // This will prevent the test module from running.
    '@tags': ['apiTodo'],

    'Completed filter does not contain non-completed tasks'(client) {
      client
        .url(url)
        .waitForElementVisible('.header h1')
        .setValue('.new-todo', 'My new task')
        .setValue('.new-todo', client.Keys.ENTER)
        .url(`${url}completed`)
        .assert.elementNotPresent('.todo-list li')
        .end();
    }
  };