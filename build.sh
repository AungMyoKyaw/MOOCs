#!/usr/bin/env bash

npx markmap-cli --no-toolbar --no-open README.md -o dist/index.html

npm i

node cheerio.js

screenshot() {
  node screenshot.js
  cp ./assets/screenshot.png ./dist/screenshot.png
}

screenshot
