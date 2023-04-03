const { ChatInputCommandInteraction } = require("discord.js");

module.exports = {
  name: "interactionCreate",
  nam: "Slash Commands",
  /**
   *
   * @param {ChatInputCommandInteraction} interaction
   */
  async execute(interaction, client) {
    if (interaction.isChatInputCommand()) {
      const command = client.commands.get(interaction.commandName);
      if (!command)
        return interaction.reply({
          content: "This command is outdated.",
          ephermal: true,
        });

      if (command.developer && interaction.user.id !== client.config.developer)
        return interaction.reply({
          content: "This copmmand is only available to the developer.",
          ephermal: true,
        });

      command.execute(interaction, client);

    } else if (interaction.isButton()) {
      const { buttons } = client;
      const { customId } = interaction;
      const button = buttons.get(customId);
      if (!button) return new Error('Este boton no tiene codigo');

      try {
        await button.execute(interaction, client);
      } catch (err) {
        console.error(err);
      }
    } else if(interaction.isStringSelectMenu()) {
      const { menus } = client;
      const { customId } = interaction;
      const menu = menus.get(customId);
      if (!menu) return new Error('Este menu no tiene codigo');

      try {
        await menu.execute(interaction, client);
      } catch (err) {
        console.error(err);
      }
    } else {
      return;
    }
  },
};
