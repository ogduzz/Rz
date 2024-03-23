const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  
  const embed = new Discord.MessageEmbed()
  .setDescription("🌐 **Calculando Ping...**")
  .setColor("GREEN")
  message.channel.send(embed).then(msg => {
    setTimeout(() => {
      let ping = new Discord.MessageEmbed()
      .setDescription(`**🛰️ Client Ping** \`${Math.round(client.ws.ping)}ms\`\n**📡 Guild Ping** \`${msg.createdTimestamp - message.createdTimestamp}ms\``)
    .setColor("GREEN")
    msg.edit(ping)
    }, 5000)
  });
}