module.exports = {
    name: 'rule',
    aliases: ['rules'],
	cooldown: 5,
	description: 'Explains the rules.',
	execute(message, args) {
		const Discord = require('discord.js');

        if (args[0] === '1') {
			const Embed = new Discord.MessageEmbed()
				.setTitle(':information_source: Rule 1 :information_source:')
				.setColor('#ff1100')
				.setDescription('**NO NSFW CONTENT IS ALLOWED.** If you are found posting or speaking about NSFW content, you will be muted/banned, depending on severity.')
				.setFooter('Obey the rules!')

			return message.channel.send(Embed)		
		}

		if (args[0] === '2') {
			const Embed = new Discord.MessageEmbed()
				.setTitle(':information_source: Rule 2 :information_source:')
				.setColor('#ff1100')
				.setDescription('**Illegal and NSFL content is prohibited at all costs**, and anyone who posts it in this server will be banned without hesitation and will be reported for breaking ToS.')
				.setFooter('Obey the rules!')

			return message.channel.send(Embed)		
		}
		
		if (args[0] === '3') {
			const Embed = new Discord.MessageEmbed()
				.setTitle(':information_source: Rule 3 :information_source:')
				.setColor('#ff1100')
				.setDescription('**Nonconsensual sharing of another person\'s information is strictly prohibited**, and perpetrators will be muted if another person complains.')
				.setFooter('Obey the rules!')

			return message.channel.send(Embed)		
		}

		if (args[0] === '4') {
			const Embed = new Discord.MessageEmbed()
				.setTitle(':information_source: Rule 4 :information_source:')
				.setColor('#ff1100')
				.setDescription('**Try not to be excessively rude to people**, as you may get punished if they complain. Depending on the circumstances, this may also come under toxicity.')
				.setFooter('Obey the rules!')

			return message.channel.send(Embed)		
		}

		if (args[0] === '5') {
			const Embed = new Discord.MessageEmbed()
				.setTitle(':information_source: Rule 5 :information_source:')
				.setColor('#ff1100')
				.setDescription('**Toxicity is not allowed.** The perpetrator will receive a punishment of varying degree, depending on the severity.')
				.setFooter('Obey the rules!')

			return message.channel.send(Embed)		
		}

		if (args[0] === '6') {
			const Embed = new Discord.MessageEmbed()
				.setTitle(':information_source: Rule 6 :information_source:')
				.setColor('#ff1100')
				.setDescription('**Insulting, slanderous, anti-semitic, anti-LGBTQ, or anything that comes under the category of hate speech is not allowed.** People who break this rule will be kicked. Many of the words in this category are covered by automod.')
				.setFooter('Obey the rules!')

			return message.channel.send(Embed)		
		}

		if (args[0] === '7') {
			const Embed = new Discord.MessageEmbed()
				.setTitle(':information_source: Rule 7 :information_source:')
				.setColor('#ff1100')
				.setDescription('**Spamming is prohibited.** If you are found spamming, you will be warned, muted, or banned, depending on the severity.')
				.setFooter('Obey the rules!')

			return message.channel.send(Embed)		
		}
	message.channel.send('Try `?rule (1, 2, 3, 4, 5, 6, 7)`')
	},
};