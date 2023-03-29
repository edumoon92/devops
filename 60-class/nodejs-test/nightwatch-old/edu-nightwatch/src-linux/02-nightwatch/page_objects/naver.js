module.exports = {
    url: 'https://naver.com',
    elements: {
      searchBar: {
        selector: 'input[type=text]',
      },
      submit: {
        selector: '//button[@id="search_btn"]',
        locateStrategy: 'xpath'
      }
    }
  };