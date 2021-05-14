module.exports = {
    name: 'online',
    aliases: ['active'],
	cooldown: 5,
	description: 'Displays number of online users.',
	execute(message) {
        message.guild.members.fetch().then(fetchedMembers => {
            const totalOnline = fetchedMembers.filter(member => member.presence.status === 'online', 'dnd');
            message.channel.send(`There are currently ${totalOnline.size} members online.`);
          });
	},
};