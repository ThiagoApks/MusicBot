const dbd = require("dbd.js")
var fs = require("fs")
 
const bot = new dbd.Bot({
token: "NzgzODkxMjE2NTc1NjI3Mjg2.X8hVlg.Qn0qxpdmZroQtwF9rgAx1ajkbuk",
prefix: "ct/"
})
 
bot.status({
  text: "Bora ouvir uma musica, consagrado!",
  type: "PLAYING",
  time: 12
})

bot.status({
  text: "Meu prefixo é ct/",
  type: "PLAYING",
  time: 12
})
 
bot.onMessage()
  
 //commands handler
var reader = fs.readdirSync("./cmd/").filter (file => file.endsWith(".js"))
for(const file of reader) {
  const command = require(`./cmd/${file}`)
  bot.command({
name: command.name, 
code: command.code
  })
}

