module.exports = {
    '@disabled': false, // This will prevent the test module from running.
    '@tags': ['removeTodo'],

    'Remove single task'(client) {
      client
        .url('http://todomvc.com/examples/react/#/')
        .waitForElementVisible('.header h1', 1000)
        .setValue('.new-todo', 'My new task')
        .setValue('.new-todo', client.Keys.ENTER)
        .setValue('.new-todo', 'My other new task')
        .setValue('.new-todo', client.Keys.ENTER)
        .click('.todo-list li:first-child .toggle')
        .execute(function() {
          document.getElementsByClassName('todo-list')[0].children[0].children[0].children[2].click();
        }, [], function(result) {
        })
        .assert.containsText('.todo-count', '1 item left')
        .assert.containsText('.todo-list li:first-child', 'My other new task')
        .end();
    }
  };