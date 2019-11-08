const {Builder, until} = require('selenium-webdriver');

const fs = require('fs');
let driver = new Builder()
    .forBrowser('firefox')
    .usingServer('http://localhost:4444/wd/hub')
    .build();

let categoryUrl = "https://xoso.com.vn/thong-ke-tan-suat.html";

let argv_url = process.argv[2];
if (argv_url && argv_url.indexOf("xoso.com.vn")) {
    categoryUrl = argv_url;
}

console.log({categoryUrl});
driver.get(categoryUrl)
    .then(() => driver.wait(until.titleContains('Thong ke Tan suat xuat hien Lo to'), 1000))
    .then(() => driver.executeScript("window.scrollTo(0, document.body.scrollHeight);"))
    .then(() => driver.getPageSource())
    .then((source) => {
        console.log(source)
        const $ = require('cheerio').load(source);
        let prods = getProductElements($).map(ele => extractProductInfo(ele));
        saveText2File(`./temp/products_${process.argv[3] || Date.now()}.json`, JSON.stringify(prods));
    })
    .then(() => {
        driver.quit();
    });

const getProductElements = ($) => {
    let productEles = [];
    $('#mainsrp-itemlist').find('> div > div > div:nth-child(1) > div').each((_, ele) => {
        productEles.push($(ele));
    });
    return productEles;
};

const extractProductInfo = ($) => {
    let title = normalizeText($.find('.row.row-2.title > a').text());
    let price = normalizeText($.find('.price.g_price.g_price-highlight').text());
    let thumb = $.find('.pic > a > img').attr('src');
    let link = $.find('.pic > a').attr('href');
    return {
        title,
        price,
        thumb,
        link
    };
};

const normalizeText = (text) => {
    return text.replace(/\\n/g, '').trim();
};

const saveText2File = (filepath, text) => {
    fs.writeFile(filepath, text, 'utf8', function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
};


