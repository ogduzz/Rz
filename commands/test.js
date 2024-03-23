const Discord = require('discord.js');
 
exports.run = async (client, message, argumentos, arg_teste, chat) => {
    const { guild } = message
  const icon = guild.iconURL()
  const comandos = new Discord.MessageEmbed()
  .setColor('BLUE')
  .setThumbnail(icon)
  .setTitle('<:ok:805762601748529173> - Meus Comandos:')
  .setDescription(`Olá ${message.author}, Clique no emoji de acordo com suas funções. \n\n <:pepeDebochado:805762597524602912> <:seta:807219290620821504> **Comandos Gerais.**\n\n <:uiui:805762602873520128> <:seta:807219290620821504> **Comandos Staff.**\n\n <:bob:805762595335438366> <:seta:807219290620821504> **Comandos de Diversão**.`)
  .setTimestamp()
  .setFooter(`Autor do comando: ${message.author.username}`, message.author.displayAvatarURL({Size: 32}))
 
  message.channel.send(comandos).then(msg => {
    msg.react('👍')
    
 
    const geralFilter = (reaction, user) => reaction.emoji.name ===  "👍" && user.id === message.author.id;
     
 
    const geral = msg.createReactionCollector(geralFilter);
 
    geral.on('collect', r2 => {
      msg.reactions.removeAll()
      const embed = new Discord.MessageEmbed()
      .setTitle('COMANDOS - GERAIS')
      .setThumbnail(icon)
      .setDescription("gay pra krl trash")
      .setColor('GREEN')
      
      msg.edit(embed).then(ms => {
        
        ms.react("🌐")
        
        
        const filtro = (reaction, user) => reaction.emoji.name === "🌐" && user.id === message.author.id;
        
        const outro = ms.createReactionCollector(filtro);
        
        outro.on('collect', r2 => {
          const bd = new Discord.MessageEmbed()
          .setDescription("sim")
          .setTitle("oi")
          ms.edit(bd)
        })
        
      });
      });
      
      
  });
  }