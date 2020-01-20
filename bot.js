const Discord = require('discord.js');
const client = new Discord.Client();
 client.on('ready', () => {
    console.log('I am ready!');
});
 client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});
 // THIS  MUST  BE  THIS  WAY
client.login(process.env.NjYyMzg4MjE5MjkxMzY5NDg5.XiUL8A.DDcyzvhgMjbx29fP04LPo_Ci6hE):
