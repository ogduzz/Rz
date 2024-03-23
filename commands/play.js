// After improvements
function playMusic(musicUrl) {
  try {
    let audioPlayer = new Audio(musicUrl);
    audioPlayer.play();
  } catch (error) {
    console.error('Error playing music:', error);
  }
}message.member.voice?.channel) return message.reply(`❌ **Tienes que estar en un canal de voz para ejecutar este comando!**`);
        if(message.guild.members.me.voice?.channel && message.member.voice?.channel.id != message.guild.members.me.voice?.channel.id) return message.reply(`❌ **Tienes que estar en el mismo canal de voz __QUE YO__ para ejecutar este comando!**`);
        client.distube.play(message.member.voice?.channel, args.join(" "), {
            member: message.member,
            textChannel: message.channel,
            message
        });
        message.reply(`🔎 **Buscando \`${args.join(" ")}\`...**`);
    }
}