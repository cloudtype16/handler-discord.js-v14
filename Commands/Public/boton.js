const {
    ChatInputCommandInteraction,
    SlashCommandBuilder,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle
} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("button")
        .setDescription("Comando para usar un boton"),
    /**
     *
     * @param {ChatInputCommandInteraction} interaction
     */
    execute(interaction) {

        const button = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
            .setCustomId("button")
            .setLabel("Pulsa aqui")
            .setStyle(ButtonStyle.Success)
        )
        interaction.reply({ components: [button] });
    },
};