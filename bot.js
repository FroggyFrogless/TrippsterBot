const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//Main Commands
//Main Commands
//Main Commands

//Help
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'tthelp') {
    msg.reply('Currently got only one custom commands:\n**TTpatreon**\n\nWe got multiple message replies which are:\n**E**, **F**, **L**, **rip**, **oof**, **imagine dragons**, **froggyflopless**, **bad boi**, **just**, **shut up**\n\n*If got any suggestions head over to* <#799822257537941604> *to suggest!*');
  }else if (msg.content.toLowerCase() === 'tt') {
    msg.reply('Use `TThelp` to see help page!');
  }
});
//Patreon
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'ttpatreon') {
    msg.reply(' head over to <#765672137817063475> for more information or just click <https://www.patreon.com/trashtripp>!');
  }
});

//Replies
//Replies
//Replies

//Bad Boi
client.on('message', message => {
  if (message.content.toLowerCase() === 'bad boi') {
    message.channel.send('Yup really are a Bad Boi!');
  }
});
//EZ
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'e') {
    message.channel.send('Z');
  }
});
//F
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'f') {
    msg.reply('F');
  }
});
//FroggyFLOPless
client.on('message', message => {
  if (message.content.toLowerCase() === 'froggyflopless') {
    message.channel.send('https://youtu.be/sBduX80xUvU?t=25');
  }
});
//Imagine Dragons
client.on('message', message => {
  if (message.content.toLowerCase() === 'imagine dragons') {
    message.channel.send('https://youtu.be/nMuoJonJ9ao');
  }
});
//Just Better
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'just') {
    message.channel.send('Better');
  }else if (msg.content.toLowerCase() === 'just better') {
    msg.reply('Im Better');
  }
});
//L
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'l') {
    msg.reply('L');
  }
});
//OOF
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'oof') {
    message.channel.send('OOF');
  }
});
//OOFING IN MINECRAFT
client.on('message', message => {
  if (message.content.toLowerCase() === 'oofing') {
    message.channel.send('OOFING IN MINECRAFT');
  }else if (message.content.toLowerCase() === 'oofing in minecraft') {
    message.channel.send('OOFING IN MINECRAFT');
  }
});
//RIP
client.on('message', msg => {
  if (msg.content.toLowerCase() === 'rip') {
    msg.reply('Take the L');
  }else if (msg.content.toLowerCase() === 'ripp') {
    msg.reply('Take the L');
  }else if (msg.content.toLowerCase() === 'rippp') {
    msg.reply('Take the L');
  }
});
//Shut Up
client.on('message', msg => {
  if (msg.content === 'SHUT UP') {
    msg.reply('HOW ABOUT YOU? !warn for being TOXIC!');
  }else if (msg.content.toLowerCase() === 'shut up') {
    msg.reply('How about you?');
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
