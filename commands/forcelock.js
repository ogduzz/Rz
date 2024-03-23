const Discord = require("discord.js");

exports.run = (client, message, args) => {
  if (!client.lockit) client.lockit = [];
  if(!message.member.hasPermission(["MANAGE_CHANNELS", "ADMINISTRATOR"])) {
    let lo = new Discord.MessageEmbed()
    .setDescription("**❌ Você não possue a permissão de `Gerenciar Canais` para executar este comando**")
    .setColor("#ff0000")
    
    return message.channel.send(lo)
  }
if(!message.guild.me.hasPermission(["MANAGE_CHANNELS", "ADMINISTRATOR"])) {
  let rr = new Discord.MessageEmbed()
  .setDescription("**❌ Eu não possuo a permissão de `Gerenciar Canais` para executar este comando**")
  .setColor("#ff0000")
  
  return message.channel.send(rr)
}
  
  
  
  message.channel.createOverwrite(message.guild.id, {
      SEND_MESSAGES: false 
    })
    const ebd = new Discord.MessageEmbed()
    .setDescription("**🔒 Fechei Este canal forcadamente, para que não enviem mensagens**")
    .setFooter(`Author: ${message.author.tag} | Para desbloquear o chat de novo reaja ao emoji!`, message.author.displayAvatarURL({dynamic:true}))
    .setColor("#ff0000")
      message.channel.send(ebd).then(msg => {
        msg.react("🔓")
        
        const filtro = (reacao, usuario) => reacao.emoji.name === "🔓" && usuario.id === message.author.id;
const coletor = msg.createReactionCollector(filtro);

coletor.on('collect', () => {
msg.reactions.removeAll()
let ebd2 = new Discord.MessageEmbed()
.setTitle('Unlocked')
.setTitle('**🔓 Canal desbloqueado com sucesso!**')
.setColor("GREEN")

msg.edit(ebd2);

if (!client.lockit) client.lockit = [];
if (!message.member.hasPermission(["MANAGE_CHANNELS", "ADMINISTRATOR"])) {
  let ro = new Discord.MessageEmbed()
  .setDescription("**❌ Você não possui a permissão de `Gerenciar Canais` para executar este comando**")
  .setColor("#ff0000")
  
  return message.channel.send(ro)
}

if(!message.guild.me.hasPermission(["MANAGE_CHANNELS", "ADMINISTRATOR"])) {
  let re = new Discord.MessageEmbed()
  .setDescription("❌ Eu não possuo a permissão de `Gerenciar Canais` para executar este comando")
  .setColor("#ff0000")
  
  return message.channel.send(re)
}

message.channel.createOverwrite(message.guild.id, {
SEND_MESSAGES: null
})
})
}
  )};
 
