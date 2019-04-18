var Twit = require('twit')

var T = new Twit({
  consumer_key: 'YFPrRu0ynMMj360eNC2jd91mS',
  consumer_secret: 'dnwqyvnXONB1ef129N6JRBSsvWZGKNGPK8kCiAIdImlY6dW8RU',
  access_token: '1118092957402456066-T3NGbV0yeWBjBMzMwdwaPhagjsuw9A',
  access_token_secret: 'unbxJzG1sZoQFMwKItp5Su5jk9wMwHIH3tPKhrdLEEwlY'
})
// search query
// T.get(
//   'search/tweets',
//   { q: '#juventus since:2019-04-18', count: 150 },
//   function(err, data, response) {
//     console.log(data)
//     console.log(data.statuses.length)
//   }
// )

// search trends
T.get('trends/place', { id: '23424909' }, function(err, data, response) {
  //console.log(data[0].trends.length)
  console.log(data[0])
})
