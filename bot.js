const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({game:{ name: 'with TrashTripp on YouTube' , type: "WATCHING", url: "https://www.youtube.com/c/TrashTripp/" }})
});

client.on('message', msg => {
  if (msg.content.charAt(0).toLowerCase() === 'a') {
  }else if (msg.content.charAt(0).toLowerCase() === 'b') {
    if (msg.content.toLowerCase() === 'bad boi') {
      msg.channel.send('Yup they really are a Bad Boi!');
    }else if (msg.content.toLowerCase() === 'believer') {
      msg.channel.send('https://youtu.be/nMuoJonJ9ao');
    }else if (msg.content.toLowerCase() === 'brb') {
      msg.reply('Make sure you bring a pizza back!');
    }
  }else if (msg.content.charAt(0).toLowerCase() === 'c') {
    if (msg.content.toLowerCase() === 'corrupt footage') {
      msg.reply('https://youtu.be/bGblNvKRYro');
    }else if (msg.content.toLowerCase() === 'composttripp' || msg.content.toLowerCase() === 'compost') {
      msg.reply('https://www.youtube.com/channel/UCR1O2wEP28cDM124yiT7jsg');
    }
  }else if (msg.content.charAt(0).toLowerCase() === 'd') {
    if (msg.content.toLowerCase() === 'do a open party' || msg.content.toLowerCase() === 'do open party' || msg.content.toLowerCase() === 'do a openparty' || msg.content.toLowerCase() === 'do openparty') {
      msg.channel.send('I agree, <@493182173826777098> do an open party soon!');
    }
  }else if (msg.content.charAt(0).toLowerCase() === 'e') {
    if (msg.content.toLowerCase() === 'eassy') {
      msg.reply('CAN I TAKE IT SO I GET BIGGER IQ!');
    }else if (msg.content.toLowerCase() === 'ez' || msg.content.toLowerCase() === 'easy') {
      msg.reply('Sure it is easy');
    }
  }else if (msg.content.charAt(0).toLowerCase() === 'f') {
    if(msg.content.toLowerCase() === 'f in the chat') {
      msg.channel.send('F');
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
      msg.reply('Did you know Hay is for Horses!');
    }else if (msg.content.toLowerCase() === 'hey hey hey') {
      msg.channel.send('Hey Hey Hey, What’s up Dudes (and Dudetes), it\'s Trippster!');
    }else if (msg.content.toLowerCase() === 'hold up') {
      msg.channel.send('What are we waiting for?');
    }
  }else if (msg.content.charAt(0).toLowerCase() === 'i') {
    if (msg.content.toLowerCase() === 'ik' || msg.content.toLowerCase() === 'i know') {
      msg.reply('But do you REALLY know!');
    }else if (msg.content.toLowerCase() === 'imposter' || msg.content.toLowerCase() === 'impostor') {
      msg.reply('imtoaster');
    }else if (msg.content.toLowerCase() === 'imagine dragons') {
      msg.channel.send('https://youtu.be/nMuoJonJ9ao');
    }
  }else if (msg.content.charAt(0).toLowerCase() === 'j') {
    if (msg.content.toLowerCase() === 'just') {
      msg.channel.send('Better');
    }else if (msg.content.toLowerCase() === 'just better') {
      msg.reply('Im Better');
    }
  }else if (msg.content.charAt(0).toLowerCase() === 'k') {
    if (msg.content.toLowerCase() === 'knife op') {
      msg.channel.send('https://youtu.be/tkgbwOeJnuc');
    }
  }else if (msg.content.charAt(0).toLowerCase() === 'l') {
    if (msg.content === 'L') {
      msg.reply('L');
    }else if (msg.content.toLowerCase() === 'lmao') {
      msg.reply('Where did your butt go?');
    }else if (msg.content.toLowerCase() === 'lots of lettuce') {
      msg.reply('lol');
    }
  }else if (msg.content.charAt(0).toLowerCase() === 'm') {
    if (msg.content.toLowerCase() === 'mai\'s slave') {
      msg.channel.send('<@697871765598109746>');
    }else if (msg.content.toLowerCase() === 'missing footage') {
      msg.reply('https://youtu.be/bGblNvKRYro');
    }
  }else if (msg.content.charAt(0).toLowerCase() === 'n') {
    if (msg.content.toLowerCase().includes('nay nay killua') || msg.content.toLowerCase().includes('nay') || msg.content.toLowerCase().includes('n a y') || msg.content.toLowerCase().includes('nae') || msg.content.toLowerCase().includes('ney')) {
      msg.delete(0);
    }
  }else if (msg.content.charAt(0).toLowerCase() === 'o') {
    if (msg.content.toLowerCase() === 'open party' || msg.content.toLowerCase() === 'openparty') {
      msg.channel.send('I agree, <@493182173826777098> do an open party soon!');
    }else if (msg.content.toLowerCase() === 'oof' || msg.content.toLowerCase() === '00f' || msg.content.toLowerCase() === '0of' || msg.content.toLowerCase() === 'o0f') {
      msg.reply('OOF');
    }else if (msg.content.toLowerCase() === 'oofing in minecraft' || msg.content.toLowerCase() === 'oofing') {
      msg.reply('OOFING IN MINECRAFT');
    }
  }else if (msg.content.charAt(0).toLowerCase() === 'p') {
    if (msg.content.toLowerCase() === 'pudding') {
      msg.channel.send('Who can resist pudding?');
    }else if (msg.content.toLowerCase() === 'praise ruo') {
      msg.reply('Don\'t forget about you\'re daily praise to the Goddess Ruo');
    }
  //}else if (msg.content.charAt(0).toLowerCase() === 'q') {
  }else if (msg.content.charAt(0).toLowerCase() === 'r') {
    if (msg.content.toLowerCase() === 'recycledtripp' || msg.content.toLowerCase() === 'recycled') {
      msg.reply('https://www.youtube.com/channel/UC6YhSn5SH_UKrfoeH9DemgQ');
    }else if (msg.content.toLowerCase() === 'rip' || msg.content.toLowerCase() === 'ripp' || msg.content.toLowerCase() === 'rippp') {
      msg.reply('Take the L');
    }else if (msg.content.toLowerCase() === 'ruo') {
      msg.reply('RUO');
    }
  }else if (msg.content.charAt(0).toLowerCase() === 's') {
    if (msg.content.toLowerCase() === 'simp') {
      msg.channel.send('<@275773134035222531> is a SIMP!');
    }else if (msg.content.toLowerCase() === 'shrug') {
      msg.channel.send('¯\\_(ツ)_/¯');
    }else if (msg.content.toLowerCase() === 'sate') {
    msg.reply('SATE SATE SATE!');
    }else if (msg.content.toLowerCase() === 'sate sate sate') {
      msg.channel.send('Well Well Well');
    }else if (msg.content === 'SHUT UP') {
      msg.reply('HOW ABOUT YOU? !warn for being TOXIC!');
    }else if (msg.content.toLowerCase() === 'shaboom') {
      msg.channel.send('https://youtu.be/xuDakBpLYmw');
    }else if (msg.content.toLowerCase() === 'shut up') {
      msg.reply('How about you?');
    }
  }else if (msg.content.charAt(0).toLowerCase() === 't') {
    if (msg.content.toLowerCase() === 'the anime list') {
      msg.reply('https://docs.google.com/document/d/1_CjGfUE8dwTdil9Q7kWLj1aFyH4sBQi_XU8_yczU2_Q/edit');
    }
    //Main Commands
    //Main Commands
    //Main Commands
    //Version Version Version Version Version Version Version Version Version
      else if (msg.content.toLowerCase() === 'ttversion' || msg.content.toLowerCase() === 'ttversions' || msg.content.toLowerCase() === 'ttbuild' || msg.content.toLowerCase() === 'ttbuilds') {
        msg.channel.send('Currently on Build **v01.505**!');
      }
    //Version Version Version Version Version Version Version Version Version
    
    //Help Help Help Help Help Help Help Help Help
      else if (msg.content.toLowerCase() === 'tthelp') {
        msg.reply('Currently got couple custom commands:\n**TTdiscord**, **TThelp**, **TTfunfact**, **TTopenparty**, **TTpatreon**, **TTsay**, **TTtwitch**, **TTversion**, **TTyoutube**\n\nWe got multiple message replies for you to find and learn!\n\n*If got any suggestions head over to* <#799822257537941604> *to suggest!*');
      }else if (msg.content.toLowerCase() === 'tt') {
        msg.reply('Use `TThelp` to see help page!');
      }
    //Help Help Help Help Help Help Help Help Help

    //Discord
      else if (msg.content.toLowerCase() === 'ttdiscord') {
        msg.reply('https://discord.gg/CrMCfZMwZ2');
      }
    
    //Eval
    else if (msg.content.includes('tteval')) {
        if (msg.author.id !== '275773134035222531') {
                msg.channel.send(`${msg.author}... You really think you can run Eval!`);
                return;
            };
            const args1 = msg.content.split(" ").slice(1).join(" ");
            let evaled = eval(args1);
            typeof evaled !== String
                .toString();
            msg.channel.send(evaled);
            msg.channel.send('Done');
      }
    
    //FunFact
      else if (msg.content.toLowerCase() === 'ttfunfact' || msg.content.toLowerCase() === 'ttfunfacts') {
        var funfacts = [
            'FunFact #1: Froggy has a grand total of 0 Knife Kills!',
            'FunFact #2: TrashTripp reached 1,000 Subscribers on January 28, 2021!',
            'FunFact #3: TrashTripp has 2 Knife Aces!',
            'FunFact #4: Tripp and Froggy met because of a Minecraft giveaway in early 2017!',
            'FunFact #5: Froggy is 15 years old!',
            'FunFact #6: Tripp has edited all of his videos, however froggy has made one of his thumbnails! Can you find what one?',
            'FunFact #7: The font for Tripp’s subtitles is Digitalt!',
            'FunFact #8: Tripp has a total of 9 YouTube channels, 7 of which have at least 1 video on them. However, only 3 of them have more than three videos on them!',
            'FunFact #9: Froggy has a total of 18 YouTube channels, 8 of which have at least 1 video on them. However, only 5 of them have more than three videos on them!',
            'FunFact #10: Tripp loves to play Smash Bros, in Smash Ultimate he mains Bowser and Wario. In Melee he mains Puff and Falco!',
            'FunFact #11: Powerade Ultra Citrus Blast is worst drink ever! After Froggy drinking it <https://clips.twitch.tv/CharmingEnchantingBeanBabyRage>.',
        ];
        var funfactsOne = Math.floor(Math.random() * (funfacts.length));
        var funfactsFinal = funfacts[funfactsOne];
        msg.reply(`${funfactsFinal}`);
      }
    
    //Invite
      //else if (msg.content.toLowerCase() === 'ttinvite') {
        //msg.author.send('https://discord.com/api/oauth2/authorize?client_id=450445910548283434&permissions=8&scope=bot');
      //}

    //Open Party
      else if (msg.content.toLowerCase() === 'ttopenparty') {
        msg.reply('Friend *meFroggy#TTV* on Riot Games (VALORANT)!');
      }

    //Patreon
      else if (msg.content.toLowerCase() === 'ttpatreon') {
        msg.reply('head over to <#765672137817063475> for more information or just click <https://www.patreon.com/trashtripp>!');
      }
    
    //Say
      else if (msg.content.toLowerCase().includes('ttsay')) {
        msg.delete(0)
            let msg1 = msg.content.split(" ").slice(1).join(" ");
        
            if (msg.author.id !== '275773134035222531') {    
                msg1 = msg1
                    .replace(/@everyone/ig, "everyone")
                    .replace(/@here/ig, "here")
                    .replace(/http:/ig, " ")
                    .replace(/https:/ig, " ");
            }else{
              msg1 = msg1;
            }
            if (msg.content.toLowerCase().split(" ").slice(1).length < 1) {
                msg.channel.send(`Whoops ${msg.author}, but what do you want me to say?`)
                    .then(msg1 => {
                    msg.delete(10000)
                });
                return;
            }
            if (msg.author.id !== '275773134035222531') {
                msg.channel.send(`${msg1} - ${msg.author}`);
            }
            else {
                msg.channel.send(`${msg1}`);
            }
      }

    //Twitch
      else if (msg.content.toLowerCase() === 'tttwitch') {
        msg.reply('https://www.twitch.tv/trashtripp');
      }

    //YouTube
      else if (msg.content.toLowerCase() === 'ttyoutube') {
        msg.reply('https://www.youtube.com/channel/UCumtnW8lcbm9Zdk_83-bXkQ');
      }
  //}else if (msg.content.charAt(0).toLowerCase() === 'u') {
  //}else if (msg.content.charAt(0).toLowerCase() === 'v') {
  }else if (msg.content.charAt(0).toLowerCase() === 'w') {
    if (msg.content.toLowerCase() === 'weeb') {
      msg.channel.send('<@275773134035222531> is a WEEB!');
    }else if (msg.content.toLowerCase() === 'welcome') {
      msg.channel.send('Welcome!');
    }else if (msg.content.toLowerCase() === 'what does ruo mean' || msg.content.toLowerCase() === 'what is ruo') {
      msg.reply('Ruo is a goddess. This video is where She was found https://www.youtube.com/watch?v=9wPzvLsj5G4');
    }else if (msg.content.toLowerCase() === 'where you from' || msg.content.toLowerCase() === 'where are you from' || msg.content.toLowerCase() === 'where you from?' || msg.content.toLowerCase() === 'where are you from?') {
      msg.reply('Trippster Studios');
    }
  }else if (msg.content.charAt(0).toLowerCase() === 'x') {
    if (msg.content === 'xd') {
      msg.reply('Dx');
    }
  }else if (msg.content.charAt(0).toLowerCase() === 'y') {
    if (msg.content.toLowerCase() === 'yo yo yo') {
      msg.channel.send('yo yo yo, what’s up dudes (and dudetes)');
    }
  }else if (msg.content.charAt(0).toLowerCase() === 'z') {
    if (msg.content.toLowerCase() === 'zzz') {
       msg.reply('wake UP!');
    }
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
