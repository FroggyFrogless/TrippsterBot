const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'tthelp') {
    msg.reply('Currently got only one custom commands./nTTpatreon\n We got multiple message replies which are:/nE, F, L, rip, oof, imagine dragons, froggyflopless, just, shut up');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'tt') {
    msg.reply('Use `TThelp` to see help page!');
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'bad boi') {
    message.channel.send('Yup really are a Bad Boi!');
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'imagine dragons') {
    message.channel.send('https://youtu.be/nMuoJonJ9ao');
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'froggyflopless') {
    message.channel.send('https://youtu.be/sBduX80xUvU?t=25');
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'oofing') {
    message.channel.send('OOFING IN MINECRAFT');
  }
});

client.on('message', message => {
  if (message.content.toLowerCase() === 'oofing in minecraft') {
    message.channel.send('OOFING IN MINECRAFT');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'ttpatreon') {
    msg.reply(' https://www.patreon.com/trashtripp ');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'oof') {
    msg.reply('OOF');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'rippp') {
    msg.reply('Take the L');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'ripp') {
    msg.reply('Take the L');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'rip') {
    msg.reply('Take the L');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'l') {
    msg.reply('L');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'f') {
    msg.reply('F');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'e') {
    msg.reply('Z');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'just') {
    message.channel.send('Better!');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'just better') {
    msg.reply('Im Better');
  }
});

client.on('message', msg => {
  if (msg.content === 'SHUT UP') {
    msg.reply('HOW ABOUT YOU? !warn for being TOXIC!');
  }else if (msg.content.toLowerCase() === 'shut up') {
    msg.reply('How about you?');
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
