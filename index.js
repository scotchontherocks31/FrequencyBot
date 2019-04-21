//Index login file
//discord.js module reqired
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

//Create a new Discord client
const client = new Discord.Client();

//When client is ready, run the code
//This event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready.');
});

client.on('message', message => {
	//console.log(message.content);//For messages sent to the console
	if(message.content.startsWith(`${prefix}hello`)){
		message.channel.send("Hi!");
	}
})

client.login(token);

//Login to Discord with bot token