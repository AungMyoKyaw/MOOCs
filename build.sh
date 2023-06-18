#!/usr/bin/env bash

npm i

npm run format

npx markmap-cli --no-toolbar --no-open README.md -o dist/index.html

node cheerio.js

screenshot() {
  node screenshot.js
  cp ./assets/screenshot.png ./dist/screenshot.png
}

screenshot
