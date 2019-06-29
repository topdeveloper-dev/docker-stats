const fs = require('fs')
setInterval(() => fs.writeFileSync('/data/app1_file.txt', (new Array(1024)).join('.')), 100)