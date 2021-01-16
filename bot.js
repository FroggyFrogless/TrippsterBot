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
    msg.reply('Currently got couple custom commands:\n**TThelp**, **TTpatreon**, **TTtwitch**, **TTversion**, **TTyoutube\n\nWe got multiple message replies which are:\n**E**, **F**, **froggyflopless**, **imagine dragons**, **just**, **L**, **oof**, **rip**, **shut up**, and plenty more!\n\n*If got any suggestions head over to* <#799822257537941604> *to suggest!*');
  }else if (msg.content.toLowerCase() === 'tt') {
    msg.reply('Use `TThelp` to see help page!');
  }
  
//Patreon
  else if (msg.content.toLowerCase() === 'ttpatreon') {
    msg.reply('head over to <#765672137817063475> for more information or just click <https://www.patreon.com/trashtripp>!');
  }
  
//Twitch
  else if (msg.content.toLowerCase() === 'tttwitch') {
    msg.reply('https://www.twitch.tv/trashtripp');
  }
  
//Version Version Version Version Version Version Version Version Version
  else if (msg.content.toLowerCase() === 'ttversion') {
    msg.channel.send('Currently on Build v103!');
  }
//Version Version Version Version Version Version Version Version Version
  
//YouTube
  else if (msg.content.toLowerCase() === 'ttyoutube') {
    msg.reply('https://www.youtube.com/channel/UCumtnW8lcbm9Zdk_83-bXkQ');
  }

//Replies
//Replies
//Replies

//Bad Boi
  else if (msg.content.toLowerCase() === 'bad boi') {
    msg.channel.send('Yup they really are a Bad Boi!');
  }
  
//EZ
  else if (msg.content.toLowerCase() === 'e') {
    msg.channel.send('Z');
  }
  
//F
  else if (msg.content.toLowerCase() === 'f') {
    msg.reply('F');
  }
  
//FroggyFLOPless
  else if (msg.content.toLowerCase() === 'froggyflopless') {
    msg.channel.send('https://youtu.be/sBduX80xUvU?t=25');
  }
  
//Imagine Dragons
  else if (msg.content.toLowerCase() === 'imagine dragons') {
    msg.channel.send('https://youtu.be/nMuoJonJ9ao');
  }
  
//Just Better
  else if (msg.content.toLowerCase() === 'just') {
    msg.channel.send('Better');
  }else if (msg.content.toLowerCase() === 'just better') {
    msg.reply('Im Better');
  }
  
//L
  else if (msg.content.toLowerCase() === 'l') {
    msg.reply('L');
  }
  
//OOF
  else if (msg.content.toLowerCase() === 'oof') {
    msg.reply('OOF');
  }
  
//OOFING IN MINECRAFT
  else if (msg.content.toLowerCase() === 'oofing') {
    msg.channel.send('OOFING IN MINECRAFT');
  }else if (msg.content.toLowerCase() === 'oofing in minecraft') {
    msg.reply('OOFING IN MINECRAFT');
  }
  
//RIP
  else if (msg.content.toLowerCase() === 'rip') {
    msg.reply('Take the L');
  }else if (msg.content.toLowerCase() === 'ripp') {
    msg.reply('Take the L');
  }else if (msg.content.toLowerCase() === 'rippp') {
    msg.reply('Take the L');
  }
  
//Shut Up
  else if (msg.content === 'SHUT UP') {
    msg.reply('HOW ABOUT YOU? !warn for being TOXIC!');
  }else if (msg.content.toLowerCase() === 'shut up') {
    msg.reply('How about you?');
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
