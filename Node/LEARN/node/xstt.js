var cheerio = require('cheerio');
var request = require('request');

var url = 'https://www.minhngoc.group/xstt/MB/mien-bac.php';

var timer = setInterval(function(){
    return crawl();
},6000);

function crawl()
{
    request(url, function(err, res, body)
    {
        var $ = cheerio.load(body);
        var noidung = $('body').text();
        //var x=typeof noidung;
        //var json = JSON.stringify(noidung);
        console.log(noidung);
    });
}
