const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

exports.ActivityTypes = [
  'PLAYING',
  'STREAMING',
  'LISTENING',
  'WATCHING',
];

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
    message.channel.send('https://www.youtube.com/playlist?list=PLJRvAePWdEhT01YaWsXlfFx0id8VXog70');
  }
});

client.on('message', message => {
  if (message.content === 'stream songs') {
    message.channel.send('https://www.youtube.com/playlist?list=PLB6LBPeKyNGF5LAf7Azd2D5b-H1ctJb0j');
  }
});

client.on('message', message => {
  if (message.content === 'Bad Boi') {
    message.channel.send('Yup a Bad Boi');
  }
});

client.on('message', message => {
  if (message.content === 'Bad boi') {
    message.channel.send('Yup a Bad Boi');
  }
});

client.on('message', message => {
  if (message.content === 'ruo') {
    message.channel.send('btw ruo means rip');
  }
});

client.on('message', message => {
  if (message.content === 'RUO') {
    message.channel.send('btw RUO means rip');
  }
});

client.on('message', message => {
  if (message.content === 'btw RUO means rip') {
    message.channel.send('Take the L');
  }
});

client.on('message', message => {
  if (message.content === 'btw ruo means rip') {
    message.channel.send('Take the L');
  }
});

client.on('message', message => {
  if (message.content === 'froggyflopless') {
    message.channel.send('https://www.youtube.com/watch?v=sBduX80xUvU&t=55s');
  }
});

client.on('message', message => {
  if (message.content === 'FroggyFLOPless') {
    message.channel.send('https://www.youtube.com/watch?v=sBduX80xUvU&t=55s');
  }
});

client.on('message', message => {
  if (message.content === 'oofing in minecraft') {
    message.channel.send('OOFING IN MINECRAFT');
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

client.on('message', message => {
  if (message.content === 'Oofing in minecraft') {
    message.channel.send('OOFING IN MINECRAFT');
  }
});

client.on('message', msg => {
  if (msg.content === '~~sponsor') {
    msg.reply(' https://gaming.youtube.com/c/Trippster?action=sponsor ');
  }
});

client.on('message', msg => {
  if (msg.content === '~~sponser') {
    msg.reply(' https://gaming.youtube.com/c/Trippster?action=sponsor ');
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
  if (msg.content === 'RIPP') {
    msg.reply('Take the L');
  }
});

client.on('message', msg => {
  if (msg.content === 'ripp') {
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

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
