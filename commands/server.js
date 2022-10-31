const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('servidor')
		.setDescription('Proporciona información del servidor'),
	async execute(interaction) {
		await interaction.reply(`Esto es **InsectosMC NETWORK** y tiene ${interaction.guild.memberCount} miembros`);
	},
};