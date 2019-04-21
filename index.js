//Index login file
//discord.js module reqired
const Discord = require('discord.js');

//Create a new Discord client
const client = new Discord.Client();

//When client is ready, run the code
//This event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});

//Login to Discord with bot token
const config = require('./config.json');
//client.login('NTY5NDI3NzQ2MzgwNTc4ODI2.XLw4mQ.DtnrXROz0GbKH5VQ_06XdezVYjI');