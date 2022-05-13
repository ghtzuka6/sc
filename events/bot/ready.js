const client = require("../../index");
const chalk = require("chalk");
const gradient = require("gradient-string");
const Settings = require('../../files/settings.js');
const isPrivate = Settings.options.privateMode;

const activity = {
  status: Settings.presence.status,
  type: Settings.presence.type,
  prefix: Settings.bot.prefix,
  url: Settings.bot.url,
  name: Settings.presence.name,
}

const ascii = `

████████╗███████╗██████╗░██████╗░░█████╗░██████╗░
╚══██╔══╝██╔════╝██╔══██╗██╔══██╗██╔══██╗██╔══██╗
░░░██║░░░█████╗░░██████╔╝██████╔╝██║░░██║██████╔╝
░░░██║░░░██╔══╝░░██╔══██╗██╔══██╗██║░░██║██╔══██╗
░░░██║░░░███████╗██║░░██║██║░░██║╚█████╔╝██║░░██║
░░░╚═╝░░░╚══════╝╚═╝░░╚═╝╚═╝░░╚═╝░╚════╝░╚═╝░░╚═╝                                                    
`;
const Database = require('@replit/database');
const db = new Database();

client.once("ready", async () => {
  await db.set(`uptime`, `${Math.floor(Date.now() / 1000)}`) 
/*
client.user.setPresence({
  activities: [{
    name: `${activity.name}`,
    type: `${activity.type}`,
    url: `${activity.url}`
  }], status: `${activity.status}` 
});
*/

  client.user.setPresence({
  activities: [{
    name: `;help`,
    type: `LISTENING`
  }], status: `idle` 
});
  
  if (isPrivate === true) {
    console.log(gradient("orange", "red")(`${ascii}`));
    console.log(chalk.red(`{!} :: Logged in as ${client.user.tag}\n{!} :: Bot is on Private Mode\n\n`));
  } else if (isPrivate === false) {
    console.log(gradient("magenta", "purple")(`${ascii}`));
    console.log(chalk.magentaBright(`{!} :: Logged in as ${client.user.tag}\n{!} :: Bot is on Public Mode\n\n`));
  }
});