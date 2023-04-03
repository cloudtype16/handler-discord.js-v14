const colors = require('colors')
async function loadMenus(client) {
    const { loadFiles } = require('../Functions/fileLoader.js');

    await client.menus.clear();

    const Files = await loadFiles('Menus');

    Files.forEach((file) => {
        const menu = require(file);
        client.menus.set(menu.data.name, menu);

    });

    return console.log(colors.rainbow('Menus Loaded.'));
}

module.exports = { loadMenus };