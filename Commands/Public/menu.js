const {
    ChatInputCommandInteraction,
    SlashCommandBuilder,
    StringSelectMenuBuilder,
    ActionRowBuilder,
    StringSelectMenuOptionBuilder
} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("menu")
        .setDescription("Comando para usar un menu"),
    /**
     *
     * @param {ChatInputCommandInteraction} interaction
     */
    execute(interaction) {
        const menu = new ActionRowBuilder().addComponents(
            new StringSelectMenuBuilder()
                .setCustomId("menu")
                .setMaxValues(1)
                .setMinValues(1)
                .setOptions(
                    new StringSelectMenuOptionBuilder(
                        {
                    label: "Opcion 1",
                    value: 'Hola 1'
                }), new StringSelectMenuOptionBuilder({
                    label: "Opcion 2",
                    value: 'Hola 2'
                }))
        )

        interaction.reply({ components: [menu], content: "Hola" })
    },
};