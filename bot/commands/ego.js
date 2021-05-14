module.exports = {
	name: 'ego',
	cooldown: 5,
	description: 'Ego booster!',
	execute(message) {
        message.react('😊');
        message.reply('you are awesome!');
	},
};