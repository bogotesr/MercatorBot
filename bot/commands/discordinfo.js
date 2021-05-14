module.exports = {
	name: 'discordinfo',
	description: 'Server info.',
	guildOnly: true,
	execute(message) {
		message.channel.send(`This server's name is: ${message.guild.name}\nTotal members: ${message.guild.memberCount}\nServer creation date: ${message.guild.createdAt}`);
	},
};