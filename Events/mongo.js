const colors = require("colors");
const { MongoClient, ServerApiVersion } = require('mongodb');
const { mongo } = require("../config/config.json");

module.exports = {
  name: "ready",
  nam: "Data Base",
  once: true,
  execute(client) {

    if (!mongo) return;

    console.log(colors.rainbow("Conectando a la base de datos"));
    const Client = new MongoClient(mongo, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    Client.connect(err => {
      const collection = Client.db("test").collection("devices");
      // perform actions on the collection object
      Client.close();
    });
  },
};

