const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('usuario')
		.setDescription('Proporciona tu información'),
	async execute(interaction) {
		await interaction.reply(`**${interaction.user.username}** se unió el **${interaction.member.joinedAt}**`);
	},
};