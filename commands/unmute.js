const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args) => {
  if(!message.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) {
    return message.channel.send({embed: {
      description: "**❌ Você não possui permissão de `Gerenciar Cargos` para executar este comando**",
      color: "#ff0000"
    }})
  }
  if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) {
    return message.channel.send({embed: {
      description: "**❌ Eu não possuo a permissão de `Gerenciar Cargo` para executar este comando**",
      color: "#ff0000"
    }})
  }
  
  let member = message.mentions.members.first()
  if(!member) {
    return message.channel.send({embed: {
      description: "**❌ Não encontrei o membro informado**",
      color: "#ff0000"
    }})
  }
  if(member.id === message.author.id) {
    return message.channel.send({embed: {
      description: "**❌ Você não pode se desmutar**",
      color: "#ff0000"
    }})
  }
  let user = message.mentions.users.first()
  
  let role = message.guild.roles.cache.find(ch => ch.name === "Silenciado")
  if(!role) {
    return message.channel.send({embed: {
      description: "**❌ Não encontrei o cargo `Silenciado` para executar este comando**",
      color: "#ff0000"
    }})
  }
  
const ute = new Discord.MessageEmbed()
.setTitle("⛔ Unmute Member")
.addField("Desmutado", `\`${user.tag}\``)
 .addField("Desmutado por", `\`${message.author.tag}\``)
  .addField("Cargo Removido", `\`${role.name}\``)
  .setFooter("Unmute Efetuado", message.author.displayAvatarURL())
  .setThumbnail(user.displayAvatarURL())
  .setColor("#ff0000")
  .setTimestamp()
  message.channel.send(ute)
  member.roles.remove(role.id)
  
let channel = await message.guild.channels.cache.get(db.get(`cMod_${message.guild.id}`))
if(!channel) {
  return
} else {
const modl = new Discord.MessageEmbed()
.setAuthor("Unmute Member", message.guild.iconURL())
.addField("Desmutado", `\`${user.tag}\``)
.addField("Desmutado por", `\`${message.author.tag}\``)

.addField("Cargo Removido", `\`${role.name}\``)
.setTimestamp()
.setColor("#FF0000")
channel.send(modl)
}
}