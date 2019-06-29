const fs = require('fs')
const fd = fs.openSync(`/data/app2_file.txt`, 'w')
setInterval(() => fs.writeSync(fd, (new Array(1024)).join('.'), 0), 100)