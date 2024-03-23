const { MessageEmbed } = require("discord.js");
const config = require("../config.json");

module.exports.run = async (client, message, args) => {
  
  const helpe = new MessageEmbed()
  .setAuthor(`${client.user.username} • Help`, client.user.displayAvatarURL())
  .setDescription("> Para você ver todos meus comandos, basta reagir ao emoji da categoria indicada\n\n> 📂 Commands Pages\n1️⃣ **|** **Infos**\n2️⃣ **|** **Moderação**\n3️⃣ **|** **Configs**\n\n> ⬅️ **|** `Menu`\n> ❌ **|** `Fechar`")
.setColor("BLACK")
.setThumbnail(message.guild.iconURL())
.setFooter(`Requisitado por ${message.author.tag}`, message.author.displayAvatarURL())
 var reactionMessage = await message.channel.send(`${message.author}`, helpe)
  
await reactionMessage.react("1️⃣");
await reactionMessage.react("2️⃣");
await reactionMessage.react("3️⃣");
await reactionMessage.react("⬅️");
await reactionMessage.react('❌');


const filter = (reaction, user) => user.id !== message.client.user.id;
    var collector = reactionMessage.createReactionCollector(filter, {
      time: 900000
    });
    collector.on("collect", (reaction, user) => {
      const member = message.guild.member(user);
      switch (reaction.emoji.name) {
        case "1️⃣":
      reaction.users.remove(user).catch(console.error);
      const infos = new MessageEmbed()
      .setAuthor('🌐 Infos', message.guild.iconURL())
      .addField("BotInfo", `\`${config.prefix}botinfo\``)
      .addField("Invite", `\`${config.prefix}invite\``)
      .addField("UserInfo", `\`${config.prefix}userinfo\``)
      .addField("ServerInfo", `\`${config.prefix}serverinfo\``)
      .addField("Avatar", `\`${config.prefix}avatar [@user]\``)
      .addField("Gif Avatar", `\`${config.prefix}gavatar [@user]\``)
      .addField("Guild Icon", `\`${config.prefix}icon\``)
      .addField("Gif Guild Icon", `\`${config.prefix}gicon \``)
      .addField("Warns", `\`${config.prefix}warns [@user]\``)
      .setFooter(`Requisitado por ${message.author.tag}`, message.author.displayAvatarURL())
      .setColor("BLUE")
      reactionMessage.edit(infos)
      break;
case "2️⃣":
  reaction.users.remove(user).catch(console.error);
  const moderacao = new MessageEmbed()
  .setAuthor("⛔ Moderação", message.guild.iconURL())
  .addField("Ban", `\`${config.prefix}ban [@user] [motivo]\``)
  .addField("Unban", `\`${config.prefix}unban [id user]\``)
  .addField("Mute", `\`${config.prefix}mute [@user] [tempo] [motivo]\``)
  .addField("Unmute", `\`${config.prefix}unmute [@user]\``)
  .addField("Kick", `\`${config.prefix}kick [@user] [motivo]\``)
  .addField("Force Lock", `\`${config.prefix}forcelock\``)
  .addField("Slow Mode", `\`${config.prefix}slowmode [tempo]\``)
  .addField("Clear", `\`${config.prefix}clear [quantia]\``)
  .addField("Warn", `\`${config.prefix}warn [@user] [motivo]\``)
  .addField("Remove Warn", `\`${config.prefix}removewarn [@user] [quantia]\``)
  .setColor("#ff0000")
  .setTimestamp()
  .setFooter(`Requisitado por ${message.author.tag}`, message.author.displayAvatarURL())
  reactionMessage.edit(moderacao)
  break;
  case "3️⃣":
    reaction.users.remove(user).catch(console.error);
    
    const conf = new MessageEmbed()
    .setAuthor("🥋 Brevemente...", message.guild.iconURL())
   .setColor("GREEN")
  .setTimestamp()
  .setFooter(`Requisitado por ${message.author.tag}`, message.author.displayAvatarURL())
    reactionMessage.edit(conf)
    break;
    case "⬅️":
   const he = new MessageEmbed()
  .setAuthor(`${client.user.username} • Help`, client.user.displayAvatarURL())
  .setDescription("> Para você ver todos meus comandos, basta reagir ao emoji da categoria indicada\n\n> 📂 Commands Pages\n1️⃣ **|** **Infos**\n2️⃣ **|** **Moderação**\n3️⃣ **|** **Configs**\n\n> ⬅️ **|** `Menu`\n> ❌ **|** `Fechar`")
.setColor("BLACK")
.setThumbnail(message.guild.iconURL())
.setFooter(`Requisitado por ${message.author.tag}`, message.author.displayAvatarURL())
reactionMessage.edit(he)
    break;
case "❌":
          collector.stop();
          break;

        default:
          reaction.users.remove(user).catch(console.error);
          break;
      }
      
    });
    collector.on("end", () => {
      reactionMessage.delete().catch(console.error);
    });
  
  
}