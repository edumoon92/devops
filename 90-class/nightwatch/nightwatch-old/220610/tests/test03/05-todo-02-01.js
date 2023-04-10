const url = 'naver.com';

module.exports = {
    '@disabled': false, // This will prevent the test module from running.
    '@tags': ['apiTodo'],

    'TC 1.1 Naver Url Live Test'(client) {
      client
        .url(`https://www.${url}`)
        .pause(1000)

        .url(`https://news.${url}`)
        .pause(1000)

        .url(`https://finance.${url}`)
        .pause(1000)

        .end();

    }
  };