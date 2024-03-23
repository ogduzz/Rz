const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (bot, message, args, arg_txt, chat) => {
  
  let member = message.mentions.members.first();
  var user = message.mentions.users.first()
  
  if(!message.member.permissions.has(['BAN_MEMBERS', 'ADMINISTRATOR'])){ 
    let ro = new Discord.MessageEmbed()
    .setDescription("❌ Você não possue a permissão de `Banir Usuarios` para executar este comando")
    .setColor("#ff0000")
    
    return message.channel.send(ro)
  }
    if(!message.guild.me.permissions.has(["BAN_MEMBERS", "ADMINISTRATOR"])) {
    let rr = new Discord.MessageEmbed()
    .setDescription("❌ Eu não possuo a permissão de `Banir Usuarios` para executar este comando")
    .setColor("#ff0000")
    
    return message.channel.send(rr)
    }
    if(!args[0]) {
      return message.channel.send({embed: {
        description: "**❌ Mande um id de um user a ser desbanido**",
        color: "#ff0000"
      }});
}
    
    message.guild.fetchBans().then(bans => { 
      var Found = bans.find(m => m.user.id === args[0]);
      console.log(bans)
      if(!Found) {
        return message.channe.send({embed: {
          description: `**❌ Não encontrei o id: \`${args[0]}\` na lista de bans**`,
          color: "#ff0000"
        }})
      }
        
        
      message.guild.members.unban(args[0]);
      let staff = new Discord.MessageEmbed()
        .setColor("#ff0000")
        .setTitle("⛔ Unban Members")
        .addField("Desbanido", `<@!${args[0]}>`)
        .addField("Desbanido por", `\`${message.author.tag}\``)
        .setThumbnail(message.author.displayAvatarURL({Size: 32}))
        .setTimestamp()
      message.channel.send(staff)
    })
    
    
    let channel = await message.guild.channels.cache.get(db.get(`cMod_${message.guild.id}`))
if(!channel) {
  return
} else {
const modl = new Discord.MessageEmbed()
.setAuthor("Unban Member", message.guild.iconURL())
.addField("Desbanido ID", `\`${args[0]}\``)
.addField("Desbanido por", `\`${message.author.tag}\``)
.setTimestamp()
.setColor("#FF0000")
channel.send(modl)

}
  }