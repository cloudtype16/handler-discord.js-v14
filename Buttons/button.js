module.exports = {
    data: {
        name: "button",
        
    },
    async execute(interaction, client) {
        await interaction.reply({ content: "Boton Activado" });
    },
}