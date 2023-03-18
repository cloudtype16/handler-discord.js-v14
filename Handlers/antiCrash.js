const { EmbedBuilder, WebhookClient, Colors } = require("discord.js");
const { inspect } = require("util");
const { antiCrashwebhookURL } = require("../config/config.json");
const colors = require("colors");

module.exports = (client) => {
    if(antiCrashwebhookURL){
        console.log(colors.rainbow('AntiCrash Esta Habilitado!'))
        const embed = new EmbedBuilder().setColor("Red");
        
        const webhook = new WebhookClient({
            url: antiCrashwebhookURL,
        });
    
        client.on("error", (err) => {
            embed
                .setTitle("Discord API Error")
                .setURL("https://discordjs.guide/popular-topics/errors.html#api-errors")
                .setDescription(
                    `\`\`\`${inspect(err, { depth: 0 }).slice(0, 1000)}\`\`\``
                )
                .setTimestamp();
    
            return webhook.send({ embeds: [embed] });
        });
    
        process.on("unhandledRejection", (reason, promise) => {
            embed
                .setTitle("Unhandled Rejection/Catch")
                .setURL("https://nodejs.org/api/process.html#event-unhandledrejection")
                .addFields(
                    {
                        name: "Reason",
                        value: `\`\`\`${inspect(reason, { depth: 0 }).slice(0, 1000)}\`\`\``,
                    },
                    {
                        name: "Promise",
                        value: `\`\`\`${inspect(promise, { depth: 0 }).slice(0, 1000)}\`\`\``,
                    }
                )
                .setTimestamp();
    
            return webhook.send({ embeds: [embed] });
        });
    
        process.on("uncaughtException", (err, origin) => {
            embed
                .setTitle("Uncaught Exception/Catch")
                .setURL("https://nodejs.org/api/process.html#event-uncaughtexception")
                .addFields(
                    {
                        name: "Error",
                        value: `\`\`\`${inspect(err, { depth: 0 }).slice(0, 1000)}\`\`\``,
                    },
                    {
                        name: "Origin",
                        value: `\`\`\`${inspect(origin, { depth: 0 }).slice(0, 1000)}\`\`\``,
                    }
                )
                .setTimestamp();
    
            return webhook.send({ embeds: [embed] });
        });
    
        process.on("uncaughtExceptionMonitor", (err, origin) => {
            embed
                .setTitle("Uncaught Exception Monitor")
                .setURL(
                    "https://nodejs.org/api/process.html#event-uncaughtexceptionmonitor"
                )
                .addFields(
                    {
                        name: "Error",
                        value: `\`\`\`${inspect(err, { depth: 0 }).slice(0, 1000)}\`\`\``,
                    },
                    {
                        name: "Origin",
                        value: `\`\`\`${inspect(origin, { depth: 0 }).slice(0, 1000)}\`\`\``,
                    }
                )
                .setTimestamp();
    
            return webhook.send({ embeds: [embed] });
        });
    
        process.on("warning", (warn) => {
            embed
                .setTitle("Uncaught Exception Monitor Warning")
                .setURL("https://nodejs.org/api/process.html#event-warning")
                .addFields({
                    name: "Warning",
                    value: `\`\`\`${inspect(warn, { depth: 0 }).slice(0, 1000)}\`\`\``,
                })
                .setTimestamp();
    
            return webhook.send({ embeds: [embed] });
        });
    } else {
        client.on("error", (err) => {
            console.log(err);
        });
    
        process.on("unhandledRejection", (reason, promise) => {
            console.log(reason, "\n", promise);
        });
    
        process.on("uncaughtException", (err, origin) => {
            console.log(err, "\n", origin);
        });
    
        process.on("uncaughtExceptionMonitor", (err, origin) => {
            console.log(err, "\n", origin);
        });
    
        process.on("warning", (warn) => {
            console.log(warn);
        });
    }
};