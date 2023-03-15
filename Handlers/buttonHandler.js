const colors = require('colors')
async function loadButtons(client) {
    const { loadFiles } = require('../Functions/fileLoader.js');

    await client.buttons.clear();

    const Files = await loadFiles('Buttons');

    Files.forEach((file) => {
        const button = require(file);
        client.buttons.set(button.data.name, button);

    });

    return console.log(colors.rainbow('Buttons Loaded.'));
}

module.exports = { loadButtons };