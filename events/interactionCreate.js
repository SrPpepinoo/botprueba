const { CommandInteraction } = require("discord.js");

module.exports = {
  name: "interactionCreate",

  execute(interaction, client) {
    if (interaction.isChatInputCommand()) {
      const command = client.commands.get(interaction.commandName);

      if (!command) {
        interaction.reply({ content: "outdated command" });
      }

      command.execute(interaction, client);
    } 
    if (interaction.id === '1036629620230987796') {
      const role = interaction.guild.roles.cache.get("902225843001122906");
      return interaction.member.roles
        .add(role)
        .then((member) =>
          interaction.reply({
            content: `${role} se ha asignado.`,
            ephemeral: true,
          }),
        );
    }
  },
};