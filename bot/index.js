const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const Sequelize = require('sequelize');
// eslint-disable-next-line no-unused-vars
const { Op } = require('sequelize');

const cooldowns = new Discord.Collection();
const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', async () => {
	console.log('Ready!');
});

client.on('voiceStateUpdate', (oldMember, newMember) => {
    const newUserChannel = newMember.channelID;
    const oldUserChannel = oldMember.channelID;
    const guild = client.guilds.cache.get('753328823344562306')
    const role = guild.roles.cache.find(role => role.name === 'Verified')
    const textchannel = client.channels.cache.get('842167904736247818')
 
    if(newUserChannel === "842130249482764318")
    { 
        newMember.member.roles.add(role)
        textchannel.send(`${newMember.member.user.tag}, ${newMember.member.id} has verified`)
        newMember.kick()
    }
});

client.on('message', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    // eslint-disable-next-line no-unused-vars
    const commandArgs = args.join(' ');

    const command = client.commands.get(commandName)
        || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    if (!command) return;

    if (command.guildOnly && message.channel.type === 'dm') {
        return message.reply('That command cannot be executed inside of DMs.');
    }

    if (command.args && !args.length) {
        return message.channel.send(`You didn't provide any arguments, ${message.author}`);
    }

    if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Discord.Collection());
    }

    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown || 3) * 1000;

    if (timestamps.has(message.author.id)) {
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

        if (now < expirationTime) {
            const timeLeft = (expirationTime - now) / 1000;
            return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before using the ${command.name} command again.`);
        }
    }

    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

    try {
        command.execute(message, args);
    }
    catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command.');
    }
});

client.login(token);