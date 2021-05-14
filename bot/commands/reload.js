module.exports = {
    name: 'reload',
    aliases: ['refresh'],
	description: 'Reloads a command',
	execute(message, args) {
        if (!args.length) return message.channel.send(`You didn't pass a command to reload, ${message.author}.`);
        const commandName = args[0].toLowerCase();
        const command = message.client.commands.get(commandName)
            || message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

        if (!command) {
            return message.channel.send(`There are no commands with the name "${commandName}", ${message.author}.`);
        }

        delete require.cache[require.resolve(`./${command.name}.js`)];

        try {
            const newCommand = require(`./${command.name}.js`);
            message.client.commands.set(newCommand.name, newCommand);
            message.channel.send(`command \`${command.name}\` was reloaded.`);
        }
        catch (error) {
            console.error(error);
            message.channel.send(`There was an error while reloading \`${command.name}\`:\n\`${error.message}\``);
        }
	},
};