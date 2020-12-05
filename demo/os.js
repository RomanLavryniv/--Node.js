const os = require('os')

console.log('Операційна система: ', os.platform())

console.log('Архітектура процессора: ', os.arch())

console.log('Інформація по процессору: ', os.cpus())

console.log('Вільно пам.яті: ', os.freemem())

console.log('Всього пам.яті: ', os.totalmem())

console.log('Домашня директорія: ', os.homedir())

console.log('Включений: ', os.uptime())