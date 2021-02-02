const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content.charAt(0).toLowerCase() === 'a') {
  }else if (msg.content.charAt(0).toLowerCase() === 'b') {
    if (msg.content.toLowerCase() === 'bad boi') {
      msg.channel.send('Yup they really are a Bad Boi!');
    }else if (msg.content.toLowerCase() === 'believer' || msg.content.toLowerCase() === 'imagine dragons') {
      msg.channel.send('https://youtu.be/nMuoJonJ9ao');
    }
  //}else if (msg.content.charAt(0).toLowerCase() === 'c') {
  //}else if (msg.content.charAt(0).toLowerCase() === 'd') {
  }else if (msg.content.charAt(0).toLowerCase() === 'e') {
    if (msg.content.toLowerCase() === 'e') {
      msg.channel.send('Z');
    }else if (msg.content.toLowerCase() === 'ez') {
      msg.reply('Sure it is easy');
    }
  }else if (msg.content.charAt(0).toLowerCase() === 'f') {
    if (msg.content.toLowerCase() === 'f') {
      msg.reply('F');
    }else if (msg.content.toLowerCase() === 'where you from' || msg.content.toLowerCase() === 'where are you from' || msg.content.toLowerCase() === 'where you from?' || msg.content.toLowerCase() === 'where are you from?') {
      msg.reply('Trippster Studios');
    }else if (msg.content.toLowerCase() === 'fortnite') {
      msg.channel.send('VALORANT');
    }else if (msg.content.toLowerCase() === 'froggyflopless') {
      msg.channel.send('https://youtu.be/sBduX80xUvU?t=25');
    }
  //}else if (msg.content.charAt(0).toLowerCase() === 'g') {
  }else if (msg.content.charAt(0).toLowerCase() === 'h') {
    if (msg.content.toLowerCase() === 'hay is for horses') {
      msg.reply('But grass is cheaper');
    }else if (msg.content.toLowerCase() === 'hai') {
      msg.channel.send('YES SIR!');
    }else if (msg.content.toLowerCase() === 'hey') {
      msg.reply('Hay is for Horses');
    }else if (msg.content.toLowerCase() === 'hold up') {
      msg.channel.send('What are we waiting for?');
    }
  }else if (msg.content.charAt(0).toLowerCase() === 'i') {
    if (msg.content.toLowerCase() === 'ik' || msg.content.toLowerCase() === 'i know') {
      msg.reply('But do you REALLY know!');
    }else if (msg.content.toLowerCase() === 'imposter' || msg.content.toLowerCase() === 'impostor') {
      msg.reply('imtoaster');
    }
  }else if (msg.content.charAt(0).toLowerCase() === 'j') {
    if (msg.content.toLowerCase() === 'just') {
      msg.channel.send('Better');
    }else if (msg.content.toLowerCase() === 'just better') {
      msg.reply('Im Better');
    }
  //}else if (msg.content.charAt(0).toLowerCase() === 'k') {
  }else if (msg.content.charAt(0).toLowerCase() === 'l') {
    if (msg.content.toLowerCase() === 'l') {
      msg.reply('L');
    }else if (msg.content.toLowerCase() === 'lmao') {
      msg.reply('Where did your butt go?');
    }else if (msg.content.toLowerCase() === 'lots of lettuce') {
      msg.reply('lol');
    }
  }else if (msg.content.charAt(0).toLowerCase() === 'm') {
    if (msg.content.toLowerCase() === 'mai\'s slave') {
      msg.channel.send('<@697871765598109746>');
    }else if (msg.content.toLowerCase() === 'missing footage' || msg.content.toLowerCase() === 'corrupt footage') {
      msg.reply('https://youtu.be/bGblNvKRYro');
    }
  //}else if (msg.content.charAt(0).toLowerCase() === 'n') {
  }else if (msg.content.charAt(0).toLowerCase() === 'o') {
    if (msg.content.toLowerCase() === 'do a open party' || msg.content.toLowerCase() === 'do open party' || msg.content.toLowerCase() === 'open party' || msg.content.toLowerCase() === 'do a openparty' || msg.content.toLowerCase() === 'do openparty' || msg.content.toLowerCase() === 'openparty') {
      msg.channel.send('I agree, <@493182173826777098> do an open party soon!');
    }else if (msg.content.toLowerCase() === 'oof') {
      msg.reply('OOF');
    }else if (msg.content.toLowerCase() === 'oofing in minecraft' || msg.content.toLowerCase() === 'oofing') {
      msg.reply('OOFING IN MINECRAFT');
    }
  }else if (msg.content.charAt(0).toLowerCase() === 'p') {
    if (msg.content.toLowerCase() === 'pudding') {
      msg.channel.send('Who can resist pudding?');
    }
  //}else if (msg.content.charAt(0).toLowerCase() === 'q') {
  }else if (msg.content.charAt(0).toLowerCase() === 'r') {
    if (msg.content.toLowerCase() === 'rip' || msg.content.toLowerCase() === 'ripp' || msg.content.toLowerCase() === 'rippp') {
      msg.reply('Take the L');
    }else if (msg.content.toLowerCase() === 'ruo') {
      msg.reply('RUO');
    }else if (msg.content.toLowerCase() === 'praise ruo') {
      msg.reply('Don\'t forget about you\'re daily praise to the Goddess Ruo');
    }else if (msg.content.toLowerCase() === 'what does ruo mean') {
      msg.reply('Ruo is a goddess. This video is where She was found https://www.youtube.com/watch?v=9wPzvLsj5G4');
    }
  }else if (msg.content.charAt(0).toLowerCase() === 's') {
    if (msg.content.toLowerCase() === 'simp') {
      msg.channel.send('<@275773134035222531>');
    }else if (msg.content.toLowerCase() === 'shrug') {
      msg.channel.send('¯\\_(ツ)_/¯');
    }else if (msg.content === 'sate') {
    msg.reply('SATE SATE SATE!');
    }else if (msg.content.toLowerCase() === 'sate sate sate') {
      msg.channel.send('Now Now Now');
    }else if (msg.content === 'SHUT UP') {
      msg.reply('HOW ABOUT YOU? !warn for being TOXIC!');
    }else if (msg.content.toLowerCase() === 'shut up') {
      msg.reply('How about you?');
    }
  }else if (msg.content.charAt(0).toLowerCase() === 't') {
    //Main Commands
    //Main Commands
    //Main Commands

    //Version Version Version Version Version Version Version Version Version
      if (msg.content.toLowerCase() === 'ttversion' || msg.content.toLowerCase() === 'ttversions' || msg.content.toLowerCase() === 'ttbuild' || msg.content.toLowerCase() === 'ttbuilds') {
        msg.channel.send('Currently on Build **v01.500**!');
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
    
      else if (msg.content.toLowerCase() === 'ttsay') {
        msg.delete(0)
          .catch(console.error);
            let msg1 = msg.content.split(" ").slice(1).join(" ");
            msg1 = msg1
                .replace(/@everyone/ig, "everyone")
                .replace(/@here/ig, "here")
                .replace(/http:/ig, " ")
                .replace(/https:/ig, " ");
            if (msg.author.id !== '275773134035222531') {
                msg.channel.send(`${msg1} - ${msg.author}`);
            }
            else {
                msg.channel.send(`${msg1}`);
            }
      }
  //}else if (msg.content.charAt(0).toLowerCase() === 'u') {
  //}else if (msg.content.charAt(0).toLowerCase() === 'v') {
  }else if (msg.content.charAt(0).toLowerCase() === 'w') {
    if (msg.content.toLowerCase() === 'welcome') {
      msg.channel.send('Welcome!');
    }
  }else if (msg.content.charAt(0).toLowerCase() === 'x') {
    if (msg.content === 'xd') {
      msg.reply('Dx');
    }
  //}else if (msg.content.charAt(0).toLowerCase() === 'y') {
  }else if (msg.content.charAt(0).toLowerCase() === 'z') {
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
