const Discord = require("discord.js");
const moment = require("moment");
moment.locale("pt-BR");
const ms = require("ms");

module.exports.run = async (client, message, args) => {
 
 
const stt = {
  online: "Online",
  idle: "Ausente",
  dnd: "Não Pertube",
  offline: "Offline"
}

  let member = message.mentions.users.first() || client.users.fetch(args[0]) || message.author;

 
 
  const uinfoembed = new Discord.MessageEmbed()
  .setAuthor(`👤 User Info`)
  .setColor("BLUE")
  .setFooter(`Requisitado por ${message.author.tag}`, message.author.displayAvatarURL())
  .setTimestamp()
  .addField(`Nome`, `${member.username}\n${member.id}`)
.addField(`Entrou no Servidor dia`, `${moment(member.joinedAt).format("DD/MM/YY, h:mm A" , Date.now())}`)
.addField(` Entrou no Discord dia:`, `${moment(member.createdAt).format("DD/MM/YYYY, h:mm A", Date.now())}`)
  message.channel.send(uinfoembed);
}
