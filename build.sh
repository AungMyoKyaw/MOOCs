#!/usr/bin/env bash

npx markmap-cli --no-toolbar  README.md -o dist/index.html

# replace Markmap with your own project name.

markmaptitle="<title>Markmap<\/title>"
title="<title>MOOCs | Aung Myo Kyaw<\/title>"
openInNewTab="<\/style>\n<base target=\"_blank\" \/>"

mvTempToIndexHtml() {
  mv dist/temp.html dist/index.html
}

sed "s/$markmaptitle/$title/" dist/index.html > dist/temp.html

mvTempToIndexHtml

sed "s/\<\/style\>/$openInNewTab/" dist/index.html > dist/temp.html

mvTempToIndexHtml
