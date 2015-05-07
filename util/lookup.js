(function() {
    'use strict';

    var request = require('request'),
        cheerio = require('cheerio'),
        maxResults = 4;


    function lookup(phrase, cb) {
        request('http://jisho.org/search/' + phrase, function(err, response, body) {
            if (!err && response.statusCode === 200) {
                var $ = cheerio.load(body),
                    ret = [],
                    $results;

                $results = $('#primary').find('.concept_light');

                for (var i = 0; i < $results.length && i < maxResults; i++) {
                    ret.push($results.eq(i).html());
                }

                cb(ret);
            }
        });
    }

    module.exports = lookup;
}());