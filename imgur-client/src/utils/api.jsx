var Fetch = require('whatwg-fetch'),
    rootUrl = 'https://api.imgur.com/3/',
    apiKey = 'f032ff64053582a';

module.exports = window.api= {
  get: function(url){
      return fetch(rootUrl + url, {
          headers: {
              'Authorization': 'Client-ID ' + apiKey
          }
      }).then(function(response){
          return response.json()
      })
  }
};