const { loadCommands } = require("../Handlers/commandHandler.js");

module.exports = {
  name: "ready",
  once: true,
  execute(client) {
    console.log("El cliente ya esta listo");

    loadCommands(client);
  },
};