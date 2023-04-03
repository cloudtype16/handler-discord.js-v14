module.exports = {
    data: {
        name: "menu",

    },
    async execute(interaction, client) {
        await interaction.reply({ content: `Seleccionaste` });
    },
}