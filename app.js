var express = require('express'),
    path = require('path'),
    app = express(),
    lookup = require('./util/lookup.js');

app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.render('index', {title: 'Jisho Quick-fire'});
});

app.get('/lookup/:phrase', function(req, res) {
    lookup(req.params.phrase, function(results) {
        res.send(JSON.stringify(results));
    })
});

var server = app.listen(80, function () {
    console.log('Jisho lookup server started');
});