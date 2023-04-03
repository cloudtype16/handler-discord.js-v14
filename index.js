const { Client, GatewayIntentBits, Partials, Collection } = require("discord.js");

const client = new Client({
  intents: [Object.keys(GatewayIntentBits)],
  partials: [Object.keys(Partials)],
});

const { loadEvents } = require("./Handlers/eventHandler");
const { loadButtons } = require("./Handlers/buttonHandler");
const { loadMenus } = require("./Handlers/menusHandler");

client.config = require("./config/config.json");
client.events = new Collection();
client.commands = new Collection();
client.buttons = new Collection();
client.menus = new Collection();

loadEvents(client);
loadButtons(client);
loadMenus(client);

require("./Handlers/antiCrash.js")(client);

client.login(client.config.token);
