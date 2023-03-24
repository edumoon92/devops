module.exports = {
  '@disabled': false, // This will prevent the test module from running.
  '@tags': ['removeTodo'],

  'Clear completed tasks is only visible if there are completed tasks'(client) {
    client
      .url('http://todomvc.com/examples/react/#/')
      .waitForElementVisible('.header h1', 3000)
      .setValue('.new-todo', 'My new task')
      //.submitForm('.todo-form')
      .setValue('.new-todo', client.Keys.ENTER)
      //.verify.hidden('.clear-completed')
      .click('.todo-list li:first-child .toggle')
      .assert.visible('.clear-completed')
      .end();
  }
};