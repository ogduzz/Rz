
const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  if (!message.member.permissions.has(["MANAGE_MESSAGES", "ADMINISTRATOR"])) {
    return message.channel.send({embed: {
      description: "**❌ Você não possui a permissão de `Gerenciar Mensagens` para executar este comando**",
      color: "#ff0000"
    }});
  }
    if(!message.guild.me.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"])) {
      return message.channel.send({embed: {
      description: "**❌ Eu não possuo a permissão de `Gerenciar Mensagens`, pars executar este comando**",
      color: "#ff0000"
    }});
    }
    
  const deleteCount = parseInt(args[0], 10);
  if (!deleteCount || deleteCount < 0 || deleteCount > 100)
    return message.reply({embed: {
      description: "**❌ Você só pode excluir de `0 a 100` mensagens**",
      color: "#ff0000"
    }});
    
    
    

  const fetched = await message.channel.messages.fetch({
    limit: deleteCount + 0
  });
  message.channel.bulkDelete(fetched);
  
  let embed = new Discord.MessageEmbed()
   .setDescription(`🗑️ **Foram deletadas \`${args[0]}\` mensagens deste canal**`)
  .setColor("GREEN")
  .setFooter(`Athor do comando ${message.author.tag}`, message.author.displayAvatarURL())
  message.channel.send(embed).then(msg => msg.delete({timeout: 30000}))

  
  let channel = await message.guild.channels.cache.get(db.get(`cMod_${message.guild.id}`))

const modl = new Discord.MessageEmbed()
.setAuthor("Clear Channel", message.guild.iconURL())
.addField("Canal", `\`${message.channel.name}\``)
.addField("Limpo por", `\`${message.author.tag}\``)
.addField("Quantia", `\`${args[0]}\``)
.setTimestamp()
.setColor("#FF0000")
channel.send(modl)

  
  
  
};