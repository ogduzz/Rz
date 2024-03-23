const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args) => {
  if(!message.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send({embed: {
    description: "**❌ Você precisa da permissão de `Gerenciar Cargos` para executar este comano",
    color: "#ff0000"
  }})
  
  let member = message.mentions.users.first() 
  if(!member) return message.channel.send({embed: {
    description: "**❌ Você deve mencionar um usuário a ser Avisado**",
    color: "#ff0000"
  }})
  
  if(member.id === message.author.id) return message.channel.send({embed: {
    description: "**❌ Não podes dar warn em você mesmo**",
    color: "#ff0000"
  }})
  
  let motivo = args.slice(1).join(" ")
  if(!motivo) return message.channel.send({embed: {
    description: "**❌ Você precisa setar um motivo para avisar o usuario**",
    color: "#ff0000"
  }})
  
  const aviso = new Discord.MessageEmbed()
  .setTitle("⛔ Warn Member")
   .addField("Avisado", `\`${member.tag}\``)
  .addField("Avisado por", `\`${message.author.tag}\``)
  .addField("Motivo", `\`${motivo}\``)
  .setFooter(`Warn Efetuado`, message.author.displayAvatarURL())
  .setColor("#ff0000")
  message.channel.send(aviso)
  
  db.add(`warnsCount_${message.guild.id}-${member.id}`, 1)
  
  let channel = await message.guild.channels.cache.get(db.get(`cMod_${message.guild.id}`))
  if(!channel) {
    return
  } else {
  const embed2 = new Discord.MessageEmbed()
  .setAuthor("Warn Member", member.displayAvatarURL())
  .addField("Avisado", `\`${member.tag}\``)
  .addField("Avisado por", `\`${message.author.tag}\``)
  .addField("Motivo", `\`${motivo}\``)
  .setColor("#ff0000")
  .setTimestamp()
  channel.send(embed2)
  }
}

