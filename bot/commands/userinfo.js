module.exports = {
	name: 'userinfo',
	description: 'Info about yourself.',
	execute(message) {
		if (!message.mentions.users.size) {
			message.channel.send(`Your avatar: ${message.author.displayAvatarURL({ dynamic: true })}`);
		}

		const avatarList = message.mentions.users.map(user => {
			return `${user.username}'s avatar: ${user.displayAvatarURL({ dynamic: true })}`;
		});

		message.channel.send(`Your username: ${message.author.username}\nYour tag: ${message.author.tag}\nYour ID: ${message.author.id}`);
	},
};