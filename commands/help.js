const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let help = new Discord.MessageEmbed()
      .setAuthor(" !!<< HELP >>!! ")
      .setTitle("Commands")
      .setDescription("Only 6 Commands for now, More in future.")
      .addField("🎁 Giveaway 🎁","start [channel-name] [Time] [winners] [Prize]\nreroll [prize name]\nend [prize name]")
      .addField("Examples", "(prefix)start #giveaway 5m 1 Testing\n(prefix)end Testing\n(prefix)reroll Testing")
      .addField("Utility", "ping, invite", true)
      .addField("ℹ Information ℹ", "stats", true)
      .addField(" This BOT is scripted by $am#1000 ")
      .setTimestamp()
      .setFooter(`Command Requested By ${message.author.tag}`, client.user.displayAvatarURL());
    message.channel.send("**Yes, Sir! Help on it's way, Check your DMs please!**");

    return message.author.send(help);
}

module.exports.help = {
  name: "help"
}
