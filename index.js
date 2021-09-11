const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Ping!'));

app.listen(port, () =>
    console.log(`bot link: http://localhost:${port}`)
);

const { token, default_prefix } = require("./config.json");
const discord = require("discord.js");
const client = new discord.Client({
  disableEveryone: true
});
const { readdirSync } = require("fs");
const { join } = require("path");
const { Client, MessageEmbed } = require('discord.js');

client.commands = new discord.Collection();
client.aliases = new discord.Collection();

["command", "events"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

client.login(process.env.token);

client.on("message", message => {
  if (message.content === "!link discord") {
    message.channel.send("https://discord.gg/9huzBuVgKy");
  }
});

client.on("message", message => {
  if (message.content.startsWith(";me gay?")) {
    // Here you can choose between creating your array with your own links or use a api that will generate it for you. For now i'll use an array

    const wallpapers = [
      "```YES```",
      "```NO```"
      // You can add as many as you want
    ];
    // Here we will create a random number. Math.random only creates a randomly generated number between 0 and 1.
    const response = wallpapers[Math.floor(Math.random() * wallpapers.length)];
    message.reply(response);
  }
});

client.on('message', message => {
  // If the message is "how to embed"
  if (message.content === ';mukaVspr') {
    // We can create embeds using the MessageEmbed constructor
    // Read more about all that you can do with the constructor
    // over at https://discord.js.org/#/docs/main/master/class/MessageEmbed
    const embed = new MessageEmbed()
      // Set the title of the field
      .setTitle('MUKA VSPR')
      // Set the color of the embed
      .setColor(0xffff00)
      // Set the main content of the embed
      .setDescription('[CLICK HERE TO LOOK FACE VSPR](http://asset-a.grid.id/crop/0x0:0x0/780x800/photo/bobofoto/original/18617_makna-gelengan-kepala-bagi-orang-india.jpg)');
    // Send the embed to the same channel as the message
    message.channel.send(embed);
  }
});

const { CanvasSenpai } = require("canvas-senpai")
const canva = new CanvasSenpai();
 
client.on('guildMemberAdd', async member => {
 const channel = member.guild.channels.cache.find(ch => ch.name === '👋welcome-goodbye');
 if (!channel) return;
 
 let data = await canva.welcome(member, { link: "https://wallpaperaccess.com/full/187161.jpg" })
 
 const attachment = new discord.MessageAttachment(
 data,
 "https://wallpaperaccess.com/full/187161.jpg"
 );
 
 channel.send(
 `━━━━━<a:W_:852094956276809759><a:E_:852094955920293899><a:L_:852094956205768725><a:C_:852106127856238612><a:O_:852094956520210432><a:M_:852094956386254869><a:E_:852094955920293899>━━━━━
 Welcome ${member.user.tag}!
 ━━━━━━━━━━━━━━━━━━━
 <a:verifed:852112290925117471><a:right:852112291913924620><a:right:852112291913924620>Be sure to read #📜rules
 <a:verifed:852112290925117471><a:right:852112291913924620><a:right:852112291913924620>Enjoy your stay and have fun in my garden.
 ━━━━━━━━━━━━━━━━━━━
 `,
 attachment
 ); 
 });
//---------------------------------------------------------------------------------------------------------------------------------------------------



    

