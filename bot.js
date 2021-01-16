const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '*Manager* [Manager] FR066Y » OOF') {
    msg.reply('OOF');
  }
});

client.on('message', message => {
  if (message.content === 'bad boi') {
    message.channel.send('Yup a Bad Boi');
  }
});

client.on('message', message => {
  if (message.content === 'imagine dragons') {
    message.channel.send('https://youtu.be/nMuoJonJ9ao');
  }
});

client.on('message', message => {
  if (message.content === 'Imagine dragons') {
    message.channel.send('https://youtu.be/nMuoJonJ9ao');
  }
});

client.on('message', message => {
  if (message.content === 'Imagine Dragons') {
    message.channel.send('https://youtu.be/nMuoJonJ9ao');
  }
});

client.on('message', message => {
  if (message.content === 'froggyflopless') {
    message.channel.send('https://youtu.be/sBduX80xUvU?t=25');
  }
});

client.on('message', message => {
  if (message.content === 'FroggyFLOPless') {
    message.channel.send('https://youtu.be/sBduX80xUvU?t=25');
  }
});

client.on('message', message => {
  if (message.content === 'oofing') {
    message.channel.send('OOFING IN MINECRAFT');
  }
});

client.on('message', message => {
  if (message.content === 'Oofing') {
    message.channel.send('OOFING IN MINECRAFT');
  }
});

client.on('message', msg => {
  if (msg.content === 'patreon') {
    msg.reply(' https://www.patreon.com/trashtripp ');
  }
});

client.on('message', msg => {
  if (msg.content === 'Patreon') {
    msg.reply(' https://www.patreon.com/trashtripp ');
  }
});

client.on('message', msg => {
  if (msg.content === 'oof') {
    msg.reply('OOF');
  }
});

client.on('message', msg => {
  if (msg.content === 'Rippp') {
    msg.reply('Take the L');
  }
});

client.on('message', msg => {
  if (msg.content === 'RIPPP') {
    msg.reply('Take the L');
  }
});

client.on('message', msg => {
  if (msg.content === 'rippp') {
    msg.reply('Take the L');
  }
});

client.on('message', msg => {
  if (msg.content === 'Oof') {
    msg.reply('OOF');
  }
});

client.on('message', msg => {
  if (msg.content === 'OOf') {
    msg.reply('OOF');
  }
});

client.on('message', msg => {
  if (msg.content === 'oOF') {
    msg.reply('OOF');
  }
});

client.on('message', msg => {
  if (msg.content === 'OoF') {
    msg.reply('OOF');
  }
});

client.on('message', msg => {
  if (msg.content === 'Rip') {
    msg.reply('Take the L');
  }
});

client.on('message', msg => {
  if (msg.content === 'rip') {
    msg.reply('Take the L');
  }
});

client.on('message', msg => {
  if (msg.content === 'OOF') {
    msg.reply('OOF');
  }
});

client.on('message', msg => {
  if (msg.content === 'L') {
    msg.reply('L');
  }
});

client.on('message', msg => {
  if (msg.content === 'l') {
    msg.reply('L');
  }
});

client.on('message', msg => {
  if (msg.content === 'f') {
    msg.reply('F');
  }
});

client.on('message', msg => {
  if (msg.content === 'F') {
    msg.reply('F');
  }
});

client.on('message', msg => {
  if (msg.content === 'E') {
    msg.reply('Z');
  }
});

client.on('message', msg => {
  if (msg.content === 'e') {
    msg.reply('z');
  }
});

client.on('message', msg => {
  if (msg.content === 'just') {
    msg.reply('better');
  }
});

client.on('message', msg => {
  if (msg.content === 'Just') {
    msg.reply('Better');
  }
});

client.on('message', msg => {
  if (msg.content === 'Just Better') {
    msg.reply('Im Better');
  }
});

client.on('message', msg => {
  if (msg.content === 'Just better') {
    msg.reply('Im Better');
  }
});

client.on('message', msg => {
  if (msg.content === 'just better') {
    msg.reply('Im Better');
  }
});

client.on('message', msg => {
  if (msg.content === 'SHUT UP') {
    msg.reply('HOW ABOUT YOU? !warn for being TOXIC!');
  }
});

client.on('message', msg => {
  if (msg.content === 'Shut Up') {
    msg.reply('How about you?');
  }
});

client.on('message', msg => {
  if (msg.content === 'Shut up') {
    msg.reply('How about you?');
  }
});

client.on('message', msg => {
  if (msg.content === 'shut up') {
    msg.reply('How about you?');
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
