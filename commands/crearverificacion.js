const {EmbedBuilder, ButtonStyle, ActionRowBuilder, ButtonBuilder, SlashCommandBuilder, CommandInteraction, PermissionFlagsBits, Client} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('crearverificacion')
    .setDescription('Establece el canal de verificación')
    .addChannelOption(option =>
        option.setName('canal')
        .setDescription('Canal de verificación')
        .setRequired(true)
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    async execute(interaction) {
        const channel = interaction.options.getChannel('canal');
        const verifyEmbed = new EmbedBuilder()
        .setTitle("<a:verificadoanimado:903694601855045653> | Verificación | <a:verificadoanimado:903694601855045653>")
        .setDescription('¡Hola! Para poder verificarte e interactuar con la comunidad y canales, debes hacer clic en el botón "**Verificar**"')
        .setColor(0x5fb041)
        let sendChannel = channel.send({
            embeds: ([verifyEmbed]),
            components: [
                new ActionRowBuilder().setComponents(
                    new ButtonBuilder().setCustomId('Verificar').setLabel('Verificar').setStyle(ButtonStyle.Success),
                ),
            ],
        });
        if (!sendChannel) {
            return interaction.reply({content: 'ERROR, inténtalo más tarde', ephemeral: true});
        } else {
            return interaction.reply({content: 'Canal de verificación establecido!', ephemeral: true});
        }
    },
};