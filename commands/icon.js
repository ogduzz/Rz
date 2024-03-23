const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  
  let icon = message.guild.iconURL({ format: "png", size: 2048 })
  
  const icone = new Discord.MessageEmbed()
  .setDescription(`[🖼️ Icone de ${message.guild.name}](${icon})`)
  .setImage(icon)
  .setColor("BLACK")
  .setFooter(`Requisitado por ${message.author.tag}`, message.author.displayAvatarURL())
  message.channel.send(icone)
}