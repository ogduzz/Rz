const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args) => {

if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send({embed: {
  description: "**Precisas da permissão de administrador para este comando**",
  color: "#ff0000"
}});

if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send({embed: {
  description:"**Eu não possuo a permissão de gerenciar cargos para executar este comando**",
  color: "#ff0000"
}});


if(args[0] === "on") {
let role = message.mentions.roles.first()
if(!role) return message.channel.send({embed: {
  description: "**Você precisa mencionar uma role pra mim setar**",
  color: "#ff0000"
}});

 try {
 let a = await db.get(`autorole_${message.guild.id}`)
 if(a === role.id) {
   return message.channel.send("Esta role ja foi setada")
 } else {

 await db.set(`autorole_${message.guild.id}`, role.id)
 message.channel.send(`${role.name} setada como autorole deste servidor`)
 }

 } catch (e) {
   return;
 }
}

if(args[0] === "off") {
  await db.delete(`autorole_${message.guild.id}`)
  message.channel.send("Autorole desativado deste servidor!")
}
}