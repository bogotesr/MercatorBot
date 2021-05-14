module.exports = {
	name: 'dnd',
	cooldown: 5,
	description: 'Displays the number of DND users.',
	execute(message) {
        message.guild.members.fetch().then(fetchedMembers => {
            const totalDnd = fetchedMembers.filter(member => member.presence.status === 'dnd');
            message.channel.send(`${totalDnd.size} people are dnd.`);
          });
	},
};