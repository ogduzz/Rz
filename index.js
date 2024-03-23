const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT); 

const Discord = require("discord.js");
const config = require("./config.json");
const db = require("quick.db");
const client = new Discord.Client(); 

client.on('message', message => {
     if (message.author.bot) return;
     if (message.channel.type == 'dm') return;
     if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
      message.channel.send({embed: {
        description: `**❌ Não consegui encontrar o comando \`${command}\` em meus comandos**`,
        color: "#ff0000"
      }}).then(m => m.delete({timeout: 5000}));
    console.error('Erro:' + err);
  }
});


client.on("ready", () => {
  let activities = [
      `Utilize ${config.prefix}help para obter ajuda`,
      `discord.gg/1533net`
    ],
    i = 0;
  setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: "STREAMING",
        url: "https://twitch.tv/S7nnyy"
      }), 1000 * 60); 
  client.user
      .setStatus("dnd")
     .catch(console.error);
console.log(`${client.user.username} Está pronto!`)
});

client.on("message", message => {

  if(message.author.bot) return;
  if(message.content == `<@!${client.user.id}>` || message.content == `<@${client.user.id}>`) {
  const bot = new Discord.MessageEmbed()
  .setDescription(`**🔬 Olá ${message.author.username} Meu Prefixo no servidor é \`${config.prefix}\`, Use \`${config.prefix}help\` para obter ajuda!**`)
  .setThumbnail(client.user.displayAvatarURL())
  .setColor("BLACK")
  return message.channel.send(bot)
}
});


client.on("message", message => {
  if(message.content.startsWith(config.prefix))
 db.add(`cmd_`, 1);
} )


client.on("guildMemberAdd", async(member) => {
let role = member.guild.roles.cache.get(db.get(`autorole_${member.guild.id}`))
if(role) {
  member.roles.add(role.id)
} else {
  return;
}
});

client.login(process.env.TOKEN); 
const Database = require("@replit/database")
const Database = require("@replit/database")
const db = new Database()
db.list().then(keys => {})
db.delete("key").then(() => {})
const Database = require("@replit/database")
const Database = require("@replit/database")
