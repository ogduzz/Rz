const { MessageEmbed } = require("discord.js");
const config = require("../config.json");
const version = require("../package.json").version
const db = require("quick.db");

module.exports = {
  name: "botinfo",
  aliases: ["binfo", "info"],
  run: async (client, message, args) => {
    
let cmds = await db.get(`cmd_`) || 0;
    
    client.fetchApplication().then(app => {
            let owner = app.owner
    
    const binfo = new MessageEmbed()
    .setAuthor(`${message.guild.name} | BotInfo`, message.guild.iconURL())
    .setDescription(`**Olá \`${message.author.username}\` me chamo \`${client.user.username}\` e fui feito especialmente para lhe auxiliar, meu prefixo é \`${config.prefix}\`**`)
    .addField("Developer", `\`${owner.tag}\``)
     .addField(`Client Estatísticas`, `**Usuarios:** \`${client.users.cache.size}\`\n**Canais:** \`${client.channels.cache.size}\`\n**Servidores:** \`${client.guilds.cache.size}\`\n**Comandos Executados** \`${cmds}\``)
    .addField("Client Status", `**Ping:** \`${client.ws.ping}ms\`\n**Linguagem:** \`JavaScript\`\n**Host:** \`Repl.it\``)
    .setFooter(`Requisitado por ${message.author.username}`, message.author.displayAvatarURL())
     .setThumbnail(client.user.displayAvatarURL())
    .setColor("BLACK")
    message.channel.send(`${message.author}`, binfo)
    
    })
  }
}