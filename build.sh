#!/usr/bin/env bash

npx markmap-cli --no-toolbar  README.md -o dist/index.html

# replace Markmap with your own project name.

markmaptitle="<title>Markmap<\/title>"
title="<title>MOOCs | Aung Myo Kyaw<\/title>"
openInNewTabAndLinkColorChange="a {\n  color: #000 !important;\n  text-decoration: none;\n}\na:hover {\n color: #2C4C9C !important;\n font-weight: 400;\n text-decoration: none;\n } \n#mindmap {\n  background-color: antiquewhite;\n  }\n<\/style>\n<base target=\"_blank\"\/>"

mvTempToIndexHtml() {
  mv dist/temp.html dist/index.html
}

sed "s/$markmaptitle/$title/" dist/index.html > dist/temp.html

mvTempToIndexHtml

sed "s/\<\/style\>/$openInNewTabAndLinkColorChange/" dist/index.html > dist/temp.html

mvTempToIndexHtml
