module.exports = {
    name: 'ip',
    aliases: ['port', 'server'],
	cooldown: 5,
	description: 'Explains the rules.',
	execute(message) {
        const Discord = require("discord.js")

        const Embed = new Discord.MessageEmbed()
        .setTitle('Server IP')
        .setColor('#87ceeb')
        .addFields(
            { name: 'Java IP', value: 'mercatorearth.ddns.net' },
            { name: 'Bedrock IP/Port', value: 'IP: mercatorearth.ddns.net | Port: 19132' }
        )
        .setFooter('Hope you have fun!')

        message.channel.send(Embed)	
    },
}