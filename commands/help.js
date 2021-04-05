const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let help = new Discord.MessageEmbed()
      .setAuthor("help  command uh ")
      .setTitle("Commands")
      .setDescription("6 Commands, Make your giveaway right now.")
      .addField("🎁 Giveaway 🎁","start [channel-name] [Time] [winners] [Prize]\nreroll [prize name]\nend [prize name]")
      .addField("Examples", "(prefix)start #giveaway 5m 1 Testing\n(prefix)end Testing\n(prefix)reroll Testing")
      .addField("Utility", "ping, invite", true)
      .addField("ℹ Information ℹ", "stats", true)
      .addField(" hi frend this is the help command lol lmao aaaaaaa ")
      .setTimestamp()
      .setFooter(`Command Requested By ${message.author.tag}`, client.user.displayAvatarURL());
    message.channel.send("**Oh yeh baby. Here we go! Check your DMs please!**");

    return message.author.send(help);
}

module.exports.help = {
  name: "help"
}
