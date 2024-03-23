const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args) => {
  
  let member = message.mentions.users.first() || message.author;
  
 let warns = await db.get(`warnsCount_${message.guild.id}-${member.id}`) || 0;
  
  
  const avisos = new Discord.MessageEmbed()
  .setAuthor(`Warns Member`, message.guild.iconURL())
  .setDescription(`📣 **${member.tag} Possui \`${warns}\` Warns**`)
  .setColor("CYAN")
  .setThumbnail(member.displayAvatarURL())
  .setFooter(`Author do Comando ${message.author.tag}`, message.author.displayAvatarURL())
  message.channel.send(avisos)
}

