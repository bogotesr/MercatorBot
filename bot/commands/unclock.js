module.exports = {
	name: 'unclock',
	cooldown: 5,
    description: 'Unlocks a channel.',
    guildOnly: true,
	execute(message) {
		if (!message.member.roles.cache.has('759156146459115572')) {
            message.reply('this command can only be used by moderators.');
            return;
          }
          message.delete();
          console.log('channel locked');
          // eslint-disable-next-line no-shadow
          const role = message.guild.roles.cache.find(role => role.name === 'Verified');
          message.channel.updateOverwrite(role, { SEND_MESSAGES: true });
          message.channel.send('This channel has been unlocked :unlock:');
	},
};