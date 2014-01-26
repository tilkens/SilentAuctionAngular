var http = require('http');
var express = require('express');
var sql = require('mysql');
var app = express();

app.use(express.cookieParser());
app.use(express.session({secret: '1234567890QWERTY'}));
app.use(express.bodyParser());


app.get('/api/items', function(req, res) {
	
	res.setHeader('Access-Control-Allow-Origin', '*');

  res.send(JSON.stringify([
  	{
  		Id: 1,
  		Title: 'First Item',
  		Description: 'this is just the first item, but it is a pretty good one anyways.',
  		StartDate: '2014-01-01',
  		EndDate: '2014-02-28',
  		DonatedBy: 'Melissa Nelson',
  		DonatedLink: 'https://www.facebook.com/mplsyogamama'
  	},
  	{
  		Id: 1,
  		Title: 'Second Item',
  		Description: 'this is the second item... probalby better than that crappy first one.',
  		StartDate: '2014-01-01',
  		EndDate: '2014-02-28',
  		DonatedBy: 'Trent Nelson',
  		DonatedLink: 'www.copperconsultingmn.com'
  	},

  ]));
});

http.createServer(app).listen(8887, function() {
  ('express app started.');
});


