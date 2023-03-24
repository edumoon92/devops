module.exports = {
    'HTML5 Page Test' : function(browser) {
     browser
     .url('http://localhost:8081')
     .assert.titleContains('HTML5');
       }
    }
    