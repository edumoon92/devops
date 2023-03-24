// npm install xhr2
var XMLHttpRequest = require('xhr2');

module.exports = {
    get: function(callback) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'http://jsonplaceholder.typicode.com/posts/1', true);
   
      xhr.onreadystatechange = function() {
        if(xhr.readyState == 4) {
          if(xhr.status == 200) {
            callback(null, JSON.parse(xhr.responseText));
          }
          else {
            callback(xhr.status);
          }
        }
      };
   
      xhr.send();
    },
   
    post: function(data, callback) {
      var xhr = new XMLHttpRequest();
      xhr.open('POST', 'http://jsonplaceholder.typicode.com/posts', true);
   
      xhr.onreadystatechange = function() {
        if(xhr.readyState == 4) {
          callback();
        }
      };
   
      xhr.send(JSON.stringify(data));
    }
  };