const cheerio = require('cheerio');
const fs = require('fs');

const html = fs.readFileSync('./dist/index.html', 'utf8');
const $ = cheerio.load(html);

$('head').prepend('<meta charset="UTF-8">');
$('head').prepend('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
$('head').prepend('<meta http-equiv="X-UA-Compatible" content="ie=edge">');
$('head').prepend('<title>MOOCs | Aung Myo Kyaw</title>');
$('head').prepend('<meta name="description" content="MOOCs | Aung Myo Kyaw"/>');
$('head').prepend('<meta name="keywords" content="MOOCs, Aung Myo Kyaw"/>');
$('head').prepend('<meta name="author" content="Aung Myo Kyaw"/>');
$('head').prepend('<meta name="viewport" content="width=device-width, initial-scale=1.0"/>');
$('head').prepend('<meta property="og:image" content="https://aungmyokyaw.com/screenshot.png"/>');
$('head').prepend('<meta property="og:title" content="MOOCs | Aung Myo Kyaw"/>');
$('head').prepend('<meta property="og:description" content="MOOCs | Aung Myo Kyaw"/>');
$('head').prepend('<meta property="og:url" content="https://aungmyokyaw.com"/>');
$('head').prepend('<meta property="og:type" content="website"/>');
$('head').prepend('<meta property="og:site_name" content="MOOCs | Aung Myo Kyaw"/>');
$('head').prepend('<meta property="og:locale" content="en_US"/>');

$('head').prepend('<style>* {margin: 0;padding: 0;}#mindmap {display: block;width: 100vw;height: 100vh;}a {color: #000 !important;text-decoration: none;}a:hover {color: #2c4c9c !important;text-decoration: underline;}#mindmap {background-color: antiquewhite;}</style>');

fs.writeFileSync('./dist/index.html', $.html());
