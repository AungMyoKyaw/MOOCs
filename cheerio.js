const cheerio = require('cheerio');
const fs = require('fs');

const html = fs.readFileSync('./dist/index.html', 'utf8');
const $ = cheerio.load(html);

$('title').text('MOOCs | Aung Myo Kyaw');
$('head').append('<link rel="icon" href="/favicon.png" type="image/png" />');
$('head').append('<meta name="description" content="MOOCs | Aung Myo Kyaw" />');
$('head').append('<meta property="og:site_name" content="MOOCs | Aung Myo Kyaw" />');
$('head').append('<meta property="og:type" content="website" />');
$('head').append('<meta property="og:title" content="MOOCs | Aung Myo Kyaw" />');
$('head').append('<meta property="og:description" content="MOOCs | Aung Myo Kyaw" />');
$('head').append('<meta property="og:url" content="https://moocs.aungmyokyaw.com/" />');
$('head').append('<meta property="og:image" content="/screenshot.png" />');
$('head').append('<meta name="twitter:card" content="/screenshot.png" />');
$('head').append('<meta name="twitter:title" content="MOOCs | Aung Myo Kyaw" />');
$('head').append('<meta name="twitter:description" content="MOOCs | Aung Myo Kyaw" />');
$('head').append('<meta name="twitter:url" content="https://moocs.aungmyokyaw.com/" />');
$('head').append('<meta name="twitter:image" content="/screenshot.png" />');
$('head').append('<meta property="og:image:width" content="5120" />');
$('head').append('<meta property="og:image:height" content="3200" />');
$('head').append('<base target="_blank" />');

const css = fs.readFileSync('./style.css', 'utf8');
$('style').text(css);

fs.writeFileSync('./dist/index.html', $.html());
