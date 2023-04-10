const url = 'http://todomvc.com/examples/react/#/';

module.exports = {
    '@disabled': false, // This will prevent the test module from running.
    '@tags': ['apiTodo'],

    'Active filter hides completed items'(client) {
      client
        .url(url)
        .waitForElementVisible('.header h1')
        .setValue('.new-todo', 'My new task')
        .setValue('.new-todo', client.Keys.ENTER)
        .click('.todo-list li:first-child .toggle')
        .url(`${url}active`)
        .assert.elementNotPresent('.todo-list li')
        .end();
    }
  };