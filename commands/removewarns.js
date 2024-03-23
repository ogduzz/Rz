const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send({embed: {
    description: "**❌ Você precisa da permissão de `Administrador` para executar este comando**",
    color: "#ff0000"
  }})
  
  let member = message.mentions.users.first()
  if(!member) return message.channel.send({embed: {
    description: "**❌ Não mencionou um usuario para remover as warns**",
    colot: "#ff0000"
  }})
  

  let warns = await db.get(`warnsCount_${message.guild.id}-${member.id}`)
  
  if(!args[1]) return message.channel.send({embed: {
    description: "**❌ Dê uma quantia de warns a ser removida**",
    color: "#ff0000"
  }})
  
  if(message.content.includes(" -")) return message.channel.send({embed: {
    description: "**❌ Você não pode retirar uma quantia negativa de warns**",
    color: "#ff0000"
  }})
  
  if(member.id === message.author.id) return message.channel.send({embed: {
    description: "**❌ Não podes retirar warns de você mesmo!**",
    color: "#ff0000"
  }})
  
  
  if(warns < args[1]) return message.channel.send({embed: {
    description: "**❌ Não podes retirar warns que o user não possui**",
    color: "#ff0000"
  }})
  
  const rwarns = new MessageEmbed()
  .setTitle("⛔ RemoveWarn sMembers")
  .setColor("#ff0000")
  .setFooter(`RemoveWarn efetuado`, message.author.displayAvatarURL())
  .addField("Removido de", `\`${member.tag}\``)
  .addField("Removido por", `\`${message.author.tag}\``)
  .addField("Quantia", `\`${args[1]}\``)
  message.channel.send(rwarns)
  
  db.subtract(`warnsCount_${message.guild.id}-${member.id}`, args[1])
  
 let channel = message.guild.channels.cache.get(db.get(`cMod_${message.guild.id}`))
if(!channel) {
  return
} else {

const arns = new MessageEmbed()
  .setTitle("RemoveWarns Members")
  .setColor("#ff0000")
  .setFooter(`RemoveWarn efetuado`, message.author.displayAvatarURL())
  .addField("Removido de", `\`${member.tag}\``)
  .addField("Removido por", `\`${message.author.tag}\``)
  .addField("Quantia", `\`${args[1]}\``)
  channel.send(arns)

}


}


