// Silahkan Ubah Sesuka Hati Jangan Hapus Tanda ' ' agar script tidak eror.

const fs = require('fs')
const chalk = require('chalk')

global.botnumber = "6287766634035" // Isi Nomor Bot Nya
global.owner = '6287766634035'
global.name = 'izzyhost'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.blueBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})
/**
  * this script cretae for free
  * don't for to sell
  * youtube @LinsOfficiall
  * insragram @rijalsavior
  * whatsapp 6281911317205
  * © Lins Official
*/