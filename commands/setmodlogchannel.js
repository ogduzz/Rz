const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, message, args) => {

if(!message.member.hasPermission("ADMINISTRATOR")) {
let per = new Discord.MessageEmbed()
.setDescription("**❌ Você não possue a permissão de `Administrador` para executar este comando**")
.setColor("#ff0000")

return message.channel.send(per)
}


if(args[0] === "on") {
let channel =
      message.mentions.channels.first() 

    if (!channel)
      return message.channel.send({embed: {
        description: "**❌ Mencione un canal**",
        color: "#ff0000"
      }})

    try {
      let a = await db.get(`cMod_${message.guild.id}`);

      if (channel.id === a) {
        return message.channel.send({embed: {
          description: "**❌ Este canal ja foi setado**",
         color: "#ff0000"
        }}); 
     
      } else {
        client.guilds.cache
          .get(message.guild.id)
          .channels.cache.get(channel.id)
          .send("**🛑 | Mod Log Setado neste Canal!**");
        db.set(`cMod_${message.guild.id}`, channel.id);

        message.channel.send(
          `**☑️ | Mod Log Channel Setado em ${channel}**`);
      }
      
 
    } catch (e) {
      return message.channel.send(`Error - ${e.message}`);
    }
}
if(args[0] === "off") {
  
  await db.delete(`cMod_${message.guild.id}`)
  
  
  const del = new Discord.MessageEmbed()
   .setAuthor(`Mod Log Channel Desligado`, message.guild.iconURL())
   .setDescription("🚫 **O Channel mod log foi desativado deste Servidor!**")
   .setFooter(`Desativado por ${message.author.tag}`, message.author.displayAvatarURL())
.setColor("GREEN")
message.channel.send(del)
   
   
}
  }
