const apm = require('elastic-apm-node').start({

  // Use if APM Server requires a secret token
      secretToken: '',
      logLevel:"debug",
      captureBody: 'all',
      active: true,
      usePathAsTransactionName: true,
      serverUrl: 'http://localhost:8200',// Set custom APM Server URL
      environment: 'production'
})

var client = require('./connection.js');
var constituencies = require('./constituencies.js');
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const app = require('express')()

app.get('/', function (req, res) {
  client.index({
    index: 'gov',
    id: getRandomInt(50000),
    type: 'constituencies',
    body: {
      "ConstituencyName": "Ipswich",
      "ConstituencyID": "E14000761",
      "ConstituencyType": "Borough",
      "Electorate": 74499,
      "ValidVotes": 48694,
    }
  },function(err,resp,status) {
      console.log(resp);
  });
  //constituencies.myfunction();
  res.send('Hello World!')
})
app.listen(3000)

module.exports = app;
