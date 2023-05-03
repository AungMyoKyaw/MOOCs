const cheerio = require('cheerio');
const fs = require('fs');

const html = fs.readFileSync('./dist/index.html', 'utf8');
const $ = cheerio.load(html);

$('head').prepend('<title>MOOCs | Aung Myo Kyaw</title>');
$('head').prepend('<meta name="description" content="MOOCs | Aung Myo Kyaw" />');
$('head').prepend('<meta property="og:site_name" content="MOOCs | Aung Myo Kyaw" />');
$('head').prepend('<meta property="og:type" content="website" />');
$('head').prepend('<meta property="og:title" content="MOOCs | Aung Myo Kyaw" />');
$('head').prepend('<meta property="og:description" content="MOOCs | Aung Myo Kyaw" />');
$('head').prepend('<meta property="og:url" content="https://moocs.aungmyokyaw.com/" />');
$('head').prepend('<meta property="og:image" content="/screenshot.png" />');
$('head').prepend('<meta name="twitter:card" content="/screenshot.png" />');
$('head').prepend('<meta name="twitter:title" content="MOOCs | Aung Myo Kyaw" />');
$('head').prepend('<meta name="twitter:description" content="MOOCs | Aung Myo Kyaw" />');
$('head').prepend('<meta name="twitter:url" content="https://moocs.aungmyokyaw.com/" />');
$('head').prepend('<meta name="twitter:image" content="/screenshot.png" />');
$('head').prepend('<meta property="og:image:width" content="5120" />');
$('head').prepend('<meta property="og:image:height" content="3200" />');

$('head').prepend(
  '<style>* {margin: 0;padding: 0;}#mindmap {display: block;width: 100vw;height: 100vh;}a {color: #000 !important;text-decoration: none;}a:hover {color: #2c4c9c !important;text-decoration: underline;}#mindmap {background-color: antiquewhite;}</style>'
);

fs.writeFileSync('./dist/index.html', $.html());
