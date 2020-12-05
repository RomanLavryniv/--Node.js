const path = require('path')

console.log('Назва файлу: ', path.basename(__filename))

console.log('Ім.я дерикторії: ', path.dirname(__filename))

console.log('Розширення файла: ', path.extname(__filename))

console.log('Parse: ', path.parse(__filename).name)

console.log(path.join(__dirmane, 'server', 'index.html'))