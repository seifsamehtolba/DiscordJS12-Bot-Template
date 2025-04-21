    const Discord = require("discord.js");

    exports.run = (client, message, args) => {
        const embed = new Discord.MessageEmbed()
        .setColor('#0099ff')
	    .setTitle('PING')
        .setDescription("STOP PINGING MEEEE")
        .addField("test", "test")
        .setTimestamp()

        message.channel.send(embed);
    }