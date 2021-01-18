const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  
//Main Commands
//Main Commands
//Main Commands
  
//Version Version Version Version Version Version Version Version Version
  if (msg.content.toLowerCase() === 'ttversion' || msg.content.toLowerCase() === 'ttversions' || msg.content.toLowerCase() === 'ttbuild' || msg.content.toLowerCase() === 'ttbuilds') {
    msg.channel.send('Currently on Build **v01.113**!');
  }
//Version Version Version Version Version Version Version Version Version
  
//Help Help Help Help Help Help Help Help Help
  else if (msg.content.toLowerCase() === 'tthelp') {
    msg.reply('Currently got couple custom commands:\n**TTdiscord**, **TThelp**, **TTopenparty**, **TTpatreon**, **TTtwitch**, **TTversion**, **TTyoutube**\n\nWe got multiple message replies for you to find and learn!\n\n*If got any suggestions head over to* <#799822257537941604> *to suggest!*');
  }else if (msg.content.toLowerCase() === 'tt') {
    msg.reply('Use `TThelp` to see help page!');
  }
//Help Help Help Help Help Help Help Help Help
  
//Discord
  else if (msg.content.toLowerCase() === 'ttdiscord') {
    msg.reply('https://discord.gg/CrMCfZMwZ2');
  }
  
//Open Party
  else if (msg.content.toLowerCase() === 'ttopenparty') {
    msg.reply('Friend *meFroggy#TTV* on Riot Games (VALORANT)!');
  }
  
//Patreon
  else if (msg.content.toLowerCase() === 'ttpatreon') {
    msg.reply('head over to <#765672137817063475> for more information or just click <https://www.patreon.com/trashtripp>!');
  }
  
//Twitch
  else if (msg.content.toLowerCase() === 'tttwitch') {
    msg.reply('https://www.twitch.tv/trashtripp');
  }
  
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
  
//Believer
  else if (msg.content.toLowerCase() === 'believer' || msg.content.toLowerCase() === 'imagine dragons') {
    msg.channel.send('https://youtu.be/nMuoJonJ9ao');
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
  
//Hold Up
  else if (msg.content.toLowerCase() === 'hold up') {
    msg.channel.send('What are we waiting for?');
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
  
//LMAO
  else if (msg.content.toLowerCase() === 'lmao') {
    msg.reply('Where did your butt go?');
  }
  
//Just Better
  else if (msg.content.toLowerCase() === 'lol') {
    msg.channel.send('lots of lettuce');
  }
  
//Mai's Sl@ve (Lukinator)
  else if (msg.content.toLowerCase() === 'mai\'s slave') {
    msg.channel.send('<@697871765598109746>');
  }
  
//Missing Footage
  else if (msg.content.toLowerCase() === 'missing footage' || msg.content.toLowerCase() === 'corrupt footage') {
    msg.reply('https://youtu.be/bGblNvKRYro');
  }
  
//Pudding
  else if (msg.content.toLowerCase() === 'pudding') {
    msg.channel.send('Who can resist pudding?');
  }
  
//Open Party
  else if (msg.content.toLowerCase() === 'do a open party' || msg.content.toLowerCase() === 'do open party' || msg.content.toLowerCase() === 'open party' || msg.content.toLowerCase() === 'do a openparty' || msg.content.toLowerCase() === 'do openparty' || msg.content.toLowerCase() === 'openparty') {
    msg.channel.send('I agree, <@493182173826777098> do an open party soon!');
  }
  
//OOF
  else if (msg.content.toLowerCase() === 'oof') {
    msg.reply('OOF');
  }
  
//OOFING IN MINECRAFT
  else if (msg.content.toLowerCase() === 'oofing in minecraft' || msg.content.toLowerCase() === 'oofing') {
    msg.reply('OOFING IN MINECRAFT');
  }
  
//RIP
  else if (msg.content.toLowerCase() === 'rip' || msg.content.toLowerCase() === 'ripp' || msg.content.toLowerCase() === 'rippp') {
    msg.reply('Take the L');
  }
  
//RUO
  else if (msg.content.toLowerCase() === 'ruo') {
    msg.reply('RUO');
  }else if (msg.content.toLowerCase() === 'praise ruo') {
    msg.reply('Don\'t forget about you\'re daily praise to the Goddess Ruo');
  }else if (msg.content.toLowerCase() === 'what does ruo mean') {
    msg.reply('Ruo is a goddess. This video is where She was found https://www.youtube.com/watch?v=9wPzvLsj5G4');
  }
  
//Shut Up
  else if (msg.content === 'sate') {
    msg.reply('SATE SATE SATE!');
  }else if (msg.content.toLowerCase() === 'sate sate sate') {
    msg.channel.send('Now Now Now');
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
