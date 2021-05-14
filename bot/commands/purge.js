module.exports = {
	name: 'purge',
    description: 'Purges messages.',
    guildOnly: true,
	execute(message, args) {
        //if (!message.member.roles.cache.has('759156146459115572')) {
            //message.reply('this command can only be used by moderators.');
            //return;
          //}
		const amount = parseInt(args[0]) + 1;

        if (isNaN(amount)) {
            return message.reply('that does\'t seem to be a valid number');
        }
        else if (amount < 2 || amount > 100) {
            return message.reply('you need to input a numeber bewtween 1 and 99.');
        }

        message.channel.bulkDelete(amount, true).catch(err => {
            console.error(err);
            message.channel.send('There was an error trying to purge messages in this channel.');
        });
	},
};