var cheerio = require('cheerio');
var request = require('request');

var url = 'https://www.minhngoc.group/xstt/MT/mien-trung.php';

var timer = setInterval(function(){
    return crawl();
},4000);

function crawl()
{
    request(url, function(err, res, body)
    {
        var $ = cheerio.load(body);
        var noidung = $('body').text();
        console.log(noidung.indexOf("\""));
    });
}
