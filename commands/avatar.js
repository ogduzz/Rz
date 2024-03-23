const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  
let user = message.mentions.users.first() || message.author;
let avatar = user.displayAvatarURL({ format: "png", size: 2048 })

const embed = new Discord.MessageEmbed()
.setDescription(`[🖼️ Avatar de ${user.username}](${avatar})`)
.setImage(avatar)
  .setColor("BLACK")
  .setFooter(`Requisitado por ${message.author.tag}`, message.author.displayAvatarURL())
  message.channel.send(embed)
}
