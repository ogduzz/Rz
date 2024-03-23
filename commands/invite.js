const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  
  const invite = new Discord.MessageEmbed()
  .setAuthor(`Invite Bot`, client.user.displayAvatarURL())
  .setDescription(`**Ola ${message.author.username} vejo que você quer me adicionar em seu servidor, muito obrigado mesmo!! estará me ajudando a crescer muito, para me adicionar [Clique Aqui](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=2147483647)**`)
  .setColor("BLUE")
  message.channel.send(invite)
}