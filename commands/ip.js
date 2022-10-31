const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ip')
		.setDescription('Proporciona la IP del servidor'),
	async execute(interaction) {
		const embed = new EmbedBuilder()
			.setTitle('IP')
			.setDescription('La IP del servidor es: **play.insectosmc.com**')
			.setColor(0xF98B31)
			.setTimestamp(Date.now())
			.setFooter({
				iconURL: interaction.user.displayAvatarURL(),
				text: 'Solicitado por ' + interaction.user.tag
			})
			.setFields()

			await interaction.reply({
				embeds: [embed]
			})
	},
};