const colors = require("colors");
const mongoose = require("mongoose");
const { mongo } = require("../config/config.json");

module.exports = {
  name: "ready",
  nam: "Data Base",
  once: true,
  execute(client) {

    if(!mongo) return;

    mongoose.connect(mongo).then(() => console.log(colors.rainbow('Data base conectada')))
  },
};