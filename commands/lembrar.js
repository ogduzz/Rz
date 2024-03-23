const Discord = require("discord.js")
const ms = require("ms")

module.exports.run = async (client, message, args) => {

message.channel.send({embed: {
  descriptin: "**Você quer que eu te lembre de?**",
  color: "BLUE"
}}).then(msg => {
  let collector = message.channel.createMessageCollector(m => m.author.id === message.author.id, {max: 1})
  .on("collect", message => {
    message.delete()
    let content = message.content;
    if(content.length > 500) return message.channel.send("**Sua mensagem não pode passar de 500 caracteres**")
    msg.edit("**Quando você quer que eu te lembre? ex `1m = 1 minuto, 1h = 1 hora, 1d = 1 dia`**").then(msg1 => {
      let collector2 = message.channel.createMessageCollector(m => m.author.id === message.author.id, {max: 1})
      .on("collect", message => {
        message.delete()
        let tempo = message.content;
        if(content.length > 3) return message.channel.send("**Me dê um valor correto**")

        msg.edit({embed: {
          description: `**Irei te lembrar de \`${content}\` daqui \`${tempo}\`**`,
        color: "BLUE"
        }})
        setTimeout(function() {
          const embed = new Discord.MessageEmbed()
          .setDescription(`**\`${message.author.username}\` estou te lembrando de \`${content}\`, ja se passaram os \`${tempo}\`**`)
          .setColor("GREEN")
          message.channel.send(`${message.author}`, embed)

          message.author.send({embed: {
            description: `Vim aqui te lembrar de \`${content}\`, ja se passaram os \`${tempo}\``,
            color: "GREEN"
          }})
        }, ms(tempo))
      })
    })
  })
})
}