#!/usr/bin/env bash

npx markmap-cli --no-toolbar  README.md -o dist/index.html

npm i

# replace Markmap with your own project name.

markmaptitle="<title>Markmap<\/title>"
title="<title>MOOCs | Aung Myo Kyaw<\/title>"
title+="\n<meta name=\"description\" content=\"MOOCs | Aung Myo Kyaw\"\/>"
title+="\n<meta name=\"keywords\" content=\"MOOCs, Aung Myo Kyaw\"\/>"
title+="\n<meta name=\"author\" content=\"Aung Myo Kyaw\"\/>"
title+="\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"\/>"
title+="\n<meta property=\"og:image\" content=\"https:\/\/aungmyokyaw.com\/screenshot.png\"\/>"

openInNewTabAndLinkColorChange="a {\n  color: #000 !important;\n  text-decoration: none;\n}\na:hover {\n color: #2C4C9C !important;\n text-decoration: underline;\n } \n#mindmap {\n  background-color: antiquewhite;\n  }\n<\/style>\n<base target=\"_blank\"\/>"

mvTempToIndexHtml() {
  mv dist/temp.html dist/index.html
}

sed "s/$markmaptitle/$title/" dist/index.html > dist/temp.html

mvTempToIndexHtml

sed "s/<\/style>/$openInNewTabAndLinkColorChange/" dist/index.html > dist/temp.html

mvTempToIndexHtml

screenshot() {
  node screenshot.js
  cp ./assets/screenshot.png ./dist/screenshot.png
}

screenshot
