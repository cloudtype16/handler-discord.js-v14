const { loadCommands } = require("../Handlers/commandHandler.js");
const colors = require("colors");

module.exports = {
  name: "ready",
  nam: "listo",
  once: true,
  execute(client) {
    console.log(colors.rainbow("El cliente ya esta listo"));

    loadCommands(client);
  },
};