module.exports = {
	name: 'ping',
	cooldown: 5,
	description: 'Gets the ping.',
	execute(message) {
		message.channel.send('Pinging...').then(sent => {
			sent.edit(`Pong: ${sent.createdTimestamp - message.createdTimestamp}ms`)
			console.log(`Pong: ${sent.createdTimestamp - message.createdTimestamp}ms`)
		})
		
	},
};